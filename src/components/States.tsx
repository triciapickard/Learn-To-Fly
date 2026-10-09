import { Inbox, OctagonAlert, type LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Button } from './Button';

interface StateProps {
  title: string;
  message?: ReactNode;
  action?: ReactNode;
  icon?: LucideIcon;
  className?: string;
}

/**
 * EmptyState and ErrorState share one layout: a 32px icon, a heading-md title, one body-sm
 * sentence in ink-2 and one action, centered inside a dashed line-strong border.
 */
function StateLayout({
  title,
  message,
  action,
  icon: Icon,
  className,
  tone,
}: StateProps & { tone: string }) {
  return (
    <div
      className={cn(
        'flex max-w-[420px] flex-col items-center gap-2 rounded-lg border border-dashed border-line-strong px-6 py-12 text-center',
        className,
      )}
    >
      {Icon && <Icon aria-hidden className={cn('size-8', tone)} strokeWidth={1.5} />}
      <p className="heading-md">{title}</p>
      {message && <div className="text-sm leading-5 text-ink-2">{message}</div>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}

export function EmptyState({ icon = Inbox, ...props }: StateProps) {
  return <StateLayout icon={icon} tone="text-ink-2" {...props} />;
}

export interface ErrorStateProps extends Omit<StateProps, 'action'> {
  onRetry?: () => void;
  action?: ReactNode;
}

/** Error with an optional retry button. Announced to screen readers. */
export function ErrorState({
  title = 'Something went wrong',
  message = 'We could not load this. Check your connection and try again.',
  onRetry,
  action,
  icon = OctagonAlert,
  ...props
}: Partial<ErrorStateProps>) {
  return (
    <div role="alert">
      <StateLayout
        title={title}
        message={message}
        icon={icon}
        tone="text-warn"
        action={
          action ??
          (onRetry && (
            <Button size="sm" onClick={onRetry}>
              Try again
            </Button>
          ))
        }
        {...props}
      />
    </div>
  );
}
