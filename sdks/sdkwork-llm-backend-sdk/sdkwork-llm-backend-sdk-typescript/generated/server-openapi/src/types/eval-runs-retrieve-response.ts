import type { LlmEvalRun } from './llm-eval-run';

export interface EvalRunsRetrieveResponse {
  code: 0;
  data: unknown & { item: LlmEvalRun; };
  /** Server-owned request correlation id. */
  traceId: string;
}
