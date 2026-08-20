import type { LlmEvent } from './llm-event';
import type { PageInfo } from './page-info';

export interface EventsListResponse {
  code: 0;
  data: unknown & { items: LlmEvent[]; pageInfo: PageInfo; };
  /** Server-owned request correlation id. */
  traceId: string;
}
