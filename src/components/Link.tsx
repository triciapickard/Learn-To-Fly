import { ExternalLink as ExternalIcon } from 'lucide-react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router';
import { cn } from '@/lib/cn';

const linkClasses =
  'font-medium text-primary underline decoration-1 underline-offset-2 hover:decoration-2';

export interface LinkProps extends RouterLinkProps {
  /** Remove the default link styling (e.g. for card links). */
  unstyled?: boolean;
}

/** Internal link that wraps React Router's `Link`. */
export function Link({ className, unstyled, ...props }: LinkProps) {
  return <RouterLink className={cn(!unstyled && linkClasses, className)} {...props} />;
}

export interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

/** Link to another site: opens a new tab, shows an icon and tells screen readers. */
export function ExternalLink({ className, children, ...props }: ExternalLinkProps) {
  return (
    <a
      aria-label={typeof children === 'string' ? `${children} (opens in a new tab)` : undefined}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(linkClasses, 'inline-flex items-baseline gap-1', className)}
      {...props}
    >
      {children}
      <ExternalIcon aria-hidden className="size-3.5 shrink-0 self-center" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
