import type { LlmExportJob } from './llm-export-job';

export interface ExportJobsRetrieveResponse {
  code: 0;
  data: unknown & { item: LlmExportJob; };
  /** Server-owned request correlation id. */
  traceId: string;
}
