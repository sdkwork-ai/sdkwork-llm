import type { LlmHabit } from './llm-habit';

export interface HabitsUpdateResponse {
  code: 0;
  data: unknown & { item: LlmHabit; };
  /** Server-owned request correlation id. */
  traceId: string;
}
