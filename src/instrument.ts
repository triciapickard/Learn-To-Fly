import * as Sentry from '@sentry/react';
import { useEffect } from 'react';
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from 'react-router';

/**
 * Sentry error monitoring and tracing (Section 34.4). Imported first in main.tsx so it runs
 * before anything else. With no VITE_SENTRY_DSN (local dev, tests, previews) the SDK stays off
 * and nothing is sent. The DSN is public by nature (Appendix E).
 */
const dsn = import.meta.env.VITE_SENTRY_DSN;

if (dsn) {
  Sentry.init({
    dsn,
    environment: import.meta.env.MODE,
    release: import.meta.env.VITE_RELEASE || undefined,
    integrations: [
      Sentry.reactRouterBrowserTracingIntegration({
        useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes,
      }),
    ],
    // Session Replay: record 10% of sessions in production, every session while testing
    // (dev builds with a DSN set). Always keep the replay of a session that hits an error.
    replaysSessionSampleRate: import.meta.env.PROD ? 0.1 : 1.0,
    replaysOnErrorSampleRate: 1.0,
    // Low traffic for now, so trace every page load and navigation. Lower this as usage grows.
    tracesSampleRate: 1.0,
    // The API is same-origin (/api/v1/...), so only relative URLs get trace headers.
    tracePropagationTargets: [/^\//],
    // PII scrubbing (Section 34.4): no IP address or user fields on events.
    dataCollection: { userInfo: false },
  });

  // Session Replay, lazy-loaded so it stays out of the initial bundle. The defaults mask all
  // text and inputs and block images and video, so recordings show page layout, clicks and
  // scrolling, never what a learner reads or types. It uses the sample rates set above.
  void import('./sentryReplay')
    .then(({ replayIntegration }) => {
      Sentry.addIntegration(replayIntegration());
    })
    .catch(() => {
      // A failed chunk load only loses replay; error monitoring keeps working.
    });
}
