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
    // Low traffic for now, so trace every page load and navigation. Lower this as usage grows.
    tracesSampleRate: 1.0,
    // The API is same-origin (/api/v1/...), so only relative URLs get trace headers.
    tracePropagationTargets: [/^\//],
    // PII scrubbing (Section 34.4): no IP address or user fields on events.
    dataCollection: { userInfo: false },
  });
}
