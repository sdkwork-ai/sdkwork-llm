import type { LlmSpace } from './llm-space';
import type { PageInfo } from './page-info';

export interface SpacesListResponse {
  code: 0;
  data: unknown & { items: LlmSpace[]; pageInfo: PageInfo; };
  /** Server-owned request correlation id. */
  traceId: string;
}
