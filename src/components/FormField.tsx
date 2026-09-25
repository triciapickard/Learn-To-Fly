import { createContext, useContext, useId, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface FormFieldContextValue {
  id: string;
  describedBy?: string;
  invalid: boolean;
  required: boolean;
}

const FormFieldContext = createContext<FormFieldContextValue | null>(null);

/** Used by inputs to wire up `id`, `aria-describedby` and `aria-invalid` automatically. */
export function useFormField(): FormFieldContextValue | null {
  return useContext(FormFieldContext);
}

export interface FormFieldProps {
  label: ReactNode;
  hint?: ReactNode;
  error?: string;
  required?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
}

/** Visible label, optional hint and error message linked to the control (Section 22.1). */
export function FormField({
  label,
  hint,
  error,
  required = false,
  id: idProp,
  className,
  children,
}: FormFieldProps) {
  const generated = useId();
  const id = idProp ?? generated;
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <FormFieldContext value={{ id, describedBy, invalid: Boolean(error), required }}>
      <div className={cn('flex flex-col gap-1.5', className)}>
        <label htmlFor={id} className="font-medium">
          {label}
          {required && (
            <span className="text-muted" aria-hidden>
              {' '}
              (required)
            </span>
          )}
        </label>
        {hint && (
          <p id={hintId} className="text-sm text-muted">
            {hint}
          </p>
        )}
        {children}
        {error && (
          <p id={errorId} className="text-sm font-medium text-danger">
            {error}
          </p>
        )}
      </div>
    </FormFieldContext>
  );
}

export const controlClasses =
  'w-full rounded-control border border-border-strong bg-surface px-3 py-2 text-base text-text placeholder:text-muted ' +
  'disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:border-danger aria-invalid:border-2';
