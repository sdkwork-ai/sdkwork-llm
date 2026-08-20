import type { LlmContextPack } from './llm-context-pack';

export interface ContextPacksRetrieveResponse {
  code: 0;
  data: unknown & { item: LlmContextPack; };
  /** Server-owned request correlation id. */
  traceId: string;
}
