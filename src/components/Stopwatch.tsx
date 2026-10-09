import { Pause, Play, RotateCcw } from 'lucide-react';
import { useEffect, useRef, useState, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function formatElapsed(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const mmss = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  return hours > 0 ? `${hours}:${mmss}` : mmss;
}

export interface StopwatchProps {
  onStart?: (startedAt: Date) => void;
  /** Called every tick with elapsed ms (used for random events). */
  onTick?: (elapsedMs: number) => void;
  className?: string;
  large?: boolean;
}

/** 36px pill buttons inside the ink pill: the primary is on-ink filled, the secondary outlined. */
function PillButton({
  primary,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { primary?: boolean }) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex h-9 items-center gap-1.5 rounded-pill px-3.5 text-sm font-medium whitespace-nowrap transition-opacity duration-150 disabled:cursor-not-allowed disabled:opacity-45',
        primary
          ? 'bg-on-ink text-ink hover:opacity-90'
          : 'border border-line-strong text-on-ink hover:border-on-ink',
        className,
      )}
      {...props}
    />
  );
}

/**
 * The challenge fly-mode timer: an ink pill with on-ink text (the same inversion as the
 * primary button). Time is readout-lg in tabular mono; while running an 8px accent-line dot
 * sits after it. Ticks are not announced (they would be noisy).
 */
export function Stopwatch({ onStart, onTick, className, large }: StopwatchProps) {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const startRef = useRef<number | null>(null);
  const baseRef = useRef(0);
  const onTickRef = useRef(onTick);
  useEffect(() => {
    onTickRef.current = onTick;
  }, [onTick]);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      const next = baseRef.current + (Date.now() - (startRef.current ?? Date.now()));
      setElapsed(next);
      onTickRef.current?.(next);
    }, 250);
    return () => clearInterval(id);
  }, [running]);

  const start = () => {
    if (elapsed === 0) onStart?.(new Date());
    startRef.current = Date.now();
    setRunning(true);
  };
  const pause = () => {
    baseRef.current = elapsed;
    setRunning(false);
  };
  const reset = () => {
    setRunning(false);
    baseRef.current = 0;
    startRef.current = null;
    setElapsed(0);
  };

  return (
    <div
      className={cn(
        'inline-flex max-w-full flex-wrap items-center gap-4 rounded-pill bg-ink py-2.5 pr-2.5 pl-6 text-on-ink',
        className,
      )}
    >
      <span className="inline-flex items-center">
        <span
          role="timer"
          aria-label="Elapsed time"
          className={cn('readout-lg', large && 'text-5xl leading-none')}
        >
          {formatElapsed(elapsed)}
        </span>
        {running && (
          <span
            aria-hidden
            className="ml-3 inline-block size-2 shrink-0 rounded-pill bg-accent-line"
          />
        )}
      </span>
      <div className="flex gap-2">
        {running ? (
          <PillButton onClick={pause}>
            <Pause aria-hidden className="size-4" /> Pause
          </PillButton>
        ) : (
          <PillButton primary onClick={start}>
            <Play aria-hidden className="size-4" /> {elapsed === 0 ? 'Start' : 'Resume'}
          </PillButton>
        )}
        <PillButton onClick={reset} disabled={elapsed === 0 && !running}>
          <RotateCcw aria-hidden className="size-4" /> Reset
        </PillButton>
      </div>
    </div>
  );
}
