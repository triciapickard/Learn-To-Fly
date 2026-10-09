import { cn } from '@/lib/cn';

export interface KeyNumber {
  label: string;
  value: string;
  unit?: string;
  note?: string;
  /** The one number the lesson is about takes accent; every other value stays ink. */
  highlight?: boolean;
}

/**
 * The V-speed quick panel: a surface-sunken well with overline labels and readout-lg values.
 * Page UI, not a gauge: never painted with the instrument tokens.
 */
export function KeyNumbers({
  title = 'Key numbers',
  items,
  className,
  large,
  columns = 2,
  hideTitle = true,
}: {
  title?: string;
  items: KeyNumber[];
  className?: string;
  large?: boolean;
  columns?: 1 | 2;
  /** Show the title visibly above the grid (it is always the panel's accessible name). */
  hideTitle?: boolean;
}) {
  return (
    <section
      aria-label={title}
      className={cn('rounded-lg border border-line bg-surface-sunken px-5 py-4', className)}
    >
      <h2 className={cn('heading-sm mb-3', hideTitle && 'sr-only')}>{title}</h2>
      <dl
        className={cn(
          'grid gap-4',
          columns === 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2 sm:grid-cols-4',
        )}
      >
        {items.map((item) => (
          <div key={item.label} className="min-w-0">
            <dt className="overline text-ink-2">{item.label}</dt>
            <dd
              className={cn(
                'readout-lg mt-0.5 text-ink',
                large && 'text-5xl leading-none',
                item.highlight && 'text-accent',
              )}
            >
              {item.value}
              {item.unit && (
                <span className="ml-1 font-sans text-sm font-normal text-ink-2">{item.unit}</span>
              )}
            </dd>
            {item.note && <dd className="mt-0.5 text-sm leading-5 text-ink-2">{item.note}</dd>}
          </div>
        ))}
      </dl>
    </section>
  );
}
