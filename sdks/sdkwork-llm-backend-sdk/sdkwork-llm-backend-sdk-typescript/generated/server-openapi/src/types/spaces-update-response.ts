import type { LlmSpace } from './llm-space';

export interface SpacesUpdateResponse {
  code: 0;
  data: unknown & { item: LlmSpace; };
  /** Server-owned request correlation id. */
  traceId: string;
}
