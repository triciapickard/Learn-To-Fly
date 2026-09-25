import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export interface TableColumn<Row> {
  key: string;
  header: ReactNode;
  /** Plain-text header used as the label when rows stack on small screens. */
  label?: string;
  cell: (row: Row) => ReactNode;
  className?: string;
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

/** Data table that stacks into labelled cards below the `md` breakpoint (Section 23.2). */
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
      <table className="w-full border-collapse text-left">
        <caption className={cn('mb-2 text-left font-semibold', hideCaption && 'sr-only')}>
          {caption}
        </caption>
        <thead className="hidden md:table-header-group">
          <tr className="border-b-2 border-border">
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={cn(
                  'px-3 py-2 text-sm font-semibold text-muted',
                  col.numeric && 'text-right',
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={rowKey(row)}
              className="mb-3 block rounded-card border border-border p-3 md:mb-0 md:table-row md:rounded-none md:border-0 md:border-b md:p-0"
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  data-label={col.label ?? (typeof col.header === 'string' ? col.header : '')}
                  className={cn(
                    'flex justify-between gap-4 py-1 md:table-cell md:px-3 md:py-2',
                    'before:font-semibold before:text-muted before:content-[attr(data-label)] md:before:content-none',
                    col.numeric && 'tabular md:text-right',
                    col.className,
                  )}
                >
                  {col.cell(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
