import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/**
 * Typography for long-form text (legal pages, lesson Markdown): body-lg in ink at measure
 * 68ch, heading-lg sections, inline code as a surface-sunken chip, links on the horizon line.
 */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'body-lg max-w-measure',
        '[&_h2]:heading-lg [&_h2]:mt-10 [&_h2]:mb-3',
        '[&_h3]:heading-md [&_h3]:mt-6 [&_h3]:mb-2',
        '[&_p]:my-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-1',
        '[&_strong]:font-semibold',
        '[&_a]:rounded-[2px] [&_a]:text-accent [&_a]:underline [&_a]:decoration-accent-line [&_a]:decoration-[1.5px] [&_a]:underline-offset-[3px] [&_a:hover]:text-accent-strong',
        '[&_code]:code [&_code]:rounded-sm [&_code]:border [&_code]:border-line [&_code]:bg-surface-sunken [&_code]:px-1.5 [&_code]:py-px',
        className,
      )}
    >
      {children}
    </div>
  );
}
