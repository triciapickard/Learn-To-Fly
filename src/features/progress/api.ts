import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/features/auth/api';
import { api } from '@/lib/apiClient';
import type {
  DashboardResponse,
  LessonProgressDto,
  LessonProgressUpdate,
  ProgressResponse,
  QuizAnswerInput,
  QuizAnswerResponse,
} from '@shared/schemas/api';

export const progressKeys = {
  progress: ['progress'] as const,
  dashboard: ['dashboard'] as const,
};

/** Lessons, challenges and modules the signed-in user has progress on (Section 29.4). */
export function useMyProgress() {
  const { isAuthenticated } = useAuth();
  return useQuery({
    queryKey: progressKeys.progress,
    queryFn: () => api.get<ProgressResponse>('/me/progress'),
    enabled: isAuthenticated,
  });
}

/** Everything the dashboard shows, in one request (Section 20.9). */
export function useDashboard() {
  return useQuery({
    queryKey: progressKeys.dashboard,
    queryFn: () => api.get<DashboardResponse>('/me/dashboard'),
  });
}

/**
 * Saves lesson progress. Marking complete updates the cached progress straight away
 * (optimistic, step 8.7) and rolls back if the request fails.
 */
export function useUpdateLessonProgress(slug: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (update: LessonProgressUpdate) =>
      api.put<{ progress: LessonProgressDto }>(`/me/lessons/${slug}/progress`, update),
    onMutate: async (update) => {
      if (update.status !== 'completed') return { previous: undefined };
      await queryClient.cancelQueries({ queryKey: progressKeys.progress });
      const previous = queryClient.getQueryData<ProgressResponse>(progressKeys.progress);
      if (previous) {
        const now = new Date().toISOString();
        queryClient.setQueryData<ProgressResponse>(progressKeys.progress, {
          ...previous,
          lessons: {
            ...previous.lessons,
            [slug]: {
              lessonSlug: slug,
              lastSectionId: previous.lessons[slug]?.lastSectionId ?? null,
              startedAt: previous.lessons[slug]?.startedAt ?? now,
              status: 'completed',
              completedAt: now,
            },
          },
        });
      }
      return { previous };
    },
    onError: (_error, _update, context) => {
      if (context?.previous) queryClient.setQueryData(progressKeys.progress, context.previous);
    },
    onSuccess: ({ progress }, update) => {
      queryClient.setQueryData<ProgressResponse>(progressKeys.progress, (old) =>
        old ? { ...old, lessons: { ...old.lessons, [slug]: progress } } : old,
      );
      if (update.status === 'completed') {
        void queryClient.invalidateQueries({ queryKey: progressKeys.progress });
      }
      void queryClient.invalidateQueries({ queryKey: progressKeys.dashboard });
    },
  });
}

/** Records a quiz answer on the server; the client has already shown the feedback. */
export function useRecordQuizAnswer(slug: string) {
  return useMutation({
    mutationFn: (input: QuizAnswerInput) =>
      api.post<QuizAnswerResponse>(`/me/lessons/${slug}/quiz-answers`, input),
  });
}
