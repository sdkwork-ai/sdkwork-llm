import type { LlmCapabilities } from './llm-capabilities';

export interface CapabilitiesRetrieveResponse {
  code: 0;
  data: unknown & { item: LlmCapabilities; };
  /** Server-owned request correlation id. */
  traceId: string;
}
