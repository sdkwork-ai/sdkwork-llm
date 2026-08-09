//! Gateway bootstrap for sdkwork-llm.
//!
//! The assembly exports the indivisible `ApiAssemblyContribution` contract
//! (API_ASSEMBLY_SPEC.md section 4); the platform cloud gateway composes the
//! contribution with its process-shared PostgreSQL pool.

use axum::Router;
use sdkwork_database_sqlx::DatabasePool;
use sdkwork_intelligence_llm_repository_sqlx::{
    bootstrap_llm_data_plane_from_env, open_native_sql_store_from_pool, LlmDataPlane,
    LlmDatabasePool,
};
use sdkwork_intelligence_llm_service::OpenLlmService;
use sdkwork_routes_llm_app_api::{
    build_router_with_shared_app_api, wrap_router_with_web_framework_from_env as wrap_app_router,
};
use sdkwork_routes_llm_backend_api::{
    build_router_with_shared_backend_api,
    wrap_router_with_web_framework_from_env as wrap_backend_router,
};
use sdkwork_routes_llm_open_api::{
    build_router_with_shared_open_api, wrap_router_with_web_framework_from_env as wrap_open_router,
};
use sdkwork_web_bootstrap::{
    ApiAssemblyContribution, DatabasePoolReadinessCheck, ReadinessCheck,
};
use sdkwork_web_core::HttpRouteManifest;
use std::sync::Arc;

/// Indivisible host-neutral API assembly contribution (web-bootstrap contract).
pub type ApiAssembly = ApiAssemblyContribution;

fn combined_route_manifest() -> HttpRouteManifest {
    let manifests = [
        sdkwork_routes_llm_open_api::gateway_route_manifest(),
        sdkwork_routes_llm_app_api::gateway_route_manifest(),
        sdkwork_routes_llm_backend_api::gateway_route_manifest(),
    ];
    HttpRouteManifest::from_owned_routes(
        manifests
            .into_iter()
            .flat_map(|manifest| manifest.routes().to_vec())
            .collect(),
    )
}

fn openapi_documents() -> Result<Vec<serde_json::Value>, String> {
    [
        (
            "sdkwork-llm-open-api",
            include_str!("../../../apis/open-api/Llm-open-api.openapi.json"),
        ),
        (
            "sdkwork-llm-app-api",
            include_str!("../../../apis/app-api/Llm-app-api.openapi.json"),
        ),
        (
            "sdkwork-llm-backend-api",
            include_str!("../../../apis/backend-api/Llm-backend-api.openapi.json"),
        ),
    ]
    .into_iter()
    .map(|(owner, source)| {
        serde_json::from_str(source).map_err(|error| format!("invalid {owner} OpenAPI: {error}"))
    })
    .collect()
}

fn contribution_from(
    router: Router,
    readiness_check: Arc<dyn ReadinessCheck>,
) -> Result<ApiAssembly, String> {
    ApiAssemblyContribution::from_openapi_documents(
        "sdkwork-llm",
        "SDKWork LLM API",
        router,
        combined_route_manifest(),
        openapi_documents()?,
        Vec::new(),
        readiness_check,
    )
}

async fn bootstrap_llm_data_plane_from_pool(
    pool: DatabasePool,
) -> Result<LlmDataPlane, String> {
    let pool: LlmDatabasePool = pool;
    sdkwork_intelligence_llm_repository_sqlx::bootstrap_llm_database(pool.clone()).await?;
    let store = open_native_sql_store_from_pool(&pool).await?;
    Ok(LlmDataPlane { pool, store })
}

pub async fn assemble_api_router() -> Result<ApiAssembly, String> {
    let data_plane = bootstrap_llm_data_plane_from_env().await?;
    let product = Arc::new(OpenLlmService::new(data_plane.store));

    let open_business_router = build_router_with_shared_open_api(product.clone());
    let app_business_router = build_router_with_shared_app_api(product.clone());
    let backend_business_router = build_router_with_shared_backend_api(product);

    let open_router = wrap_open_router(open_business_router).await;
    let app_router = wrap_app_router(app_business_router).await;
    let backend_router = wrap_backend_router(backend_business_router).await;

    let router = Router::new()
        .merge(open_router)
        .merge(app_router)
        .merge(backend_router);

    contribution_from(router, Arc::new(sdkwork_web_bootstrap::AlwaysReady))
}

/// Assemble the LLM contribution against a caller-provided database pool so the
/// platform cloud gateway can share its process-wide PostgreSQL pool.
pub async fn assemble_api_router_with_pool(pool: DatabasePool) -> Result<ApiAssembly, String> {
    let data_plane = bootstrap_llm_data_plane_from_pool(pool.clone()).await?;
    let product = Arc::new(OpenLlmService::new(data_plane.store));

    let router = Router::new()
        .merge(build_router_with_shared_open_api(product.clone()))
        .merge(build_router_with_shared_app_api(product.clone()))
        .merge(build_router_with_shared_backend_api(product));

    contribution_from(
        router,
        Arc::new(DatabasePoolReadinessCheck::new(pool)),
    )
}
