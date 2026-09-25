import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import { ApiError } from './apiClient';

export const CONTENT_STALE_TIME = 5 * 60 * 1000;

/** Retry network and server errors once; never retry 4xx responses. */
function shouldRetry(failureCount: number, error: unknown): boolean {
  if (error instanceof ApiError && error.status >= 400 && error.status < 500) return false;
  return failureCount < 1;
}

export function createQueryClient(): QueryClient {
  // On 401 anywhere, forget the signed-in user; ProtectedRoute then redirects to log in.
  // On 403 (usually an expired CSRF token), fetch a fresh token (Section 30.9).
  const onError = (error: unknown) => {
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
