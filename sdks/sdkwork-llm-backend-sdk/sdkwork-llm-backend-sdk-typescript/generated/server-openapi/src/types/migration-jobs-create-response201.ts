import type { LlmLearningJob } from './llm-learning-job';

export interface MigrationJobsCreateResponse201 {
  code: 0;
  data: unknown & { item: LlmLearningJob; };
  /** Server-owned request correlation id. */
  traceId: string;
}
