import type { LlmRecord } from './llm-record';

export interface RecordsSupersedeResponse {
  code: 0;
  data: unknown & { item: LlmRecord; };
  /** Server-owned request correlation id. */
  traceId: string;
}
