import type { LlmIndex } from './llm-index';

export interface IndexesCreateResponse201 {
  code: 0;
  data: unknown & { item: LlmIndex; };
  /** Server-owned request correlation id. */
  traceId: string;
}
