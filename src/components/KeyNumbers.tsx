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
 * The V-speed quick panel: a surface-sunken well with eyebrow labels and readout-lg values.
 * Page UI, not a gauge: never painted with the instrument tokens. The grid fits as many
 * columns as the panel itself is wide (a container query, not the viewport), so the same
 * panel works full width on a phone and in a 20rem sidebar, and a unit wraps under its
 * number rather than running into the next column.
 */
export function KeyNumbers({
  title = 'Key numbers',
  items,
  className,
  large,
  hideTitle = true,
}: {
  title?: string;
  items: KeyNumber[];
  className?: string;
  /** 36px values for the Speeds page sidebar and print. */
  large?: boolean;
  /** Show the title visibly above the grid (it is always the panel's accessible name). */
  hideTitle?: boolean;
}) {
  return (
    <section
      aria-label={title}
      className={cn(
        '@container rounded-lg border border-line bg-surface-sunken px-5 py-4',
        className,
      )}
    >
      <h2 className={cn('heading-sm mb-3', hideTitle && 'sr-only')}>{title}</h2>
      <dl
        className={cn(
          'grid grid-cols-[repeat(auto-fit,minmax(min(100%,var(--key-col)),1fr))] gap-4',
          large ? '[--key-col:8rem]' : '[--key-col:6.5rem]',
        )}
      >
        {items.map((item) => (
          <div key={item.label} className="min-w-0">
            <dt className="eyebrow text-ink-2">{item.label}</dt>
            <dd
              className={cn(
                'readout-lg mt-0.5 flex flex-wrap items-baseline gap-x-1.5 text-ink',
                large && 'text-4xl leading-none',
                item.highlight && 'text-accent',
              )}
            >
              <span>{item.value}</span>
              {item.unit && (
                <span className="font-sans text-sm font-normal text-ink-2">{item.unit}</span>
              )}
            </dd>
            {item.note && <dd className="mt-0.5 text-sm leading-5 text-ink-2">{item.note}</dd>}
          </div>
        ))}
      </dl>
    </section>
  );
}
