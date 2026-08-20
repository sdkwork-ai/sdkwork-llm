import type { LlmCandidate } from './llm-candidate';

export interface CandidatesRetrieveResponse {
  code: 0;
  data: unknown & { item: LlmCandidate; };
  /** Server-owned request correlation id. */
  traceId: string;
}
