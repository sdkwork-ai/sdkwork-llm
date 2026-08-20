import type { LlmImplementationProfile } from './llm-implementation-profile';

export interface ImplementationProfilesCreateResponse201 {
  code: 0;
  data: unknown & { item: LlmImplementationProfile; };
  /** Server-owned request correlation id. */
  traceId: string;
}
