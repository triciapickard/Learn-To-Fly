import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

export interface DialogContentProps {
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}

/**
 * A surface panel, 440px wide, radius-lg, shadow-2, over the scrim. Focus trapped, Escape
 * closes, focus returns to the trigger (Radix). Enter 200ms ease-out (scale 0.98 to 1 with
 * fade); the scrim fades only.
 */
export function DialogContent({ title, description, children, className }: DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-scrim motion-safe:animate-fade-in" />
      <DialogPrimitive.Content
        className={cn(
          'fixed top-1/2 left-1/2 z-50 max-h-[90dvh] w-[calc(100%-2rem)] max-w-[440px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto',
          'rounded-lg border border-line bg-surface p-6 shadow-2 motion-safe:animate-pop-in',
          className,
        )}
        {...(description ? {} : { 'aria-describedby': undefined })}
      >
        <DialogPrimitive.Title className="heading-md pr-8">{title}</DialogPrimitive.Title>
        {description && (
          <DialogPrimitive.Description className="mt-1.5 text-sm leading-5 text-ink-2">
            {description}
          </DialogPrimitive.Description>
        )}
        <div className="mt-4">{children}</div>
        <DialogPrimitive.Close
          aria-label="Close"
          className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-sm text-ink-2 hover:bg-surface-sunken hover:text-ink"
        >
          <X aria-hidden className="size-5" strokeWidth={1.75} />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
