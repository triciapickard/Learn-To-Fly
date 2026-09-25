import { CircleAlert, Inbox, type LucideIcon } from 'lucide-react';
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
        'flex flex-col items-center gap-3 rounded-card border border-dashed border-border px-6 py-10 text-center',
        className,
      )}
    >
      {Icon && <Icon aria-hidden className={cn('size-10', tone)} />}
      <p className="text-lg font-semibold">{title}</p>
      {message && <div className="max-w-prose text-muted">{message}</div>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}

export function EmptyState({ icon = Inbox, ...props }: StateProps) {
  return <StateLayout icon={icon} tone="text-muted" {...props} />;
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
  icon = CircleAlert,
  ...props
}: Partial<ErrorStateProps>) {
  return (
    <div role="alert">
      <StateLayout
        title={title}
        message={message}
        icon={icon}
        tone="text-danger"
        action={
          action ??
          (onRetry && (
            <Button variant="secondary" onClick={onRetry}>
              Try again
            </Button>
          ))
        }
        {...props}
      />
    </div>
  );
}
