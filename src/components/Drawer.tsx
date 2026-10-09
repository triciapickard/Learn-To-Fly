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

/** The Dialog surface sliding in from the side at 320px, for phone navigation. */
export function DrawerContent({ title, side = 'right', children, className }: DrawerContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-scrim motion-safe:animate-fade-in" />
      <DialogPrimitive.Content
        aria-describedby={undefined}
        className={cn(
          'fixed inset-y-0 z-50 flex w-80 max-w-[85vw] flex-col border-line bg-surface shadow-2',
          side === 'right'
            ? 'right-0 border-l motion-safe:animate-slide-in-right'
            : 'left-0 border-r motion-safe:animate-slide-in-left',
          className,
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <DialogPrimitive.Title className="heading-md">{title}</DialogPrimitive.Title>
          <DialogPrimitive.Close
            aria-label="Close"
            className="flex size-9 items-center justify-center rounded-sm text-ink-2 hover:bg-surface-sunken hover:text-ink"
          >
            <X aria-hidden className="size-5" strokeWidth={1.75} />
          </DialogPrimitive.Close>
        </div>
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
