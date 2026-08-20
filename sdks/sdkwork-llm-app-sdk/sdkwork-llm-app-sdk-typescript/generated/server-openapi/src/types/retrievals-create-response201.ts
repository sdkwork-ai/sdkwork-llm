import type { LlmRetrievalResult } from './llm-retrieval-result';

export interface RetrievalsCreateResponse201 {
  code: 0;
  data: unknown & { item: LlmRetrievalResult; };
  /** Server-owned request correlation id. */
  traceId: string;
}
