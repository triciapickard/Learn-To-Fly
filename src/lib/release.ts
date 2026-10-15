/**
 * What this build is: the version from package.json (injected by vite.config.ts) and the
 * release stage. The v0.0 early beta ships Modules 0 and 1 and adds modules as each one is
 * verified in the sim (v1.md D-26). Update LIVE_MODULES when a module is published.
 */
export const APP_VERSION: string =
  typeof __APP_VERSION__ === 'string' && __APP_VERSION__ ? __APP_VERSION__ : '0.0.0';

/** "v0.0": the major and minor version, the way people say it. */
export const RELEASE_LABEL = `v${APP_VERSION.split('.').slice(0, 2).join('.')}`;

export const RELEASE_STAGE = 'Early beta';

/** The modules published in this release, as a phrase. */
export const LIVE_MODULES = 'Modules 0 and 1';

/** The number of v1 modules (v1.md Section 13.1), so copy can say how many are still to come. */
export const PLANNED_MODULE_COUNT = 9;
