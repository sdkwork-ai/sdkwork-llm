import type { LlmEvent } from './llm-event';

export interface EventsRetrieveResponse {
  code: 0;
  data: unknown & { item: LlmEvent; };
  /** Server-owned request correlation id. */
  traceId: string;
}
