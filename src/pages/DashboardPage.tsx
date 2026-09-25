import { ArrowRight, BookOpen, Flag, Plane, Trophy } from 'lucide-react';
import { Button } from '@/components/Button';
import { TierBadge } from '@/components/ChallengeMeta';
import { ExternalLink, Link } from '@/components/Link';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { ProgressBar } from '@/components/Progress';
import { QueryStates } from '@/features/content/queryState';
import { useDashboard } from '@/features/progress/api';
import { CourseBadge } from '@/features/progress/CourseBadge';
import { usePageTitle } from '@/hooks/usePageTitle';
import { formatDateTime } from '@/lib/format';
import type { DashboardItem, DashboardResponse } from '@shared/schemas/api';

function ItemIcon({ type }: { type: DashboardItem['type'] }) {
  const Icon = type === 'lesson' ? BookOpen : Flag;
  return (
    <span className="inline-flex shrink-0">
      <Icon aria-hidden className="size-5 text-muted" />
      <span className="sr-only">{type === 'lesson' ? 'Lesson' : 'Challenge'}:</span>
    </span>
  );
}

function simTime(minutes: number) {
  if (minutes < 60) return `${minutes} min`;
  const hours = minutes / 60;
  return `${Number.isInteger(hours) ? hours : hours.toFixed(1)} h`;
}

export function isNewLearner(d: DashboardResponse) {
  return (
    d.course.lessonsCompleted === 0 &&
    d.course.challengesPassed === 0 &&
    d.stats.totalAttempts === 0 &&
    !d.continue?.started
  );
}

