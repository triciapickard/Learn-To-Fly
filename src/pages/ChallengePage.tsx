import { Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DifficultyDots, TierBadge, TypeIcon } from '@/components/ChallengeMeta';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/Tabs';
import { useAuth } from '@/features/auth/api';
import { useMyProgress } from '@/features/challenges/api';
import { BriefTab } from '@/features/challenges/BriefTab';
import { DebriefForm } from '@/features/challenges/DebriefForm';
import { FlyPanel } from '@/features/challenges/FlyPanel';
import { HistoryTab } from '@/features/challenges/HistoryTab';
import { ResultView } from '@/features/challenges/ResultView';
import { useChallenge, useChallenges } from '@/features/content/api';
import { DraftBadge } from '@/features/content/DraftBadge';
import { QueryStates } from '@/features/content/queryState';
import { usePageTitle } from '@/hooks/usePageTitle';
import type { AttemptCreateResponse } from '@shared/schemas/api';

const TABS = ['brief', 'fly', 'debrief', 'history'] as const;
type Tab = (typeof TABS)[number];

/** Challenge page (Section 20.6): Brief · Fly · Debrief · History. */
export default function ChallengePage() {
  const { slug = '' } = useParams();
  const { data, isPending, error, refetch } = useChallenge(slug);
  const { data: list } = useChallenges();
  const { isAuthenticated } = useAuth();
  const { data: progress } = useMyProgress();
  const [params, setParams] = useSearchParams();
  const [result, setResult] = useState<AttemptCreateResponse | null>(null);
  const challenge = data?.challenge;
  usePageTitle(
    challenge ? `${challenge.code} ${challenge.title}` : 'Challenge',
    challenge?.goal.trim(),
  );

  const requested = params.get('tab') as Tab | null;
  const tab: Tab =
    requested && TABS.includes(requested) && (requested !== 'history' || isAuthenticated)
      ? requested
      : 'brief';
  const goTo = (next: Tab) => {
    setParams(next === 'brief' ? {} : { tab: next }, { replace: true });
    if (next !== 'debrief') setResult(null);
    window.scrollTo({ top: 0 });
  };

  return (
    <QueryStates
      isPending={isPending}
      error={error}
      refetch={refetch}
      label="Loading the challenge"
    >
      {() => {
        const c = challenge!;
        const all = list?.challenges ?? [];
        const index = all.findIndex((x) => x.slug === c.slug);
        const next = index >= 0 ? (all[index + 1] ?? null) : null;
        const best = progress?.challenges[c.slug];
        return (
          <PageContainer narrow>
            <Breadcrumbs items={[{ label: 'Challenges', to: '/challenges' }, { label: c.code }]} />
            <PageHeader className="mt-4" eyebrow={`Challenge ${c.code}`} title={c.title}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted">
                <TypeIcon type={c.type} />
                <DifficultyDots value={c.difficulty} />
                <span className="inline-flex items-center gap-1 text-sm">
                  <Clock aria-hidden className="size-4" /> {c.estimatedMinutes} min
                </span>
                <span className="inline-flex items-center gap-1 text-sm">
                  <MapPin aria-hidden className="size-4" /> {c.airportIcao}
                </span>
                {c.draft && <DraftBadge />}
                {best && (
                  <span className="inline-flex items-center gap-2 text-sm">
                    Best: <TierBadge tier={best.bestTier} /> {best.bestPercentage}%
                  </span>
                )}
              </div>
            </PageHeader>

            <Tabs value={tab} onValueChange={(v) => goTo(v as Tab)}>
              <TabsList aria-label="Challenge">
                <TabsTrigger value="brief">Brief</TabsTrigger>
                <TabsTrigger value="fly">Fly</TabsTrigger>
                <TabsTrigger value="debrief">Debrief</TabsTrigger>
                {isAuthenticated && <TabsTrigger value="history">History</TabsTrigger>}
              </TabsList>
              <TabsContent value="brief">
                <BriefTab challenge={c} onStart={() => goTo('fly')} />
              </TabsContent>
              <TabsContent value="fly">
                <FlyPanel challenge={c} onFinish={() => goTo('debrief')} />
              </TabsContent>
              <TabsContent value="debrief">
                {result ? (
                  <ResultView
                    challenge={c}
                    attempt={result.attempt}
                    best={{
                      tier: result.progress.bestTier,
                      percentage: result.progress.bestPercentage,
                    }}
                    next={next}
                    onFlyAgain={() => goTo('fly')}
                    onHistory={() => goTo('history')}
                  />
                ) : (
                  <DebriefForm
                    challenge={c}
                    returnTo={`/challenges/${c.slug}?tab=debrief`}
                    onSubmitted={setResult}
                  />
                )}
              </TabsContent>
              {isAuthenticated && (
                <TabsContent value="history">
                  <HistoryTab challenge={c} />
                </TabsContent>
              )}
            </Tabs>
          </PageContainer>
        );
      }}
    </QueryStates>
  );
}
