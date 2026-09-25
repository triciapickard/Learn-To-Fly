import { QueryClient } from '@tanstack/react-query';
import { ApiError } from './apiClient';

export const CONTENT_STALE_TIME = 5 * 60 * 1000;

/** Retry network and server errors once; never retry 4xx responses. */
function shouldRetry(failureCount: number, error: unknown): boolean {
  if (error instanceof ApiError && error.status >= 400 && error.status < 500) return false;
  return failureCount < 1;
}

export function createQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: CONTENT_STALE_TIME,
        retry: shouldRetry,
        refetchOnWindowFocus: false,
      },
      mutations: { retry: false },
    },
  });
}

export const queryClient = createQueryClient();
