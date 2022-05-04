export type FeedbackCreateData = {
  type: string;
  comment: string;
  screenshot?: string;
};

export interface FeedbacksRepository {
  create: (feedback: FeedbackCreateData) => Promise<void>;
}
