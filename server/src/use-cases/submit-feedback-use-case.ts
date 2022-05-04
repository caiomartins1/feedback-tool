import { MailAdapter } from '../adapters/mail-adapter';
import { FeedbacksRepository } from '../repositories/feedbacks-repository';

type SubmitFeedbackUseCaseRequest = {
  type: string;
  comment: string;
  screenshot?: string;
};

export class SubmitFeedbackUseCase {
  constructor(
    private readonly feedbacksRepository: FeedbacksRepository,
    private readonly mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error('Type is required');
    }

    if (!comment) {
      throw new Error('Comment is required');
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format');
    }
    await this.feedbacksRepository.create({ type, comment, screenshot });

    await this.mailAdapter.sendMail({
      subject: 'New Feedback!',
      body: [
        `<p>Feedback Type: ${type}</p>`,
        `<p>Comment: ${comment}</p>`,
      ].join('\n'),
    });
  }
}
