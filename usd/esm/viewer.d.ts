import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import type { Viewer, ViewerOptions } from "./types.js";
/**
 * A ready-made viewer: renderer, studio lighting, orbit controls and
 * on-demand rendering around {@link loadUsd}. The canvas is transparent unless
 * a `background` is given. Throws a `webgl` UsdLoadError without WebGL.
 *
 * @param container  the element to show the viewer in: it gets a canvas filling it
 */
export declare function createViewer(container: HTMLElement, options?: ViewerOptions): Viewer;
/** Points the camera at the visible bounds of `object`. */
export declare function frame(camera: THREE.PerspectiveCamera, controls: OrbitControls | undefined, object: THREE.Object3D): void;
