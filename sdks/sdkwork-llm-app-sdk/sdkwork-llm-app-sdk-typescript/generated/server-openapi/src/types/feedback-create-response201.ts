import type { LlmFeedback } from './llm-feedback';

export interface FeedbackCreateResponse201 {
  code: 0;
  data: unknown & { item: LlmFeedback; };
  /** Server-owned request correlation id. */
  traceId: string;
}
