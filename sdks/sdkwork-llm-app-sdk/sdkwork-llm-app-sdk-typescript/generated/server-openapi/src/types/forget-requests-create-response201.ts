import type { LlmForgetJob } from './llm-forget-job';

export interface ForgetRequestsCreateResponse201 {
  code: 0;
  data: unknown & { item: LlmForgetJob; };
  /** Server-owned request correlation id. */
  traceId: string;
}
