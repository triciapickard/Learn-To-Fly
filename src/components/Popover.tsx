import * as PopoverPrimitive from '@radix-ui/react-popover';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverClose = PopoverPrimitive.Close;

/** Shares the menu surface (surface-raised, line, radius-md, shadow-2) for richer content. */
export function PopoverContent({
  className,
  sideOffset = 8,
  ...props
}: ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          'z-50 w-72 max-w-[calc(100vw-2rem)] rounded-md border border-line bg-surface-raised p-4 text-sm leading-5 shadow-2 motion-safe:animate-rise-in',
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}
