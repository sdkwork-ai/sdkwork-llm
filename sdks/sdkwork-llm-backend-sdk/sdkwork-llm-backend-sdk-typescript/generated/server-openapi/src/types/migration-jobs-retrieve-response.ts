import type { LlmLearningJob } from './llm-learning-job';

export interface MigrationJobsRetrieveResponse {
  code: 0;
  data: unknown & { item: LlmLearningJob; };
  /** Server-owned request correlation id. */
  traceId: string;
}
