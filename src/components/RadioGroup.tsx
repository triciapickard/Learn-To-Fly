import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { useId, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { FieldMessage } from './FormField';

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
  /**
   * `plain` radios for short options in forms; `card` for quiz answers and setup choices
   * (a bordered box with a bold title and a description). Defaults to card when any option
   * has a description.
   */
  variant?: 'plain' | 'card';
  /** Hide the group label visually (still read by screen readers). */
  hideLabel?: boolean;
  className?: string;
}

/**
 * Radios are 20px pills with a 1.5px line-strong border; checked becomes a 6px ink ring
 * around a surface center. Built on Radix for keyboard and ARIA.
 */
export function RadioGroup({
  label,
  options,
  hint,
  error,
  required,
  orientation = 'vertical',
  variant,
  hideLabel,
  className,
  ...rootProps
}: RadioGroupProps) {
  const id = useId();
  const labelId = `${id}-label`;
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const card = (variant ?? (options.some((o) => o.description) ? 'card' : 'plain')) === 'card';
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <p id={labelId} className={cn('label text-ink', hideLabel && 'sr-only')}>
        {label}
        {required && (
          <span className="font-normal text-ink-2" aria-hidden>
            {' '}
            (required)
          </span>
        )}
      </p>
      {hint && <FieldMessage id={hintId}>{hint}</FieldMessage>}
      <RadioGroupPrimitive.Root
        aria-labelledby={labelId}
        aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        orientation={orientation}
        className={cn(
          'flex',
          orientation === 'vertical' ? 'flex-col gap-2' : 'flex-row flex-wrap gap-x-5 gap-y-2',
        )}
        {...rootProps}
      >
        {options.map((option) => {
          const optionId = `${id}-${option.value}`;
          return (
            <label
              key={option.value}
              htmlFor={optionId}
              className={cn(
                'flex items-start gap-2.5 text-base leading-6',
                card &&
                  'rounded-md border border-line-strong bg-surface px-3.5 py-3 transition-[border-color,box-shadow] duration-150 has-[[data-state=checked]]:border-ink has-[[data-state=checked]]:shadow-[0_0_0_1px_var(--color-ink)]',
                !card && 'min-h-6',
                option.disabled ? 'cursor-not-allowed text-ink-3' : 'cursor-pointer',
              )}
            >
              <RadioGroupPrimitive.Item
                id={optionId}
                value={option.value}
                disabled={option.disabled}
                className={cn(
                  'mt-0.5 size-5 shrink-0 rounded-pill border-[1.5px] border-line-strong bg-surface transition-[border-width,border-color] duration-150',
                  'data-[state=checked]:border-[6px] data-[state=checked]:border-ink',
                  'disabled:border-line disabled:bg-surface-sunken',
                  error && 'border-warn',
                )}
              />
              <span className="flex flex-col">
                <span className={cn('font-medium', option.disabled && 'text-ink-3')}>
                  {option.label}
                </span>
                {option.description && (
                  <span className="text-sm leading-5 text-ink-2">{option.description}</span>
                )}
              </span>
            </label>
          );
        })}
      </RadioGroupPrimitive.Root>
      {error && (
        <FieldMessage id={errorId} error>
          {error}
        </FieldMessage>
      )}
    </div>
  );
}
