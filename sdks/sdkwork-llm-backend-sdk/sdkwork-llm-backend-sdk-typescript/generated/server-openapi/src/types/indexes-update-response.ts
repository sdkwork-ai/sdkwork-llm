import type { LlmIndex } from './llm-index';

export interface IndexesUpdateResponse {
  code: 0;
  data: unknown & { item: LlmIndex; };
  /** Server-owned request correlation id. */
  traceId: string;
}
