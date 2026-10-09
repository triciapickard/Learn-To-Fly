import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export interface TableColumn<Row> {
  key: string;
  header: ReactNode;
  /** Plain-text header used as the label when rows stack on small screens. */
  label?: string;
  cell: (row: Row) => ReactNode;
  className?: string;
  /** Right-aligned in readout (tabular mono) so speeds and altitudes line up. */
  numeric?: boolean;
}

export interface TableProps<Row> {
  caption: ReactNode;
  columns: TableColumn<Row>[];
  rows: Row[];
  rowKey: (row: Row) => string;
  hideCaption?: boolean;
  className?: string;
}

/**
 * Tables sit on surface inside a 1px line border with radius-lg. Header cells are overline
 * over a line-strong rule; body rows are separated by line. Below `md` each row stacks into
 * a two-column label/value card (Section 23.2).
 */
export function Table<Row>({
  caption,
  columns,
  rows,
  rowKey,
  hideCaption,
  className,
}: TableProps<Row>) {
  return (
    <div className={cn('w-full', className)}>
      <table className="w-full border-separate border-spacing-0 text-left text-sm leading-5">
        <caption
          className={cn(
            'mb-3 text-left text-sm text-ink-2 md:caption-bottom md:mt-2 md:mb-0',
            hideCaption && 'sr-only',
          )}
        >
          {caption}
        </caption>
        <thead className="hidden md:table-header-group">
          <tr>
            {columns.map((col, index) => (
              <th
                key={col.key}
                scope="col"
                className={cn(
                  'eyebrow border-b border-line-strong bg-surface px-4 py-3 text-ink-2',
                  'border-t border-t-line first:rounded-tl-lg first:border-l first:border-l-line last:rounded-tr-lg last:border-r last:border-r-line',
                  col.numeric && 'text-right',
                  index === 0 && 'pl-4',
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            const last = rowIndex === rows.length - 1;
            return (
              <tr
                key={rowKey(row)}
                className="mb-3 block rounded-lg border border-line bg-surface p-3 shadow-1 md:mb-0 md:table-row md:rounded-none md:border-0 md:p-0 md:shadow-none"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    data-label={col.label ?? (typeof col.header === 'string' ? col.header : '')}
                    className={cn(
                      'flex justify-between gap-4 py-1 align-top md:table-cell md:bg-surface md:px-4 md:py-3',
                      'md:border-b md:border-b-line md:first:border-l md:first:border-l-line md:last:border-r md:last:border-r-line',
                      last && 'md:first:rounded-bl-lg md:last:rounded-br-lg',
                      'before:font-semibold before:text-ink-2 before:content-[attr(data-label)] md:before:content-none',
                      col.numeric && 'readout-sm md:text-right',
                      col.className,
                    )}
                  >
                    {col.cell(row)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
