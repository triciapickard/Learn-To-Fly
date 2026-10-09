import { Check, Minus, OctagonAlert } from 'lucide-react';
import {
  useEffect,
  useId,
  useRef,
  type InputHTMLAttributes,
  type ReactNode,
  type Ref,
} from 'react';
import { cn } from '@/lib/cn';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode;
  hint?: ReactNode;
  error?: string;
  /** Partly checked (a checklist with some items done). */
  indeterminate?: boolean;
  ref?: Ref<HTMLInputElement>;
}

/**
 * A 20px box with a 1.5px line-strong border; checked fills ink with an on-ink check. The
 * whole label is the hit target. Native input underneath for keyboard and screen readers.
 */
export function Checkbox({
  label,
  hint,
  error,
  indeterminate = false,
  id: idProp,
  className,
  disabled,
  ref,
  ...props
}: CheckboxProps) {
  const generated = useId();
  const id = idProp ?? generated;
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const inner = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inner.current) inner.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={id}
        className={cn(
          'flex items-start gap-2.5 text-base leading-6',
          disabled ? 'cursor-not-allowed text-ink-3' : 'cursor-pointer',
        )}
      >
        <span className="relative mt-0.5 flex size-5 shrink-0">
          <input
            ref={(node) => {
              inner.current = node;
              if (typeof ref === 'function') ref(node);
              else if (ref) ref.current = node;
            }}
            id={id}
            type="checkbox"
            disabled={disabled}
            aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
            aria-invalid={error ? true : undefined}
            className={cn(
              'peer size-5 cursor-pointer appearance-none rounded-sm border-[1.5px] border-line-strong bg-surface transition-colors duration-150',
              'checked:border-ink checked:bg-ink indeterminate:border-ink indeterminate:bg-ink',
              'disabled:cursor-not-allowed disabled:border-line disabled:bg-surface-sunken',
              error && 'border-warn',
            )}
            {...props}
          />
          <Check
            aria-hidden
            strokeWidth={3}
            className="pointer-events-none absolute inset-0 m-auto size-3.5 text-on-ink opacity-0 peer-checked:opacity-100 peer-indeterminate:opacity-0"
          />
          <Minus
            aria-hidden
            strokeWidth={3}
            className="pointer-events-none absolute inset-0 m-auto size-3.5 text-on-ink opacity-0 peer-indeterminate:opacity-100"
          />
        </span>
        <span>{label}</span>
      </label>
      {hint && (
        <p id={hintId} className="ml-[30px] text-sm text-ink-2">
          {hint}
        </p>
      )}
      {error && (
        <p
          id={errorId}
          className="ml-[30px] flex items-center gap-1.5 text-sm font-medium text-warn"
        >
          <OctagonAlert aria-hidden className="size-3.5 shrink-0" strokeWidth={2} />
          {error}
        </p>
      )}
    </div>
  );
}
