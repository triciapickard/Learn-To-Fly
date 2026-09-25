import { ChevronDown } from 'lucide-react';
import { Link } from '@/components/Link';
import { ProgressRing } from '@/components/Progress';
import { ChallengeStatusIcon, LessonStatusIcon } from '@/features/progress/StatusIcons';
import { cn } from '@/lib/cn';
import { plural } from '@/lib/format';
import type { ModuleSummary, ProgressResponse } from '@shared/schemas/api';
import { ChallengeRow, LessonRow } from './LessonListItem';

function formatHours(minutes: number) {
  const hours = minutes / 60;
  return hours < 1 ? `${minutes} min` : `${Number.isInteger(hours) ? hours : hours.toFixed(1)} h`;
}

/** Vertical "flight path" of modules; each expands to its lessons and challenges (Section 20.2). */
export function CurriculumMap({
  modules,
  progress,
}: {
  modules: ModuleSummary[];
  /** The signed-in learner's progress: rings per module and status per item (step 8.6). */
  progress?: ProgressResponse;
}) {
  return (
    <ol className="relative flex flex-col gap-4 border-l-2 border-dashed border-border-strong pl-6 sm:pl-8">
      {modules.map((module) => (
        <li key={module.slug} className="relative">
          <span
            aria-hidden
            className="absolute top-5 -left-[37px] flex size-6 items-center justify-center rounded-full border-2 border-primary bg-surface font-mono text-xs font-bold text-primary sm:-left-[45px]"
          >
            {module.order}
          </span>
          <details
            className="group rounded-card border border-border bg-surface shadow-1"
            open={module.order === 0}
          >
            <summary className="flex cursor-pointer list-none items-start gap-4 p-5">
              <div className="flex-1">
                <p className="text-sm font-semibold text-primary">Module {module.order}</p>
                <h2 className="text-xl font-semibold">{module.title}</h2>
                <p className="mt-1 text-muted">{module.summary}</p>
                <p className="mt-2 text-sm text-muted">
                  {plural(module.lessons.length, 'lesson')} ·{' '}
                  {plural(module.challenges.length, 'challenge')} · about{' '}
                  {formatHours(module.estimatedMinutes)}
                </p>
              </div>
              {progress?.modules[module.slug] && (
                <ProgressRing
                  value={progress.modules[module.slug]!.percent}
                  label={`Module ${module.order} progress`}
                  valueText={
                    progress.modules[module.slug]!.complete
                      ? 'Complete'
                      : `${progress.modules[module.slug]!.percent}% complete`
                  }
                />
              )}
              <ChevronDown
                aria-hidden
                className="mt-1 size-5 shrink-0 text-muted transition-transform group-open:rotate-180"
              />
            </summary>
            <div className="border-t border-border px-2 py-3 sm:px-3">
              {module.lessons.length + module.challenges.length === 0 ? (
                <p className="px-3 py-2 text-muted">
                  The lessons for this module are being written.
                </p>
              ) : (
                <>
                  {module.lessons.length > 0 && (
                    <>
                      <h3 className="px-3 pt-1 text-sm font-semibold text-muted">Lessons</h3>
                      <ul>
                        {module.lessons.map((lesson) => (
                          <li key={lesson.slug}>
                            <LessonRow
                              lesson={lesson}
                              status={
                                progress && (
                                  <LessonStatusIcon progress={progress.lessons[lesson.slug]} />
                                )
                              }
                            />
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {module.challenges.length > 0 && (
                    <>
                      <h3
                        className={cn(
                          'px-3 text-sm font-semibold text-muted',
                          module.lessons.length && 'mt-3',
                        )}
                      >
                        Challenges
                      </h3>
                      <ul>
                        {module.challenges.map((challenge) => (
                          <li key={challenge.slug}>
                            <ChallengeRow
                              challenge={challenge}
                              status={
                                progress && (
                                  <ChallengeStatusIcon
                                    progress={progress.challenges[challenge.slug]}
                                  />
                                )
                              }
                            />
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </>
              )}
              <Link to={`/learn/${module.slug}`} className="mt-2 inline-block px-3">
                Module {module.order} overview
              </Link>
            </div>
          </details>
        </li>
      ))}
    </ol>
  );
}
