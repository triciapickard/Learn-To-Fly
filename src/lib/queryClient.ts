import * as Sentry from '@sentry/react';
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import { ApiError } from './apiClient';

export const CONTENT_STALE_TIME = 5 * 60 * 1000;

/**
 * Sends failed queries and mutations to Sentry (Section 34.4). React Query catches these
 * errors and the page shows an error state, so without this they would never be reported.
 * 4xx responses are the user's input or session, not bugs, so they are skipped. When the API
 * never answered, the server is down or restarting rather than broken, so it is reported as a
 * warning: a network failure while the browser is online, or a gateway error (502/503/504)
 * without our error body, e.g. the Vite dev proxy while the API restarts or waits for
 * MongoDB. A no-op when Sentry is off.
 */
export function reportQueryError(error: unknown): void {
  if (!(error instanceof ApiError)) {
    // A bug in a query function (bad response shape, a TypeError), not an API failure.
    if (error instanceof DOMException && error.name === 'AbortError') return;
    Sentry.captureException(error);
    return;
  }
  const isNetworkError = error.code === 'NETWORK_ERROR' && navigator.onLine;
  // apiClient's gateway fallback; a 503 from the API itself carries its request id.
  const isGatewayError = error.code === 'SERVICE_UNAVAILABLE' && !error.requestId;
  const isServerError = error.status >= 500 && !isGatewayError;
  if (!isServerError && !isNetworkError && !isGatewayError) return;

  const endpoint = error.endpoint ?? 'unknown endpoint';
  // Every ApiError is thrown from the same line in apiClient, so group by request instead of
  // by stack trace, and give the issue a title that names the request.
  const report = new Error(`${error.status} ${error.code} from ${endpoint}`, { cause: error });
  report.name = 'ApiError';
  Sentry.captureException(report, {
    level: isServerError ? 'error' : 'warning',
    fingerprint: ['api-error', endpoint, String(error.status)],
    tags: {
      'api.endpoint': endpoint,
      'api.status': error.status,
      'api.code': error.code,
      // Matches the requestId tag on the server's Sentry event and the server logs.
      ...(error.requestId && { requestId: error.requestId }),
    },
  });
}

/** Retry network and server errors once; never retry 4xx responses. */
function shouldRetry(failureCount: number, error: unknown): boolean {
  if (error instanceof ApiError && error.status >= 400 && error.status < 500) return false;
  return failureCount < 1;
}

export function createQueryClient(): QueryClient {
  // On 401 anywhere, forget the signed-in user; ProtectedRoute then redirects to log in.
  // On 403 (usually an expired CSRF token), fetch a fresh token (Section 30.9).
  const onError = (error: unknown) => {
    reportQueryError(error);
    if (!(error instanceof ApiError)) return;
    if (error.status === 401) client.setQueryData(['me'], { user: null });
    if (error.status === 403) void client.invalidateQueries({ queryKey: ['csrf'] });
  };
  const client: QueryClient = new QueryClient({
    queryCache: new QueryCache({ onError }),
    mutationCache: new MutationCache({ onError }),
    defaultOptions: {
      queries: {
        staleTime: CONTENT_STALE_TIME,
        retry: shouldRetry,
        refetchOnWindowFocus: false,
      },
      mutations: { retry: false },
    },
  });
  return client;
}

export const queryClient = createQueryClient();
