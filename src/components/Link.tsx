import { ExternalLink as ExternalIcon } from 'lucide-react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router';
import { cn } from '@/lib/cn';

/**
 * Inline links are the one place the horizon line appears inside running text: accent text
 * with a 1.5px accent-line underline. The quiet variant (ink text, line-strong underline) is
 * for navigation, breadcrumbs, tables and metadata. Every link is underlined, never color
 * alone.
 */
export function linkClasses({ quiet = false, className }: { quiet?: boolean; className?: string }) {
  return cn(
    'rounded-[2px] underline decoration-[1.5px] underline-offset-[3px] transition-colors duration-150 hover:decoration-2',
    quiet
      ? 'text-ink decoration-line-strong hover:decoration-ink'
      : 'text-accent decoration-accent-line hover:text-accent-strong',
    className,
  );
}

export interface LinkProps extends RouterLinkProps {
  /** Remove the default link styling (e.g. for card links). */
  unstyled?: boolean;
  /** Ink text with a line-strong underline, for navigation and metadata. */
  quiet?: boolean;
}

/** Internal link that wraps React Router's `Link`. */
export function Link({ className, unstyled, quiet, ...props }: LinkProps) {
  return (
    <RouterLink className={unstyled ? className : linkClasses({ quiet, className })} {...props} />
  );
}

export interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  quiet?: boolean;
}

/** Link to another site: opens a new tab, shows an icon and tells screen readers. */
export function ExternalLink({ className, children, quiet, ...props }: ExternalLinkProps) {
  return (
    <a
      aria-label={typeof children === 'string' ? `${children} (opens in a new tab)` : undefined}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClasses({
        quiet,
        className: cn('inline-flex items-baseline gap-0.5', className),
      })}
      {...props}
    >
      {children}
      <ExternalIcon aria-hidden className="size-3.5 shrink-0 self-center" strokeWidth={1.75} />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
