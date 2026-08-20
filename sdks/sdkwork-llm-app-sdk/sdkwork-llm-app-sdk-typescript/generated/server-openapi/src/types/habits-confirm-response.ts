import type { LlmHabit } from './llm-habit';

export interface HabitsConfirmResponse {
  code: 0;
  data: unknown & { item: LlmHabit; };
  /** Server-owned request correlation id. */
  traceId: string;
}
