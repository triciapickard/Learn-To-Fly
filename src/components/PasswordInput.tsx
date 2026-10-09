import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/cn';
import { Input, type InputProps } from './Input';

/** Password input with a ghost Show/Hide button inside the field (aria-pressed). */
export function PasswordInput({ className, ...props }: Omit<InputProps, 'type'>) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative">
      <Input
        {...props}
        type={visible ? 'text' : 'password'}
        className={cn('pr-[84px]', className)}
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-pressed={visible}
        aria-label={visible ? 'Hide password' : 'Show password'}
        className="absolute top-1 right-1 inline-flex h-8 items-center gap-1.5 rounded-sm px-2.5 text-sm font-medium text-ink hover:bg-surface-sunken"
      >
        {visible ? (
          <EyeOff aria-hidden className="size-4" strokeWidth={1.75} />
        ) : (
          <Eye aria-hidden className="size-4" strokeWidth={1.75} />
        )}
        <span aria-hidden>{visible ? 'Hide' : 'Show'}</span>
      </button>
    </div>
  );
}
