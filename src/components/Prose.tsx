import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Typography for long-form text (legal pages, lesson Markdown). ~70 character measure. */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'max-w-[70ch] text-base',
        '[&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold',
        '[&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-semibold',
        '[&_p]:my-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-1',
        '[&_strong]:font-semibold [&_a]:text-primary [&_a]:underline',
        className,
      )}
    >
      {children}
    </div>
  );
}
