import type { LlmRetrievalProfile } from './llm-retrieval-profile';

export interface RetrievalProfilesRetrieveResponse {
  code: 0;
  data: unknown & { item: LlmRetrievalProfile; };
  /** Server-owned request correlation id. */
  traceId: string;
}
