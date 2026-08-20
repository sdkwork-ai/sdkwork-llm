import type { LlmLearningSettings } from './llm-learning-settings';

export interface LearningSettingsRetrieveResponse {
  code: 0;
  data: unknown & { item: LlmLearningSettings; };
  /** Server-owned request correlation id. */
  traceId: string;
}
