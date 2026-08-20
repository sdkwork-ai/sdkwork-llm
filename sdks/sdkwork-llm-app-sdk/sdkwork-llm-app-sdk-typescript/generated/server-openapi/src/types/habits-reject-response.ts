import type { LlmHabit } from './llm-habit';

export interface HabitsRejectResponse {
  code: 0;
  data: unknown & { item: LlmHabit; };
  /** Server-owned request correlation id. */
  traceId: string;
}
