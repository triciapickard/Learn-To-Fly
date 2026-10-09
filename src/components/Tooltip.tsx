import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export const TooltipProvider = TooltipPrimitive.Provider;

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  /** Glossary hover card: a bold term on its own line and one or two sentences. */
  glossary?: boolean;
}

/**
 * An ink bubble with on-ink text in body-sm (the same inversion as the primary button).
 * Appears after 300ms on hover or immediately on focus; never holds an interactive element.
 */
export function Tooltip({ content, children, side = 'top', glossary }: TooltipProps) {
  return (
    <TooltipPrimitive.Root delayDuration={300}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={side}
          sideOffset={6}
          className={cn(
            'z-50 max-w-[260px] rounded-sm bg-ink text-sm leading-5 text-on-ink motion-safe:animate-fade-in',
            glossary ? 'px-3 py-2.5' : 'px-2.5 py-1.5',
          )}
        >
          {content}
          <TooltipPrimitive.Arrow className="fill-ink" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
