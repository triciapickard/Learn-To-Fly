import { cn } from '@/lib/cn';

/** Logo mark: a horizon line with a small airplane in a circle (Section 21.1). */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cn('size-8', className)}>
      <circle cx="16" cy="16" r="15" className="fill-primary" />
      <path d="M1.5 18.5h29" className="stroke-primary-contrast" strokeWidth="1.6" />
      <path
        d="M16 7.5c.7 0 1.1.6 1.1 1.4v4.4l6.4 3.2v1.7l-6.4-1.6v3.3l1.8 1.3v1.3L16 21.8l-2.9.7v-1.3l1.8-1.3v-3.3l-6.4 1.6v-1.7l6.4-3.2V8.9c0-.8.4-1.4 1.1-1.4Z"
        className="fill-primary-contrast"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2 text-lg font-bold', className)}>
      <LogoMark />
      <span>Learn to Fly</span>
    </span>
  );
}
