import type { LlmRecordSource } from './llm-record-source';
import type { PageInfo } from './page-info';

export interface RecordsSourcesListResponse {
  code: 0;
  data: unknown & { items: LlmRecordSource[]; pageInfo: PageInfo; };
  /** Server-owned request correlation id. */
  traceId: string;
}
