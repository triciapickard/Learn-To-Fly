import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/features/auth/api';
import { api } from '@/lib/apiClient';
import type {
  AttemptCreateInput,
  AttemptCreateResponse,
  ChallengeAttemptsResponse,
} from '@shared/schemas/api';

export const attemptKeys = {
  challenge: (slug: string) => ['attempts', slug] as const,
  progress: ['progress'] as const,
  dashboard: ['dashboard'] as const,
};

/** The signed-in user's attempts at a challenge, newest first, 20 at a time. */
export function useChallengeAttempts(slug: string) {
  const { isAuthenticated } = useAuth();
  return useInfiniteQuery({
    queryKey: attemptKeys.challenge(slug),
    queryFn: ({ pageParam }) =>
      api.get<ChallengeAttemptsResponse>(`/me/challenges/${slug}/attempts`, {
        query: { limit: 20, before: pageParam },
      }),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (last) => last.nextBefore ?? undefined,
    enabled: isAuthenticated,
  });
}

export function useSubmitAttempt(slug: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: AttemptCreateInput) =>
      api.post<AttemptCreateResponse>(`/challenges/${slug}/attempts`, input),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: attemptKeys.challenge(slug) });
      void queryClient.invalidateQueries({ queryKey: attemptKeys.progress });
      void queryClient.invalidateQueries({ queryKey: attemptKeys.dashboard });
    },
  });
}

export { useMyProgress } from '@/features/progress/api';
