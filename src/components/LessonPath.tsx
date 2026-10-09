import { Check } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Button } from './Button';
import { Link } from './Link';

export type LessonStopState = 'done' | 'current' | 'upcoming' | 'locked';

export interface LessonStop {
  id: string;
  title: ReactNode;
  /** Second line: "Lesson 2.2 · Up next, 20 min". */
  meta?: ReactNode;
  state: LessonStopState;
  /** Where the stop leads; the title becomes a quiet link and the current stop's button links. */
  to?: string;
  /** Replaces the default title and meta block (the curriculum map puts a module card here). */
  content?: ReactNode;
}

const stateText: Record<LessonStopState, string> = {
  done: 'Done',
  current: 'Up next',
  upcoming: 'Not started',
  locked: 'Locked',
};

const pinStyles: Record<LessonStopState, string> = {
  done: 'border-accent bg-accent text-on-accent',
  current: 'border-ink bg-ink text-on-ink shadow-[0_0_0_4px_var(--color-accent-tint)]',
  upcoming: 'border-line-strong bg-surface text-ink-2',
  locked: 'border-dashed border-line-strong bg-canvas text-ink-3',
};

export interface LessonPathProps {
  stops: LessonStop[];
  /** Called when the current stop's button is pressed (ignored when the stop has `to`). */
  onStart?: (stop: LessonStop) => void;
  /** Label of the current stop's accent button. Set `showStart` false to hide it. */
  startLabel?: string;
  showStart?: boolean;
  className?: string;
  'aria-label'?: string;
}

/**
 * The lesson path is where the horizon line literally appears: a vertical 3px connector that
 * is accent-line between every pair of stops the learner has flown and line beyond, drawn per
 * stop from one pin centre to the next. Stops are 32px pills: done is accent with a check,
 * current is the one ink pin with an accent-tint halo, locked is a dashed ring on canvas.
 * Exactly one stop is current.
 */
export function LessonPath({
  stops,
  onStart,
  startLabel = 'Start',
  showStart = true,
  className,
  'aria-label': ariaLabel = 'Lesson path',
}: LessonPathProps) {
  return (
    <ol aria-label={ariaLabel} className={cn('relative flex flex-col pl-9', className)}>
      {stops.map((stop, index) => {
        const last = index === stops.length - 1;
        const current = stop.state === 'current';
        const locked = stop.state === 'locked';
        return (
          <li
            key={stop.id}
            className={cn(
              'relative flex min-h-16 items-center gap-3 py-2.5 pl-2',
              locked && 'text-ink-3',
            )}
          >
            {!last && (
              <span
                aria-hidden
                className={cn(
                  'absolute top-1/2 -left-5 h-full w-[3px] -translate-x-1/2 rounded-[2px] transition-colors duration-[400ms]',
                  stop.state === 'done' ? 'bg-accent-line' : 'bg-line',
                )}
              />
            )}
            <span
              aria-hidden
              className={cn(
                'readout-sm absolute top-1/2 -left-9 z-[1] grid size-8 -translate-y-1/2 place-items-center rounded-pill border-2 text-xs transition-colors duration-[400ms]',
                pinStyles[stop.state],
              )}
            >
              {stop.state === 'done' ? <Check className="size-3.5" strokeWidth={2.5} /> : index + 1}
            </span>
            {stop.content ?? (
              <>
                <div className="min-w-0 flex-1">
                  <div className={cn('leading-6', current ? 'font-semibold' : 'font-medium')}>
                    <span className="sr-only">{stateText[stop.state]}: </span>
                    {stop.to && !locked ? (
                      <Link to={stop.to} quiet>
                        {stop.title}
                      </Link>
                    ) : (
                      stop.title
                    )}
                  </div>
                  {stop.meta && (
                    <div
                      className={cn(
                        'text-sm leading-5',
                        current ? 'text-accent' : locked ? 'text-ink-3' : 'text-ink-2',
                      )}
                    >
                      {stop.meta}
                    </div>
                  )}
                </div>
                {current && showStart && (stop.to || onStart) && (
                  <Button
                    variant="accent"
                    size="sm"
                    asChild={Boolean(stop.to)}
                    onClick={stop.to ? undefined : () => onStart?.(stop)}
                    className="ml-auto shrink-0"
                  >
                    {stop.to ? (
                      <Link unstyled to={stop.to}>
                        {startLabel}
                      </Link>
                    ) : (
                      startLabel
                    )}
                  </Button>
                )}
              </>
            )}
          </li>
        );
      })}
    </ol>
  );
}
