import type { LlmProviderBinding } from './llm-provider-binding';

export interface ProviderBindingsUpdateResponse {
  code: 0;
  data: unknown & { item: LlmProviderBinding; };
  /** Server-owned request correlation id. */
  traceId: string;
}
