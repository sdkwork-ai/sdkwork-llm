import type { LlmProviderHealth } from './llm-provider-health';

export interface ProviderHealthRetrieveResponse {
  code: 0;
  data: unknown & { item: LlmProviderHealth; };
  /** Server-owned request correlation id. */
  traceId: string;
}
