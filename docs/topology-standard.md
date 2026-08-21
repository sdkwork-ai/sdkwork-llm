# SDKWork LLM Runtime Topology

This repository adopts the shared SDKWork runtime topology framework.

- Platform standard: `../sdkwork-specs/APP_RUNTIME_TOPOLOGY_SPEC.md`
- Naming authority: `../sdkwork-specs/APP_RUNTIME_TOPOLOGY_NAMING.md`
- Adoption guide: `../sdkwork-specs/APP_RUNTIME_TOPOLOGY_ADOPTION.md`
- Framework: `../sdkwork-app-topology`

## Archetype

`application-http-gateway`: LLM exposes open, app, and backend HTTP surfaces through `sdkwork-routes-llm-*` route crates. Surfaces bind through `sdkwork-api-llm-standalone-gateway`.

## Default Dev Profile

`standalone.development`

```bash
pnpm dev
pnpm topology:validate
```

## Local URLs

| Surface | URL |
| --- | --- |
| `application.public-ingress` | http://127.0.0.1:8080 |
| `application.app-http` | http://127.0.0.1:8080 |
| `application.backend-http` | http://127.0.0.1:8080 |
| `application.open-http` | http://127.0.0.1:8080 |

Client env keys:

- `VITE_SDKWORK_LLM_DEPLOYMENT_PROFILE`: browser-visible deployment profile.
- `VITE_SDKWORK_LLM_APPLICATION_PUBLIC_HTTP_URL`: unified ingress surface.
- `VITE_SDKWORK_LLM_APPLICATION_APP_HTTP_URL`: app SDK surface.
- `VITE_SDKWORK_LLM_APPLICATION_BACKEND_HTTP_URL`: backend SDK surface.
- `VITE_SDKWORK_LLM_APPLICATION_OPEN_HTTP_URL`: open SDK surface.

Profile values live in `etc/topology/*.env` only.

## Notes

Active profile ids use `<deploymentProfile>.<environment>` (`standalone` / `cloud` × `development` / `test` / `staging` / `production`). All surfaces share the standalone gateway bind in current profiles.
