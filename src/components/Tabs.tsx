import * as TabsPrimitive from '@radix-ui/react-tabs';
import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** ARIA tabs pattern with roving tabindex (Radix). */
export const Tabs = TabsPrimitive.Root;

/** 40px text tabs on a 1px line baseline; scrolls sideways on phones, never wraps. */
export function TabsList({ className, ...props }: ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn('flex gap-1 overflow-x-auto border-b border-line', className)}
      {...props}
    />
  );
}

export interface TabsTriggerProps extends ComponentProps<typeof TabsPrimitive.Trigger> {
  /** A count or duration after the label, in 12px readout ink-3. */
  meta?: ReactNode;
}

/** The active tab is ink with a 3px accent-line rule sitting on the baseline. */
export function TabsTrigger({ className, meta, children, ...props }: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        '-mb-px inline-flex min-h-control-md shrink-0 items-center gap-1.5 rounded-t-sm px-3 text-sm font-medium whitespace-nowrap text-ink-2 transition-colors duration-150',
        'hover:bg-surface-sunken hover:text-ink',
        'data-[state=active]:text-ink data-[state=active]:shadow-[inset_0_-3px_0_var(--color-accent-line)]',
        'disabled:cursor-not-allowed disabled:opacity-45',
        className,
      )}
      {...props}
    >
      {children}
      {meta !== undefined && <span className="readout-sm text-xs text-ink-3">{meta}</span>}
    </TabsPrimitive.Trigger>
  );
}

export function TabsContent({ className, ...props }: ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content className={cn('pt-6', className)} {...props} />;
}
