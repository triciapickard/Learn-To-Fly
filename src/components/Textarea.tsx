import type { Ref, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import { controlClasses, useFormField } from './FormField';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref?: Ref<HTMLTextAreaElement>;
}

/** Follows Input: minimum four lines, vertical resize only. */
export function Textarea({ className, id, rows = 4, ...props }: TextareaProps) {
  const field = useFormField();
  return (
    <textarea
      id={id ?? field?.id}
      rows={rows}
      aria-describedby={field?.describedBy}
      aria-invalid={field?.invalid || undefined}
      aria-required={field?.required || undefined}
      className={cn(controlClasses, 'h-auto min-h-24 resize-y py-2.5 leading-6', className)}
      {...props}
    />
  );
}
