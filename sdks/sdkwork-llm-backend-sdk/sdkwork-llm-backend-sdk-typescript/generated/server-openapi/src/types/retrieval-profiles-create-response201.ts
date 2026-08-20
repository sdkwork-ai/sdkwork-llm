import type { LlmRetrievalProfile } from './llm-retrieval-profile';

export interface RetrievalProfilesCreateResponse201 {
  code: 0;
  data: unknown & { item: LlmRetrievalProfile; };
  /** Server-owned request correlation id. */
  traceId: string;
}
