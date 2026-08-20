import type { LlmRecord } from './llm-record';

export interface RecordsCreateResponse201 {
  code: 0;
  data: unknown & { item: LlmRecord; };
  /** Server-owned request correlation id. */
  traceId: string;
}
