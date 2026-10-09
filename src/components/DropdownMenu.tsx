import * as Menu from '@radix-ui/react-dropdown-menu';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

/** Accessible menu button (ARIA menu pattern, arrow keys, Esc). */
export const DropdownMenu = Menu.Root;
export const DropdownMenuTrigger = Menu.Trigger;

/** Floats on surface-raised with a 1px line border, radius-md, shadow-2 and 4px padding. */
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
          'z-50 min-w-[220px] rounded-md border border-line bg-surface-raised p-1 text-sm shadow-2 motion-safe:animate-rise-in',
          className,
        )}
        {...props}
      />
    </Menu.Portal>
  );
}

export interface DropdownMenuItemProps extends ComponentProps<typeof Menu.Item> {
  /** Destructive items are warn text and icon and always sit last, below a separator. */
  tone?: 'default' | 'warn';
}

/** 36px rows in body-sm with an optional 16px icon in ink-2; hover and focus fill surface-sunken. */
export function DropdownMenuItem({ className, tone = 'default', ...props }: DropdownMenuItemProps) {
  return (
    <Menu.Item
      className={cn(
        'flex min-h-9 cursor-pointer items-center gap-2.5 rounded-sm px-2.5 text-sm leading-5 text-ink outline-none select-none',
        'data-[highlighted]:bg-surface-sunken data-[disabled]:cursor-not-allowed data-[disabled]:text-ink-3',
        '[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-ink-2',
        tone === 'warn' && 'text-warn [&_svg]:text-warn',
        className,
      )}
      {...props}
    />
  );
}

/** A keyboard hint at the right of an item, in readout ink-3. */
export function DropdownMenuShortcut({ className, ...props }: ComponentProps<'span'>) {
  return <span className={cn('readout-sm ml-auto text-xs text-ink-3', className)} {...props} />;
}

export const DropdownMenuLabel = ({ className, ...props }: ComponentProps<typeof Menu.Label>) => (
  <Menu.Label className={cn('px-2.5 py-2 text-sm leading-5 text-ink-2', className)} {...props} />
);

export const DropdownMenuSeparator = () => <Menu.Separator className="mx-1.5 my-1 h-px bg-line" />;
