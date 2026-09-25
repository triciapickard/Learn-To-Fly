import { useId } from 'react';

/** A labelled range input with a visible value and a spoken value (Section 16.1 rule 3). */
export function RangeField({
  label,
  value,
  min,
  max,
  step = 1,
  display,
  valueText,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  display: string;
  valueText: string;
  onChange: (value: number) => void;
}) {
  const id = useId();
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="font-semibold">
          {label}
        </label>
        <span className="font-mono text-sm" aria-hidden>
          {display}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={valueText}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-primary"
      />
    </div>
  );
}
