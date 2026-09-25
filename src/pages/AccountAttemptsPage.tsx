import { useInfiniteQuery } from '@tanstack/react-query';
import { History } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/Button';
import { TierBadge } from '@/components/ChallengeMeta';
import { Link } from '@/components/Link';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { LoadingRegion, Skeleton } from '@/components/Skeleton';
import { EmptyState, ErrorState } from '@/components/States';
import { Table } from '@/components/Table';
import { useChallenges } from '@/features/content/api';
import { usePageTitle } from '@/hooks/usePageTitle';
import { api } from '@/lib/apiClient';
import { excerpt, formatDateTime } from '@/lib/format';
import type { AttemptDto, AttemptsResponse } from '@shared/schemas/api';

/** Every attempt the signed-in user has debriefed, newest first (`GET /me/attempts`). */
export default function AccountAttemptsPage() {
  usePageTitle('Your challenge attempts');
  const query = useInfiniteQuery({
    queryKey: ['attempts', 'all'],
    queryFn: ({ pageParam }) =>
      api.get<AttemptsResponse>('/me/attempts', { query: { limit: 20, before: pageParam } }),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (last) => last.nextBefore ?? undefined,
  });
  const { data: list } = useChallenges();
  const titles = new Map((list?.challenges ?? []).map((c) => [c.slug, `${c.code} ${c.title}`]));
  const attempts = query.data?.pages.flatMap((p) => p.attempts) ?? [];

  return (
    <PageContainer narrow>
      <Breadcrumbs items={[{ label: 'Account', to: '/account' }, { label: 'Attempts' }]} />
      <PageHeader
        className="mt-4"
        title="Your challenge attempts"
        description="Every debrief you have submitted, newest first."
      />
      {query.isPending ? (
        <LoadingRegion label="Loading your attempts" className="flex flex-col gap-2">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </LoadingRegion>
      ) : query.isError ? (
        <ErrorState onRetry={() => void query.refetch()} />
      ) : attempts.length === 0 ? (
        <EmptyState
          icon={History}
          title="No attempts yet"
          message="Fly a challenge and submit a debrief to see it here."
          action={
            <Button asChild variant="secondary">
              <Link unstyled to="/challenges">
                Browse challenges
              </Link>
            </Button>
          }
        />
      ) : (
        <>
          <Table<AttemptDto>
            caption="Attempts"
            hideCaption
            rows={attempts}
            rowKey={(a) => a.id}
            columns={[
              { key: 'date', header: 'Date', cell: (a) => formatDateTime(a.submittedAt) },
              {
                key: 'challenge',
                header: 'Challenge',
                cell: (a) => (
                  <Link to={`/challenges/${a.challengeSlug}?tab=history`}>
                    {titles.get(a.challengeSlug) ?? a.challengeSlug}
                  </Link>
                ),
              },
              { key: 'tier', header: 'Tier', cell: (a) => <TierBadge tier={a.tier} /> },
              { key: 'pct', header: 'Score', numeric: true, cell: (a) => `${a.percentage}%` },
              { key: 'notes', header: 'Notes', cell: (a) => excerpt(a.notes, 60) || '—' },
            ]}
          />
          {query.hasNextPage && (
            <Button
              variant="secondary"
              className="mt-4"
              onClick={() => void query.fetchNextPage()}
              disabled={query.isFetchingNextPage}
            >
              {query.isFetchingNextPage ? 'Loading…' : 'Show older attempts'}
            </Button>
          )}
        </>
      )}
    </PageContainer>
  );
}
