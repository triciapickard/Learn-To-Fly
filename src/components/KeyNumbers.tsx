import { cn } from '@/lib/cn';

export interface KeyNumber {
  label: string;
  value: string;
  unit?: string;
  note?: string;
}

/** Quick-reference panel of key numbers (V-speeds, power settings) for mid-flight use. */
export function KeyNumbers({
  title = 'Key numbers',
  items,
  className,
  large,
}: {
  title?: string;
  items: KeyNumber[];
  className?: string;
  large?: boolean;
}) {
  return (
    <section
      aria-label={title}
      className={cn('rounded-card border border-border bg-surface p-4', className)}
    >
      <h2 className={cn('font-semibold', large ? 'text-xl' : 'text-base')}>{title}</h2>
      <dl className={cn('mt-3 grid gap-x-4 gap-y-2', large ? 'grid-cols-1' : 'grid-cols-2')}>
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-baseline justify-between gap-2 border-b border-border pb-1"
          >
            <dt className={cn('text-muted', large ? 'text-lg' : 'text-sm')}>{item.label}</dt>
            <dd className={cn('font-mono font-semibold tabular', large ? 'text-2xl' : 'text-base')}>
              {item.value}
              {item.unit && (
                <span className="ml-1 text-sm font-normal text-muted">{item.unit}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
