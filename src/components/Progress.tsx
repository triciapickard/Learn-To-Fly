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
  showValue?: boolean;
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  label,
  valueText,
  showValue = false,
  className,
}: ProgressProps) {
  const percent = clampPercent(value, max);
  const text = valueText ?? `${percent}%`;
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuetext={text}
        className="h-2.5 flex-1 overflow-hidden rounded-full bg-surface-2 ring-1 ring-border ring-inset"
      >
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-200"
          style={{ width: `${percent}%` }}
        />
      </div>
      {showValue && <span className="text-sm text-muted tabular">{text}</span>}
    </div>
  );
}

export function ProgressRing({
  value,
  max = 100,
  label,
  valueText,
  size = 48,
  className,
}: ProgressProps & { size?: number }) {
  const percent = clampPercent(value, max);
  const stroke = 5;
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
      className={cn('relative inline-flex items-center justify-center', className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          className="stroke-surface-2"
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
          className={percent === 100 ? 'stroke-success' : 'stroke-primary'}
        />
      </svg>
      <span className="absolute text-xs font-semibold tabular" aria-hidden>
        {percent}%
      </span>
    </div>
  );
}
