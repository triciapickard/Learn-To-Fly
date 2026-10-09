import { ChevronDown } from 'lucide-react';
import { LessonPath, type LessonStop, type LessonStopState } from '@/components/LessonPath';
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

/** Done modules are complete; the first unfinished module is the current stop; the rest wait. */
function moduleStates(modules: ModuleSummary[], progress?: ProgressResponse): LessonStopState[] {
  let currentFound = false;
  return modules.map((module) => {
    if (progress?.modules[module.slug]?.complete) return 'done';
    if (!currentFound) {
      currentFound = true;
      return 'current';
    }
    return 'upcoming';
  });
}

/**
 * The curriculum as a lesson path (Section 20.2): module stops on the horizon line, each
 * expanding to its lessons and challenges. Exactly one module is current.
 */
export function CurriculumMap({
  modules,
  progress,
}: {
  modules: ModuleSummary[];
  /** The signed-in learner's progress: rings per module and status per item (step 8.6). */
  progress?: ProgressResponse;
}) {
  const states = moduleStates(modules, progress);
  const stops: LessonStop[] = modules.map((module, index) => {
    const state = states[index]!;
    const current = state === 'current';
    const moduleProgress = progress?.modules[module.slug];
    return {
      id: module.slug,
      title: module.title,
      state,
      content: (
        <details
          className={cn(
            'group my-1.5 w-full min-w-0 rounded-lg border bg-surface shadow-1',
            current ? 'border-accent-line bg-accent-tint shadow-none' : 'border-line',
          )}
          open={current}
        >
          <summary className="flex cursor-pointer list-none items-start gap-4 rounded-lg p-5">
            <div className="min-w-0 flex-1">
              <p className={cn('overline', current ? 'text-accent' : 'text-ink-2')}>
                Module {module.order}
                {state === 'done' && ' · Done'}
                {current && ' · Up next'}
              </p>
              <h2 className="heading-md mt-1">{module.title}</h2>
              <p className="mt-1 text-ink-2">{module.summary}</p>
              <p className="mt-2 text-sm leading-5 text-ink-2">
                {plural(module.lessons.length, 'lesson')} ·{' '}
                {plural(module.challenges.length, 'challenge')} · about{' '}
                {formatHours(module.estimatedMinutes)}
              </p>
            </div>
            {moduleProgress && (
              <ProgressRing
                value={moduleProgress.percent}
                label={`Module ${module.order} progress`}
                valueText={
                  moduleProgress.complete ? 'Complete' : `${moduleProgress.percent}% complete`
                }
              />
            )}
            <ChevronDown
              aria-hidden
              className="mt-1 size-5 shrink-0 text-ink-2 transition-transform group-open:rotate-180"
              strokeWidth={1.75}
            />
          </summary>
          <div
            className={cn(
              'border-t px-2 py-3 sm:px-3',
              current ? 'border-accent-line' : 'border-line',
            )}
          >
            {module.lessons.length + module.challenges.length === 0 ? (
              <p className="px-3 py-2 text-ink-2">The lessons for this module are being written.</p>
            ) : (
              <>
                {module.lessons.length > 0 && (
                  <>
                    <h3 className="overline px-3 pt-1 text-ink-2">Lessons</h3>
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
                    <h3 className={cn('overline px-3 text-ink-2', module.lessons.length && 'mt-3')}>
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
          </div>
        </details>
      ),
    };
  });

  return <LessonPath aria-label="Modules" stops={stops} showStart={false} className="gap-1" />;
}
