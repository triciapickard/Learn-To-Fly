import { OctagonAlert } from 'lucide-react';
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

/** Hint or error line under a control (also used by Checkbox and RadioGroup). */
export function FieldMessage({
  id,
  error,
  children,
  className,
}: {
  id?: string;
  error?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      id={id}
      className={cn(
        'text-sm leading-5',
        error ? 'flex items-center gap-1.5 font-medium text-warn' : 'text-ink-2',
        className,
      )}
    >
      {error && <OctagonAlert aria-hidden className="size-3.5 shrink-0" strokeWidth={2} />}
      {children}
    </p>
  );
}

/**
 * Label, control, then hint or error, stacked with 6px gaps. Labels are 14px/500 ink; errors
 * are warn with a 14px octagon icon and are wired with aria-describedby and aria-invalid.
 */
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
        <label htmlFor={id} className="label text-ink">
          {label}
          {required && (
            <span className="font-normal text-ink-2" aria-hidden>
              {' '}
              (required)
            </span>
          )}
        </label>
        {children}
        {hint && <FieldMessage id={hintId}>{hint}</FieldMessage>}
        {error && (
          <FieldMessage id={errorId} error>
            {error}
          </FieldMessage>
        )}
      </div>
    </FormFieldContext>
  );
}

/** The shared field box: 40px, radius-md, line-strong border, focus ring with a canvas gap. */
export const controlClasses = 'control-box';