/** Dashboard (Section 20.9): continue, progress, next up, recent attempts and stats. */
export default function DashboardPage() {
  usePageTitle('Dashboard');
  const { data, isPending, error, refetch } = useDashboard();
  return (
    <QueryStates
      isPending={isPending}
      error={error}
      refetch={refetch}
      label="Loading your dashboard"
    >
      {() => {
        const d = data!;
        const fresh = isNewLearner(d);
        return (
          <PageContainer>
            <PageHeader
              title={fresh ? `Welcome aboard, ${d.displayName}!` : `Welcome back, ${d.displayName}`}
              description={
                fresh
                  ? 'Your training starts here. Lessons first, then fly the challenges in MSFS 2024.'
                  : 'Pick up where you left off, or choose what to fly next.'
              }
            />

            {d.course.complete && (
              <section
                aria-labelledby="complete-heading"
                className="mb-8 flex flex-col items-center gap-6 rounded-card border border-gold bg-surface p-6 text-center sm:flex-row sm:text-left"
              >
                <CourseBadge />
                <div>
                  <h2 id="complete-heading" className="text-2xl font-bold">
                    Course complete: Skyhawk Pilot (Sim)
                  </h2>
                  <p className="mt-2">
                    You finished every core lesson and passed every core challenge. Great flying.
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    This badge celebrates your simulator practice on Learn-To-Fly. It is not a pilot
                    certificate and has no value for real-world flying.
                  </p>
                  <h3 className="mt-4 font-semibold">What&apos;s next</h3>
                  <ul className="mt-1 list-disc pl-5 text-left">
                    <li>
                      See what&apos;s coming on the <Link to="/roadmap">roadmap</Link>.
                    </li>
                    <li>
                      Fly online with real controllers on{' '}
                      <ExternalLink href="https://vatsim.net">VATSIM</ExternalLink>.
                    </li>
                    <li>Book a discovery flight at a local flight school to try the real thing.</li>
                  </ul>
                </div>
              </section>
            )}

            {!d.continue && !d.course.complete && (
              <section
                aria-labelledby="caught-up-heading"
                className="mb-8 rounded-card border border-border bg-surface p-5"
              >
                <h2 id="caught-up-heading" className="text-xl font-bold">
                  All caught up
                </h2>
                <p className="mt-1 text-muted">
                  You have finished everything published so far. More lessons and challenges are on
                  the way: see the <Link to="/roadmap">roadmap</Link>, or fly a challenge again for
                  a better tier.
                </p>
              </section>
            )}

            {d.continue && (
              <section
                aria-labelledby="continue-heading"
                className="mb-8 rounded-card border border-primary bg-primary-soft p-5"
              >
                <h2 id="continue-heading" className="text-sm font-semibold text-primary">
                  {fresh ? 'Start here' : d.continue.started ? 'Continue' : 'Up next'}
                </h2>
                <p className="mt-1 text-xl font-bold">
                  {d.continue.code} {d.continue.title}
                </p>
                <p className="text-muted">
                  {d.continue.moduleTitle}
                  {d.continue.estimatedMinutes ? ` · about ${d.continue.estimatedMinutes} min` : ''}
                </p>
                <Button asChild size="lg" className="mt-4">
                  <Link unstyled to={d.continue.href}>
                    {fresh ? (
                      <>
                        <Plane aria-hidden className="size-5" /> Start {d.continue.code}
                      </>
                    ) : (
                      <>
                        {d.continue.started ? 'Continue' : 'Start'}{' '}
                        <ArrowRight aria-hidden className="size-5" />
                      </>
                    )}
                  </Link>
                </Button>
              </section>
            )}

            <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
              <div className="flex flex-col gap-8">
                <section aria-labelledby="progress-heading">
                  <h2 id="progress-heading" className="text-2xl font-bold">
                    Your progress
                  </h2>
                  <div className="mt-3 grid gap-3 rounded-card border border-border bg-surface p-4">
                    <ProgressBar
                      label="Core lessons completed"
                      value={d.course.lessonsCompleted}
                      max={Math.max(1, d.course.lessonsTotal)}
                      showValue
                      valueText={`${d.course.lessonsCompleted} of ${d.course.lessonsTotal} lessons`}
                    />
                    <ProgressBar
                      label="Core challenges passed"
                      value={d.course.challengesPassed}
                      max={Math.max(1, d.course.challengesTotal)}
                      showValue
                      valueText={`${d.course.challengesPassed} of ${d.course.challengesTotal} challenges`}
                    />
                  </div>
                  <ul className="mt-4 flex flex-col gap-2">
                    {d.modules.map((m) => (
                      <li key={m.slug} className="grid items-center gap-2 sm:grid-cols-[16rem_1fr]">
                        <Link to={`/learn/${m.slug}`} className="font-medium">
                          Module {m.order}: {m.title}
                        </Link>
                        <ProgressBar
                          label={`Module ${m.order} progress`}
                          value={m.percent}
                          showValue
                          valueText={
                            m.complete
                              ? 'Complete'
                              : m.lessonsTotal + m.challengesTotal === 0
                                ? 'Coming soon'
                                : `${m.percent}%`
                          }
                        />
                      </li>
                    ))}
                  </ul>
                </section>

                {d.nextUp.length > 0 && (
                  <section aria-labelledby="next-heading">
                    <h2 id="next-heading" className="text-2xl font-bold">
                      Next up
                    </h2>
                    <ol className="mt-3 rounded-card border border-border bg-surface p-2">
                      {d.nextUp.map((item) => (
                        <li key={item.slug}>
                          <Link
                            unstyled
                            to={item.href}
                            className="flex min-h-11 items-center gap-3 rounded-control px-3 py-2 hover:bg-surface-2"
                          >
                            <ItemIcon type={item.type} />
                            <span className="w-10 shrink-0 font-mono text-sm text-muted">
                              {item.code}
                            </span>
                            <span className="flex-1 font-medium">{item.title}</span>
                            <span className="hidden text-sm text-muted sm:block">
                              {item.moduleTitle}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </section>
                )}
              </div>

              <div className="flex flex-col gap-8">
                <section aria-labelledby="stats-heading">
                  <h2 id="stats-heading" className="text-2xl font-bold">
                    Stats
                  </h2>
                  <dl className="mt-3 grid grid-cols-3 gap-2 lg:grid-cols-1">
                    {[
                      ['Attempts', String(d.stats.totalAttempts)],
                      ['Gold results', String(d.stats.goldCount)],
                      ['Sim time (estimated)', simTime(d.stats.estimatedSimMinutes)],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-card border border-border bg-surface p-3">
                        <dt className="text-sm text-muted">{label}</dt>
                        <dd className="font-mono text-2xl font-bold">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </section>

                <section aria-labelledby="recent-heading">
                  <h2 id="recent-heading" className="text-2xl font-bold">
                    Recent attempts
                  </h2>
                  {d.recentAttempts.length ? (
                    <>
                      <ul className="mt-3 flex flex-col gap-2">
                        {d.recentAttempts.map((a) => (
                          <li
                            key={a.id}
                            className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-card border border-border bg-surface p-3"
                          >
                            <Link
                              to={`/challenges/${a.challengeSlug}?tab=history`}
                              className="font-medium"
                            >
                              {a.code} {a.title}
                            </Link>
                            <TierBadge tier={a.tier} />
                            <span className="font-mono">{a.percentage}%</span>
                            <span className="w-full text-sm text-muted">
                              {formatDateTime(a.submittedAt)}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/account/attempts" className="mt-2 inline-block text-sm">
                        See all attempts
                      </Link>
                    </>
                  ) : (
                    <p className="mt-3 flex items-center gap-2 text-muted">
                      <Trophy aria-hidden className="size-5" /> Your challenge results will appear
                      here.
                    </p>
                  )}
                </section>
              </div>
            </div>
          </PageContainer>
        );
      }}
    </QueryStates>
  );
}
