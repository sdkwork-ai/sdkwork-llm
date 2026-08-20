import type { LlmImplementationProfile } from './llm-implementation-profile';
import type { PageInfo } from './page-info';

export interface ImplementationProfilesListResponse {
  code: 0;
  data: unknown & { items: LlmImplementationProfile[]; pageInfo: PageInfo; };
  /** Server-owned request correlation id. */
  traceId: string;
}
