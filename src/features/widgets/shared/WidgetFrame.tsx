import { RotateCcw } from 'lucide-react';
import type { ReactNode } from 'react';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { cn } from '@/lib/cn';
import type { WidgetMode } from '../types';

export interface WidgetFrameProps {
  title: string;
  /** Shown as a badge for simplified physics models (Section 16.1 rule 10). */
  simplified?: boolean;
  mode?: WidgetMode;
  onModeChange?: (mode: WidgetMode) => void;
  /** Hide the mode switch for widgets without a quiz mode. */
  quizAvailable?: boolean;
  onReset?: () => void;
  /** Text alternative for people who cannot use the diagram (rule 4). */
  description: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Shared chrome for every widget (step 6.14). */
export function WidgetFrame({
  title,
  simplified,
  mode = 'explore',
  onModeChange,
  quizAvailable = false,
  onReset,
  description,
  children,
  className,
}: WidgetFrameProps) {
  return (
    <figure
      className={cn('not-prose my-8 rounded-lg border border-line bg-surface shadow-1', className)}
      aria-label={`Interactive diagram: ${title}`}
    >
      <div className="flex flex-wrap items-center gap-2 border-b border-line px-4 py-2">
        <figcaption className="mr-auto font-semibold">{title}</figcaption>
        {simplified && <Badge variant="accent">Simplified model</Badge>}
        {quizAvailable && onModeChange && (
          <div
            role="group"
            aria-label="Widget mode"
            className="flex rounded-pill bg-surface-sunken p-[3px]"
          >
            {(['explore', 'quiz'] as const).map((m) => (
              <button
                key={m}
                type="button"
                aria-pressed={mode === m}
                onClick={() => onModeChange(m)}
                className={cn(
                  'min-h-9 rounded-pill px-3 text-sm font-semibold capitalize',
                  mode === m ? 'bg-ink text-on-ink' : 'text-ink-2 hover:text-ink',
                )}
              >
                {m === 'quiz' ? 'Quiz me' : 'Explore'}
              </button>
            ))}
          </div>
        )}
        {onReset && (
          <Button variant="ghost" size="sm" onClick={onReset}>
            <RotateCcw aria-hidden className="size-4" /> Reset
          </Button>
        )}
      </div>
      <div className="p-4">{children}</div>
      <details className="border-t border-line px-4 py-2 text-sm">
        <summary className="min-h-9 cursor-pointer py-2 font-medium text-ink-2">
          Describe this diagram
        </summary>
        <div className="pb-2 text-ink-2 [&>p+p]:mt-2">{description}</div>
      </details>
    </figure>
  );
}
