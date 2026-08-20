import type { LlmLearningSettings } from './llm-learning-settings';

export interface LearningSettingsUpdateResponse {
  code: 0;
  data: unknown & { item: LlmLearningSettings; };
  /** Server-owned request correlation id. */
  traceId: string;
}
