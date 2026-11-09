/**
 * Sentry Session Replay, split out of instrument.ts so its ~40 KB (gzipped) loads as a lazy
 * chunk after start-up instead of counting against the initial JS budget (Section 33.1).
 */
export { replayIntegration } from '@sentry/react';
