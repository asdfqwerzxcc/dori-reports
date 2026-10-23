import type { UsdLoadErrorCode } from "./types.js";
/** Why a load failed: `aborted`, `fetch` (root layer or a resource limit), `compose`, `worker` or `webgl`. */
export declare class UsdLoadError extends Error {
    readonly name = "UsdLoadError";
    readonly code: UsdLoadErrorCode;
    /** The URL that failed, when there is one. */
    readonly url?: string | undefined;
    /** HTTP status of a failed root layer fetch: 401 / 403 for gated or private repos, 404 when missing. */
    readonly status?: number | undefined;
    constructor(code: UsdLoadErrorCode, message: string, { url, status, cause }?: {
        url?: string | undefined;
        status?: number | undefined;
        cause?: unknown;
    });
}
