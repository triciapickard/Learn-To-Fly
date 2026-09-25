import { ChevronDown } from 'lucide-react';
import type { Ref, SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import { controlClasses, useFormField } from './FormField';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  ref?: Ref<HTMLSelectElement>;
}

/** Native select (best accessibility on every device) with token styling. */
export function Select({ className, id, children, ...props }: SelectProps) {
  const field = useFormField();
  return (
    <div className="relative">
      <select
        id={id ?? field?.id}
        aria-describedby={field?.describedBy}
        aria-invalid={field?.invalid || undefined}
        aria-required={field?.required || undefined}
        className={cn(controlClasses, 'min-h-11 appearance-none pr-10', className)}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-3 size-5 -translate-y-1/2 text-muted"
      />
    </div>
  );
}
