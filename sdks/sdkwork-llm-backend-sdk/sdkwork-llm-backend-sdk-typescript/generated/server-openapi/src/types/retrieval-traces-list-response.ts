import type { LlmRetrievalTrace } from './llm-retrieval-trace';
import type { PageInfo } from './page-info';

export interface RetrievalTracesListResponse {
  code: 0;
  data: unknown & { items: LlmRetrievalTrace[]; pageInfo: PageInfo; };
  /** Server-owned request correlation id. */
  traceId: string;
}
