import type { LlmRetrievalTrace } from './llm-retrieval-trace';

export interface RetrievalTracesRetrieveResponse {
  code: 0;
  data: unknown & { item: LlmRetrievalTrace; };
  /** Server-owned request correlation id. */
  traceId: string;
}
