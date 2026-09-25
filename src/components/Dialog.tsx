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

/** Modal dialog: focus trap, Esc to close, focus returns to the trigger (Radix). */
export function DialogContent({ title, description, children, className }: DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-black/50 data-[state=open]:animate-in" />
      <DialogPrimitive.Content
        className={cn(
          'fixed top-1/2 left-1/2 z-50 max-h-[90dvh] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto',
          'rounded-card border border-border bg-surface p-6 shadow-2',
          className,
        )}
        {...(description ? {} : { 'aria-describedby': undefined })}
      >
        <DialogPrimitive.Title className="pr-8 text-xl font-bold">{title}</DialogPrimitive.Title>
        {description && (
          <DialogPrimitive.Description className="mt-2 text-muted">
            {description}
          </DialogPrimitive.Description>
        )}
        <div className="mt-4">{children}</div>
        <DialogPrimitive.Close
          aria-label="Close"
          className="absolute top-3 right-3 flex size-11 items-center justify-center rounded-control text-muted hover:bg-surface-2 hover:text-text"
        >
          <X aria-hidden className="size-5" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
