import type { LlmEvalRun } from './llm-eval-run';
import type { PageInfo } from './page-info';

export interface EvalRunsListResponse {
  code: 0;
  data: unknown & { items: LlmEvalRun[]; pageInfo: PageInfo; };
  /** Server-owned request correlation id. */
  traceId: string;
}
