import { Check, RotateCcw, Type } from 'lucide-react';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { ProgressBar } from '@/components/Progress';
import { cn } from '@/lib/cn';
import type { ChecklistDto } from '@shared/schemas/api';
import {
  currentItem,
  emptyRunner,
  isTicked,
  progress,
  toggle,
  untickLast,
  type RunnerState,
  type Tick,
} from './model';

export interface ChecklistRunnerProps {
  checklist: ChecklistDto;
  /** Start in large-text mode (second monitor, fly mode). */
  bigText?: boolean;
  /** Controlled state (challenges save ticks with the attempt, C1.1/C3.1). */
  state?: RunnerState;
  onChange?: (state: RunnerState, tick?: Tick) => void;
  className?: string;
}

const MODE_HELP = {
  'read-do': 'Read-do: read each item, then do it.',
  'do-verify': 'Do-verify: do the flow from memory, then check each item here.',
};

/**
 * W16 — Checklist Runner (Section 16.17). Space or Enter ticks the focused item,
 * Backspace unticks the last one, arrow keys move between items.
 */
export function ChecklistRunner({
  checklist,
  bigText = false,
  state: controlled,
  onChange,
  className,
}: ChecklistRunnerProps) {
  const [local, setLocal] = useState<RunnerState>(emptyRunner);
  const [large, setLarge] = useState(bigText);
  const [announcement, setAnnouncement] = useState('');
  const state = controlled ?? local;
  const itemIds = checklist.items.map((i) => i.id);
  const current = currentItem(itemIds, state);
  const { done, total, complete } = progress(itemIds, state);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const wasComplete = useRef(complete);

  useEffect(() => {
    if (complete && !wasComplete.current) setAnnouncement(`${checklist.title} checklist complete.`);
    wasComplete.current = complete;
  }, [complete, checklist.title]);

  const update = (next: RunnerState) => {
    const added =
      next.ticks.length > state.ticks.length ? next.ticks[next.ticks.length - 1] : undefined;
    if (!controlled) setLocal(next);
    onChange?.(next, added);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'Backspace') {
      event.preventDefault();
      update(untickLast(state));
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const next = Math.min(
        itemIds.length - 1,
        Math.max(0, index + (event.key === 'ArrowDown' ? 1 : -1)),
      );
      buttons.current[next]?.focus();
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      buttons.current[event.key === 'Home' ? 0 : itemIds.length - 1]?.focus();
    }
  };

  return (
    <div className={cn('not-prose', className)}>
      <div className="flex flex-wrap items-center gap-2">
        <h3 className={cn('mr-auto font-semibold', large ? 'text-2xl' : 'text-lg')}>
          {checklist.title}
        </h3>
        <Badge variant={checklist.mode === 'read-do' ? 'info' : 'in-progress'}>
          {checklist.mode === 'read-do' ? 'Read-do' : 'Do-verify'}
        </Badge>
        <Button variant="ghost" size="sm" aria-pressed={large} onClick={() => setLarge((v) => !v)}>
          <Type aria-hidden className="size-4" /> Large text
        </Button>
        <Button variant="ghost" size="sm" onClick={() => update(emptyRunner)} disabled={done === 0}>
          <RotateCcw aria-hidden className="size-4" /> Reset
        </Button>
      </div>
      <p className="mt-1 text-sm text-muted">
        {MODE_HELP[checklist.mode]} Space ticks an item, Backspace unticks the last one.
      </p>
      <ProgressBar
        className="mt-3"
        value={done}
        max={total}
        label={`${checklist.title} progress`}
        valueText={`${done} of ${total} items`}
        showValue
      />
      <ol className="mt-3 flex flex-col gap-2" aria-label={`${checklist.title} items`}>
        {checklist.items.map((item, index) => {
          const ticked = isTicked(state, item.id);
          const isCurrent = item.id === current;
          return (
            <li key={item.id}>
              <button
                ref={(el) => {
                  buttons.current[index] = el;
                }}
                type="button"
                role="checkbox"
                aria-checked={ticked}
                aria-current={isCurrent ? 'step' : undefined}
                onClick={() => update(toggle(state, item.id))}
                onKeyDown={(e) => onKeyDown(e, index)}
                className={cn(
                  'flex w-full items-start gap-3 rounded-control border-2 px-3 text-left transition-colors',
                  large ? 'min-h-16 py-3 text-xl' : 'min-h-12 py-2',
                  ticked
                    ? 'border-success/50 bg-success-soft'
                    : isCurrent
                      ? 'border-primary bg-primary-soft'
                      : 'border-border bg-surface',
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    'mt-0.5 flex shrink-0 items-center justify-center rounded border-2',
                    large ? 'size-7' : 'size-5',
                    ticked ? 'border-success bg-success text-surface' : 'border-border-strong',
                  )}
                >
                  {ticked && <Check className="size-4" strokeWidth={3} />}
                </span>
                <span className="flex flex-1 flex-col">
                  <span className="flex flex-wrap items-baseline gap-x-2">
                    <span
                      className={cn(
                        'font-medium',
                        ticked && 'text-muted line-through decoration-1',
                      )}
                    >
                      {item.item}
                    </span>
                    <span
                      aria-hidden
                      className="hidden flex-1 border-b border-dotted border-border-strong sm:block"
                    />
                    <span className="font-mono font-semibold">{item.action}</span>
                  </span>
                  {item.note && (
                    <span className={cn('text-muted', large ? 'text-base' : 'text-sm')}>
                      {item.note}
                    </span>
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
      {complete && (
        <p className="mt-3 flex items-center gap-2 font-semibold text-success">
          <Check aria-hidden className="size-5" /> Checklist complete
        </p>
      )}
      <div aria-live="polite" className="sr-only">
        {announcement}
      </div>
    </div>
  );
}
