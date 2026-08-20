import type { LlmAuditLog } from './llm-audit-log';
import type { PageInfo } from './page-info';

export interface AuditLogsListResponse {
  code: 0;
  data: unknown & { items: LlmAuditLog[]; pageInfo: PageInfo; };
  /** Server-owned request correlation id. */
  traceId: string;
}
