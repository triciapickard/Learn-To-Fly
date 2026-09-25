import { Clock, MapPin, SearchX } from 'lucide-react';
import { useSearchParams } from 'react-router';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import {
  CHALLENGE_TYPES,
  challengeTypeMeta,
  DifficultyDots,
  TierBadge,
  TypeIcon,
} from '@/components/ChallengeMeta';
import { FormField } from '@/components/FormField';
import { Link } from '@/components/Link';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { Select } from '@/components/Select';
import { EmptyState } from '@/components/States';
import { useAuth } from '@/features/auth/api';
import { useMyProgress } from '@/features/challenges/api';
import { useChallenges, useModules } from '@/features/content/api';
import { DraftBadge } from '@/features/content/DraftBadge';
import { QueryStates } from '@/features/content/queryState';
import { usePageTitle } from '@/hooks/usePageTitle';
import { plural } from '@/lib/format';
import type { ChallengeProgressDto, ChallengeSummary } from '@shared/schemas/api';

const FILTERS = ['module', 'type', 'difficulty', 'status', 'priority'] as const;
type Filter = (typeof FILTERS)[number];
type Status = 'not-started' | 'attempted' | 'passed';

function statusOf(p: ChallengeProgressDto | undefined): Status {
  if (!p) return 'not-started';
  return p.passed ? 'passed' : 'attempted';
}

export function filterChallenges(
  challenges: ChallengeSummary[],
  filters: Partial<Record<Filter, string>>,
  progress: Record<string, ChallengeProgressDto> = {},
) {
  return challenges.filter(
    (c) =>
      (!filters.module || c.moduleSlug === filters.module) &&
      (!filters.type || c.type === filters.type) &&
      (!filters.difficulty || String(c.difficulty) === filters.difficulty) &&
      (!filters.priority || c.priority === filters.priority) &&
      (!filters.status || statusOf(progress[c.slug]) === filters.status),
  );
}

/** Challenges list (Section 20.5): curriculum order, filters in the URL. */
export default function ChallengesPage() {
  usePageTitle('Challenges');
  const [params, setParams] = useSearchParams();
  const { data, isPending, error, refetch } = useChallenges();
  const { data: modulesData } = useModules();
  const { isAuthenticated } = useAuth();
  const { data: progress } = useMyProgress();
  const filters = Object.fromEntries(
    FILTERS.map((f) => [f, params.get(f) ?? '']).filter(([, v]) => v),
  ) as Partial<Record<Filter, string>>;

  const setFilter = (name: Filter, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(name, value);
    else next.delete(name);
    setParams(next, { replace: true });
  };

  return (
    <QueryStates isPending={isPending} error={error} refetch={refetch} label="Loading challenges">
      {() => {
        const all = data!.challenges;
        const shown = filterChallenges(all, filters, progress?.challenges);
        const modules = modulesData?.modules ?? [];
        return (
          <PageContainer>
            <PageHeader
              title="Challenges"
              description="Fly these in Microsoft Flight Simulator 2024, then debrief honestly. Each one has an exact sim setup, a procedure and a scored rubric."
            />
            <form
              role="search"
              aria-label="Filter challenges"
              className="mb-6 grid gap-3 rounded-card border border-border bg-surface p-4 sm:grid-cols-2 lg:grid-cols-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <FormField label="Module">
                <Select
                  value={filters.module ?? ''}
                  onChange={(e) => setFilter('module', e.target.value)}
                >
                  <option value="">All modules</option>
                  {modules.map((m) => (
                    <option key={m.slug} value={m.slug}>
                      Module {m.order}: {m.title}
                    </option>
                  ))}
                </Select>
              </FormField>
              <FormField label="Type">
                <Select
                  value={filters.type ?? ''}
                  onChange={(e) => setFilter('type', e.target.value)}
                >
                  <option value="">All types</option>
                  {CHALLENGE_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {challengeTypeMeta[t].label}
                    </option>
                  ))}
                </Select>
              </FormField>
              <FormField label="Difficulty">
                <Select
                  value={filters.difficulty ?? ''}
                  onChange={(e) => setFilter('difficulty', e.target.value)}
                >
                  <option value="">Any difficulty</option>
                  {[1, 2, 3, 4, 5].map((d) => (
                    <option key={d} value={d}>
                      {d} of 5
                    </option>
                  ))}
                </Select>
              </FormField>
              <FormField
                label="Status"
                hint={isAuthenticated ? undefined : 'Log in to filter by status.'}
              >
                <Select
                  value={filters.status ?? ''}
                  disabled={!isAuthenticated}
                  onChange={(e) => setFilter('status', e.target.value)}
                >
                  <option value="">Any status</option>
                  <option value="not-started">Not started</option>
                  <option value="attempted">Attempted, not passed</option>
                  <option value="passed">Passed</option>
                </Select>
              </FormField>
              <FormField label="Priority">
                <Select
                  value={filters.priority ?? ''}
                  onChange={(e) => setFilter('priority', e.target.value)}
                >
                  <option value="">Core and bonus</option>
                  <option value="P0">Core</option>
                  <option value="P1">Bonus</option>
                </Select>
              </FormField>
            </form>

            <p className="mb-3 text-sm text-muted" role="status">
              Showing {plural(shown.length, 'challenge')}
              {shown.length !== all.length && ` of ${all.length}`}
            </p>

            {shown.length ? (
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {shown.map((c) => {
                  const best = progress?.challenges[c.slug];
                  return (
                    <li key={c.slug}>
                      <Link
                        unstyled
                        to={`/challenges/${c.slug}`}
                        className="group flex h-full flex-col gap-3 rounded-card border border-border bg-surface p-4 shadow-1 hover:border-primary"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-sm text-muted">{c.code}</span>
                          <TypeIcon type={c.type} />
                        </div>
                        <h2 className="text-lg font-semibold group-hover:underline">{c.title}</h2>
                        <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
                          <DifficultyDots value={c.difficulty} />
                          <span className="inline-flex items-center gap-1">
                            <Clock aria-hidden className="size-4" /> {c.estimatedMinutes} min
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin aria-hidden className="size-4" /> {c.airportIcao}
                          </span>
                          {c.priority === 'P1' && <Badge variant="bonus">Bonus</Badge>}
                          {c.draft && <DraftBadge />}
                          {best && <TierBadge tier={best.bestTier} />}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <EmptyState
                icon={SearchX}
                title="No challenges match these filters"
                message="Try fewer filters."
                action={
                  <Button variant="secondary" onClick={() => setParams({}, { replace: true })}>
                    Clear filters
                  </Button>
                }
              />
            )}
          </PageContainer>
        );
      }}
    </QueryStates>
  );
}
