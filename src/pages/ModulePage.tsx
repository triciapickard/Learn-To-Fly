import { CheckCircle2, Clock } from 'lucide-react';
import { useParams } from 'react-router';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/Button';
import { Card, CardBody } from '@/components/Card';
import { Link } from '@/components/Link';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { ProgressBar } from '@/components/Progress';
import { EmptyState } from '@/components/States';
import { useModule } from '@/features/content/api';
import { QueryStates } from '@/features/content/queryState';
import { ChallengeRow, LessonRow } from '@/features/curriculum/LessonListItem';
import { useMyProgress } from '@/features/progress/api';
import { ChallengeStatusIcon, LessonStatusIcon } from '@/features/progress/StatusIcons';
import { usePageTitle } from '@/hooks/usePageTitle';
import { plural } from '@/lib/format';

export default function ModulePage() {
  const { moduleSlug = '' } = useParams();
  const { data, isPending, error, refetch } = useModule(moduleSlug);
  const module = data?.module;
  const { data: progress } = useMyProgress();
  usePageTitle(module ? `Module ${module.order}: ${module.title}` : 'Module', module?.summary);

  return (
    <QueryStates isPending={isPending} error={error} refetch={refetch} label="Loading the module">
      {() => {
        const m = module!;
        const objectives = m.lessons
          .filter((l) => l.priority === 'P0')
          .flatMap((l) => l.objectives);
        const first = m.lessons[0];
        return (
          <PageContainer narrow>
            <Breadcrumbs
              items={[{ label: 'Learn', to: '/learn' }, { label: `Module ${m.order}` }]}
            />
            <PageHeader
              className="mt-4"
              eyebrow={`Module ${m.order}`}
              title={m.title}
              description={m.description}
            >
              <p className="flex items-center gap-2 text-muted">
                <Clock aria-hidden className="size-4" />
                About {Math.round(m.estimatedMinutes / 6) / 10} hours of lessons and sim time ·{' '}
                {plural(m.lessons.length, 'lesson')} · {plural(m.challenges.length, 'challenge')}
              </p>
              {progress?.modules[m.slug] && (
                <ProgressBar
                  className="max-w-md"
                  label={`Module ${m.order} progress`}
                  value={progress.modules[m.slug]!.percent}
                  showValue
                  valueText={
                    progress.modules[m.slug]!.complete
                      ? 'Module complete'
                      : `${progress.modules[m.slug]!.lessonsCompleted} of ${progress.modules[m.slug]!.lessonsTotal} core lessons, ${progress.modules[m.slug]!.challengesPassed} of ${progress.modules[m.slug]!.challengesTotal} core challenges`
                  }
                />
              )}
              {first && (
                <div>
                  <Button asChild size="lg">
                    <Link unstyled to={`/learn/${m.slug}/${first.slug}`}>
                      Start module {m.order}
                    </Link>
                  </Button>
                </div>
              )}
            </PageHeader>

            {objectives.length > 0 && (
              <Card className="mb-8">
                <CardBody>
                  <h2 className="text-lg font-semibold">What you&apos;ll be able to do</h2>
                  <ul className="mt-3 flex flex-col gap-2">
                    {objectives.map((objective) => (
                      <li key={objective} className="flex gap-2">
                        <CheckCircle2 aria-hidden className="mt-0.5 size-5 shrink-0 text-success" />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            )}

            <section aria-labelledby="lessons-heading" className="mb-8">
              <h2 id="lessons-heading" className="mb-2 text-2xl font-bold">
                Lessons
              </h2>
              {m.lessons.length ? (
                <ol className="rounded-card border border-border bg-surface p-2">
                  {m.lessons.map((lesson) => (
                    <li key={lesson.slug}>
                      <LessonRow
                        lesson={lesson}
                        status={
                          progress && <LessonStatusIcon progress={progress.lessons[lesson.slug]} />
                        }
                      />
                    </li>
                  ))}
                </ol>
              ) : (
                <EmptyState title="The lessons for this module are being written" />
              )}
            </section>

            {m.challenges.length > 0 && (
              <section aria-labelledby="challenges-heading">
                <h2 id="challenges-heading" className="mb-2 text-2xl font-bold">
                  Challenges
                </h2>
                <ol className="rounded-card border border-border bg-surface p-2">
                  {m.challenges.map((challenge) => (
                    <li key={challenge.slug}>
                      <ChallengeRow
                        challenge={challenge}
                        status={
                          progress && (
                            <ChallengeStatusIcon progress={progress.challenges[challenge.slug]} />
                          )
                        }
                      />
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </PageContainer>
        );
      }}
    </QueryStates>
  );
}
