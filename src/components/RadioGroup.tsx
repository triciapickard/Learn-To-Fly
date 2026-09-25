import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { useId, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export interface RadioOption {
  value: string;
  label: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
}

export interface RadioGroupProps {
  label: ReactNode;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  hint?: ReactNode;
  error?: string;
  required?: boolean;
  orientation?: 'horizontal' | 'vertical';
  /** Hide the group label visually (still read by screen readers). */
  hideLabel?: boolean;
  className?: string;
}

/** Accessible radio group (Radix): arrow keys move between options. */
export function RadioGroup({
  label,
  options,
  hint,
  error,
  required,
  orientation = 'vertical',
  hideLabel,
  className,
  ...rootProps
}: RadioGroupProps) {
  const id = useId();
  const labelId = `${id}-label`;
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <p id={labelId} className={cn('font-medium', hideLabel && 'sr-only')}>
        {label}
        {required && (
          <span className="text-muted" aria-hidden>
            {' '}
            (required)
          </span>
        )}
      </p>
      {hint && (
        <p id={hintId} className="text-sm text-muted">
          {hint}
        </p>
      )}
      <RadioGroupPrimitive.Root
        aria-labelledby={labelId}
        aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        orientation={orientation}
        className={cn('flex gap-2', orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap')}
        {...rootProps}
      >
        {options.map((option) => {
          const optionId = `${id}-${option.value}`;
          return (
            <label
              key={option.value}
              htmlFor={optionId}
              className={cn(
                'flex min-h-11 cursor-pointer items-start gap-3 rounded-control border border-border px-3 py-2',
                'has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary-soft',
                option.disabled && 'cursor-not-allowed opacity-60',
              )}
            >
              <RadioGroupPrimitive.Item
                id={optionId}
                value={option.value}
                disabled={option.disabled}
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-border-strong bg-surface data-[state=checked]:border-primary"
              >
                <RadioGroupPrimitive.Indicator className="size-2.5 rounded-full bg-primary" />
              </RadioGroupPrimitive.Item>
              <span className="flex flex-col">
                <span className="font-medium">{option.label}</span>
                {option.description && (
                  <span className="text-sm text-muted">{option.description}</span>
                )}
              </span>
            </label>
          );
        })}
      </RadioGroupPrimitive.Root>
      {error && (
        <p id={errorId} className="text-sm font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
