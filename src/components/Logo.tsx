import { useId } from 'react';
import { cn } from '@/lib/cn';

const FIN = 'M3 37 C13 35 18 27 22 17 L28.5 4 L35.5 4 C37 4 38 5 38 6.5 L38 37 Z';

/**
 * Logo mark: the Skyhawk's swept tail fin with the livery stripe across it (homepage
 * redesign, direction C; replaces the Section 21.1 horizon mark). The fin takes the text
 * colour so it reads in both themes; the stripe is the fixed livery red.
 */
export function LogoMark({ className }: { className?: string }) {
  const clipId = `${useId()}-fin`;
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={cn('size-8', className)}>
      <defs>
        <clipPath id={clipId}>
          <path d={FIN} />
        </clipPath>
      </defs>
      <path d={FIN} className="fill-text" />
      <g clipPath={`url(#${clipId})`}>
        <path d="M8 42 C18 30 29 22 44 16 L44 24.5 C31 29 23 35 17.5 42 Z" className="fill-paint" />
        <path
          d="M6 32 C17 23 29 15.5 44 10.5 L44 12 C29 17 18 24.5 7.5 33.5 Z"
          className="fill-surface"
        />
      </g>
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 font-display text-2xl font-black tracking-wide uppercase',
        className,
      )}
    >
      <LogoMark />
      <span>Learn to Fly</span>
    </span>
  );
}
