import type { LoadOptions, LoadResult } from "./types.js";
/**
 * Loads a USD stage into a three.js group. Resolves once geometry is ready;
 * `complete` settles when every texture has streamed in. Rejects with a
 * UsdLoadError of code `worker` where there are no Web Workers (e.g. on a server).
 *
 * @param url  root layer URL (relative URLs resolve against the page), or its key in `options.files`
 */
export declare function loadUsd(url: string, options?: LoadOptions): Promise<LoadResult>;
