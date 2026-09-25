import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export const Drawer = DialogPrimitive.Root;
export const DrawerTrigger = DialogPrimitive.Trigger;
export const DrawerClose = DialogPrimitive.Close;

export interface DrawerContentProps {
  title: ReactNode;
  side?: 'left' | 'right';
  children?: ReactNode;
  className?: string;
}

/** Slide-over panel (mobile navigation). Traps focus and closes on Esc. */
export function DrawerContent({ title, side = 'right', children, className }: DrawerContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-black/50" />
      <DialogPrimitive.Content
        aria-describedby={undefined}
        className={cn(
          'fixed inset-y-0 z-50 flex w-80 max-w-[85vw] flex-col border-border bg-surface shadow-2',
          side === 'right' ? 'right-0 border-l' : 'left-0 border-r',
          className,
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-2">
          <DialogPrimitive.Title className="text-lg font-bold">{title}</DialogPrimitive.Title>
          <DialogPrimitive.Close
            aria-label="Close"
            className="flex size-11 items-center justify-center rounded-control text-muted hover:bg-surface-2 hover:text-text"
          >
            <X aria-hidden className="size-5" />
          </DialogPrimitive.Close>
        </div>
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
