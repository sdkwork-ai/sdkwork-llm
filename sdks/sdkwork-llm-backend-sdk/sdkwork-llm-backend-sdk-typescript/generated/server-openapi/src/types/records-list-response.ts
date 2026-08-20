import type { LlmRecord } from './llm-record';
import type { PageInfo } from './page-info';

export interface RecordsListResponse {
  code: 0;
  data: unknown & { items: LlmRecord[]; pageInfo: PageInfo; };
  /** Server-owned request correlation id. */
  traceId: string;
}
