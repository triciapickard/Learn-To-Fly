import { useId, type InputHTMLAttributes, type ReactNode, type Ref } from 'react';
import { cn } from '@/lib/cn';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode;
  hint?: ReactNode;
  error?: string;
  ref?: Ref<HTMLInputElement>;
}

/** Native checkbox with a visible label, hint and error. */
export function Checkbox({ label, hint, error, id: idProp, className, ...props }: CheckboxProps) {
  const generated = useId();
  const id = idProp ?? generated;
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
          aria-invalid={error ? true : undefined}
          className="mt-1 size-5 shrink-0 cursor-pointer accent-primary"
          {...props}
        />
        <label htmlFor={id} className="cursor-pointer">
          {label}
        </label>
      </div>
      {hint && (
        <p id={hintId} className="ml-8 text-sm text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="ml-8 text-sm font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
