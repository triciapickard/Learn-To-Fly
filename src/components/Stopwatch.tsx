import { Pause, Play, RotateCcw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import { Button } from './Button';

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

/** Optional flight timer for challenges. Ticks are not announced (would be noisy). */
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
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      <span
        role="timer"
        aria-label="Elapsed time"
        className={cn('font-mono font-semibold tabular', large ? 'text-5xl' : 'text-3xl')}
      >
        {formatElapsed(elapsed)}
      </span>
      <div className="flex gap-2">
        {running ? (
          <Button variant="secondary" onClick={pause}>
            <Pause aria-hidden className="size-4" /> Pause
          </Button>
        ) : (
          <Button variant="secondary" onClick={start}>
            <Play aria-hidden className="size-4" /> {elapsed === 0 ? 'Start' : 'Resume'}
          </Button>
        )}
        <Button variant="ghost" onClick={reset} disabled={elapsed === 0 && !running}>
          <RotateCcw aria-hidden className="size-4" /> Reset
        </Button>
      </div>
    </div>
  );
}
