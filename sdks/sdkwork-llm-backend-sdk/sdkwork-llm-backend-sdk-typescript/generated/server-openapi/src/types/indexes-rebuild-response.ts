import type { LlmLearningJob } from './llm-learning-job';

export interface IndexesRebuildResponse {
  code: 0;
  data: unknown & { item: LlmLearningJob; };
  /** Server-owned request correlation id. */
  traceId: string;
}
