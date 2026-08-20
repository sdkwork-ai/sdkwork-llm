import type { LlmContextPack } from './llm-context-pack';

export interface ContextPacksCreateResponse201 {
  code: 0;
  data: unknown & { item: LlmContextPack; };
  /** Server-owned request correlation id. */
  traceId: string;
}
