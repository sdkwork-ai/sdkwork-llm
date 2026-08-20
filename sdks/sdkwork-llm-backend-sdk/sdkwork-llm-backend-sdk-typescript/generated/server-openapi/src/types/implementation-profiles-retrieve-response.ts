import type { LlmImplementationProfile } from './llm-implementation-profile';

export interface ImplementationProfilesRetrieveResponse {
  code: 0;
  data: unknown & { item: LlmImplementationProfile; };
  /** Server-owned request correlation id. */
  traceId: string;
}
