import * as Menu from '@radix-ui/react-dropdown-menu';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

/** Accessible menu button (ARIA menu pattern, arrow keys, Esc). */
export const DropdownMenu = Menu.Root;
export const DropdownMenuTrigger = Menu.Trigger;

export function DropdownMenuContent({
  className,
  sideOffset = 8,
  ...props
}: ComponentProps<typeof Menu.Content>) {
  return (
    <Menu.Portal>
      <Menu.Content
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-48 rounded-card border border-border bg-surface p-1 shadow-2',
          className,
        )}
        {...props}
      />
    </Menu.Portal>
  );
}

export function DropdownMenuItem({ className, ...props }: ComponentProps<typeof Menu.Item>) {
  return (
    <Menu.Item
      className={cn(
        'flex min-h-11 cursor-pointer items-center gap-2 rounded-control px-3 outline-none select-none',
        'data-[highlighted]:bg-surface-2 data-[highlighted]:text-text',
        className,
      )}
      {...props}
    />
  );
}

export const DropdownMenuLabel = ({ className, ...props }: ComponentProps<typeof Menu.Label>) => (
  <Menu.Label className={cn('px-3 py-2 text-sm text-muted', className)} {...props} />
);

export const DropdownMenuSeparator = () => <Menu.Separator className="my-1 h-px bg-border" />;
