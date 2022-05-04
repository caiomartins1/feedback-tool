import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendEmailSpy }
);

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'test comment',
        screenshot: 'data:image/png;base64:asdklashjdkjasasjkdh',
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendEmailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit a feedback without a type', async () => {
    await expect(
      submitFeedback.execute({
        type: '',
        comment: 'test comment',
        screenshot: 'data:image/png;base64:asdklashjdkjasasjkdh',
      })
    ).rejects.toThrow();
  });

  it('should not be able to submit a feedback without a comment', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64:asdklashjdkjasasjkdh',
      })
    ).rejects.toThrow();
  });

  it('should not be able to submit a feedback with an invalid screenshot format', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'comment',
        screenshot: 'notAb64Format',
      })
    ).rejects.toThrow();
  });
});
