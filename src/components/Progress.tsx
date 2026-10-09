import { cn } from '@/lib/cn';

function clampPercent(value: number, max: number): number {
  if (max <= 0) return 0;
  return Math.min(100, Math.max(0, Math.round((value / max) * 100)));
}

export interface ProgressProps {
  value: number;
  max?: number;
  /** Accessible name, e.g. "Module 2 progress". */
  label: string;
  /** Visible value text, e.g. "3 of 5 lessons". Defaults to the percentage. */
  valueText?: string;
  /** Show the value text (in readout) above the bar, right-aligned. */
  showValue?: boolean;
  /** Show the label above the bar, left-aligned. */
  showLabel?: boolean;
  className?: string;
}

/**
 * Progress is drawn with the horizon line: an 8px pill track in surface-sunken filled with
 * accent-line; at 100% the fill turns go. The label and count sit above the bar.
 */
export function ProgressBar({
  value,
  max = 100,
  label,
  valueText,
  showValue = false,
  showLabel = false,
  className,
}: ProgressProps) {
  const percent = clampPercent(value, max);
  const done = percent === 100;
  const text = valueText ?? `${percent}%`;
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {(showLabel || showValue) && (
        <div className="flex items-center justify-between gap-3 text-sm leading-5">
          {showLabel && <span>{label}</span>}
          {showValue && (
            <span className={cn('readout-sm ml-auto', done ? 'text-go' : 'text-ink-2')}>
              {text}
            </span>
          )}
        </div>
      )}
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuetext={text}
        className="h-2 w-full overflow-hidden rounded-pill border border-line bg-surface-sunken"
      >
        <div
          className={cn(
            'h-full rounded-pill transition-[width] duration-[400ms] ease-[var(--ease-out)]',
            done ? 'bg-go' : 'bg-accent-line',
          )}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

/** 56px ring, 6px stroke, percentage in readout at the center. */
export function ProgressRing({
  value,
  max = 100,
  label,
  valueText,
  size = 56,
  className,
}: ProgressProps & { size?: number }) {
  const percent = clampPercent(value, max);
  const done = percent === 100;
  const stroke = 6;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const text = valueText ?? `${percent}%`;
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuetext={text}
      className={cn('relative inline-flex shrink-0 items-center justify-center', className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          className="stroke-surface-sunken"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - percent / 100)}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className={cn(
            'transition-[stroke-dashoffset] duration-[400ms]',
            done ? 'stroke-go' : 'stroke-accent-line',
          )}
        />
      </svg>
      <span className="readout-sm absolute text-ink" aria-hidden>
        {percent}%
      </span>
    </div>
  );
}
