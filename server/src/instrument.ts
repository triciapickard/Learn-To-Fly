import * as Sentry from '@sentry/node';
import dotenv from 'dotenv';

/**
 * Sentry error monitoring and tracing for the API (Section 34.4). Loaded with `node --import`
 * so it runs before Express, HTTP and Mongoose load and can instrument them. With no
 * SENTRY_DSN (local dev, tests, previews) the SDK stays off and nothing is sent.
 */
if (process.env.NODE_ENV !== 'production') dotenv.config({ quiet: true });

const dsn = process.env.SENTRY_DSN;

if (dsn) {
  Sentry.init({
    dsn,
    environment: process.env.NODE_ENV ?? 'development',
    release: process.env.GIT_SHA || process.env.RENDER_GIT_COMMIT || undefined,
    // Low traffic for now, so trace every request, except health checks from Render and the
    // uptime monitor, which would use up the free span quota.
    tracesSampler: ({ name }) => (name.includes('/api/v1/health') ? 0 : 1),
    // PII scrubbing (Section 34.3, 34.4): no user fields, cookies (session id) or request
    // bodies (passwords on auth routes).
    dataCollection: { userInfo: false, cookies: false, httpBodies: [] },
  });
}
