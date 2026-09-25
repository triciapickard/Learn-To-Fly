import type { InputHTMLAttributes, Ref } from 'react';
import { cn } from '@/lib/cn';
import { controlClasses, useFormField } from './FormField';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>;
}

export function Input({ className, id, ...props }: InputProps) {
  const field = useFormField();
  return (
    <input
      id={id ?? field?.id}
      aria-describedby={field?.describedBy}
      aria-invalid={field?.invalid || undefined}
      aria-required={field?.required || undefined}
      className={cn(controlClasses, 'min-h-11', className)}
      {...props}
    />
  );
}
