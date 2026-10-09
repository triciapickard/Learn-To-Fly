import { Slot } from '@radix-ui/react-slot';
import { Loader2 } from 'lucide-react';
import type { ButtonHTMLAttributes, ReactNode, Ref } from 'react';
import { cn } from '@/lib/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Buttons are ink-inverted: a solid ink fill with on-ink text, so the primary action is a
 * near-black button in Day and a near-white one in Night. `accent` is only for continuing
 * along the lesson path; `danger` always sits behind a confirmation dialog.
 */
const variants: Record<ButtonVariant, string> = {
  primary: 'bg-ink text-on-ink hover:bg-ink-2 active:shadow-press',
  secondary:
    'border-line-strong bg-transparent text-ink hover:bg-surface-sunken active:shadow-press',
  ghost: 'bg-transparent text-ink hover:bg-surface-sunken',
  accent: 'bg-accent text-on-accent hover:bg-accent-strong active:shadow-press',
  danger: 'bg-warn text-on-warn hover:shadow-press',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'min-h-control-sm px-3 text-sm',
  md: 'min-h-control-md px-4 text-sm',
  lg: 'min-h-control-lg px-6 text-base',
};

export function buttonClasses({
  variant = 'primary',
  size = 'md',
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded-md border border-transparent font-medium leading-5 whitespace-nowrap transition-colors duration-150',
    '[&_svg]:size-[18px] [&_svg]:shrink-0',
    'disabled:cursor-not-allowed disabled:opacity-45 aria-disabled:cursor-not-allowed aria-disabled:opacity-45',
    variants[variant],
    sizes[size],
    className,
  );
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Swaps the icon for a 16px spinner and keeps the label so the width does not jump. */
  loading?: boolean;
  /** Render the child element (e.g. a link) with button styles. */
  asChild?: boolean;
  children?: ReactNode;
  ref?: Ref<HTMLButtonElement>;
}

export function Button({
  variant,
  size,
  loading = false,
  asChild = false,
  className,
  disabled,
  children,
  type,
  ...props
}: ButtonProps) {
  const classes = buttonClasses({ variant, size, className });
  if (asChild) {
    return (
      <Slot className={classes} {...props}>
        {children}
      </Slot>
    );
  }
  return (
    <button
      type={type ?? 'button'}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && <Loader2 aria-hidden className="size-4! animate-spin" />}
      {children}
    </button>
  );
}
