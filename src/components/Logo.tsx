import { useId } from 'react';
import { cn } from '@/lib/cn';

const FIN = 'M3 37 C13 35 18 27 22 17 L28.5 4 L35.5 4 C37 4 38 5 38 6.5 L38 37 Z';
const STRIPE = 'M8 42 C18 30 29 22 44 16 L44 24.5 C31 29 23 35 17.5 42 Z';
const GAP = 'M6 32 C17 23 29 15.5 44 10.5 L44 12 C29 17 18 24.5 7.5 33.5 Z';

export interface LogoMarkProps {
  className?: string;
  /** Accessible name when the mark stands alone; omit when the wordmark is beside it. */
  label?: string;
}

/**
 * The fin mark: the Skyhawk's swept tail fin with the livery stripe, the same paths as
 * public/favicon.svg, recolored for the system. The fin is currentColor (ink wherever it
 * sits), the stripe is accent-line, and the gap between them is cut through so the ground
 * shows, so it follows the Day and Night toggle rather than the OS scheme.
 */
export function LogoMark({ className, label }: LogoMarkProps) {
  const id = useId();
  const clipId = `${id}-fin`;
  const maskId = `${id}-gap`;
  return (
    <svg
      viewBox="0 0 40 40"
      width={32}
      height={32}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn('size-8 shrink-0 text-ink', className)}
    >
      <defs>
        <clipPath id={clipId}>
          <path d={FIN} />
        </clipPath>
        <mask id={maskId}>
          <rect width="40" height="40" fill="#fff" />
          <path d={GAP} fill="#000" />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        <path d={FIN} fill="currentColor" />
        <path d={STRIPE} clipPath={`url(#${clipId})`} className="fill-accent-line" />
      </g>
    </svg>
  );
}

export interface LogoProps {
  /**
   * `mark`: the fin at 28px beside the wordmark, the primary lockup (header, footer, login
   * and signup). `type`: the wordmark with a 28px by 3px accent-line rule after it, only where
   * the mark cannot be drawn.
   */
  variant?: 'mark' | 'type';
  className?: string;
}

/** "Learn to Fly" in Instrument Sans 700 at 22px with -0.02em tracking, in ink. */
export function Logo({ variant = 'mark', className }: LogoProps) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center gap-2.5 text-[22px] leading-none font-bold tracking-[-0.02em] whitespace-nowrap text-ink',
        className,
      )}
    >
      {variant === 'mark' && <LogoMark className="size-7" />}
      <span>Learn to Fly</span>
      {variant === 'type' && (
        <span
          aria-hidden
          className="mt-2.5 inline-block h-[3px] w-7 rounded-[2px] bg-accent-line"
        />
      )}
    </span>
  );
}
