import type { LlmEvent } from './llm-event';

export interface EventsCreateResponse201 {
  code: 0;
  data: unknown & { item: LlmEvent; };
  /** Server-owned request correlation id. */
  traceId: string;
}
