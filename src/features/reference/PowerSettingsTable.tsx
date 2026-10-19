import { Table } from '@/components/Table';
import type { AircraftDto } from '@shared/schemas/api';

type PowerRow = AircraftDto['powerSettings'][number];

/** Rule-of-thumb power settings by phase (Section 8.5), shared by the hub and Speeds pages. */
export function PowerSettingsTable({
  rows,
  caption,
  hideCaption,
  className,
}: {
  rows: PowerRow[];
  caption: string;
  hideCaption?: boolean;
  className?: string;
}) {
  return (
    <Table<PowerRow>
      caption={caption}
      hideCaption={hideCaption}
      className={className}
      rows={rows}
      rowKey={(p) => p.phase}
      columns={[
        {
          key: 'phase',
          header: 'Phase',
          label: 'Phase',
          cell: (p) => <span className="font-semibold">{p.phase}</span>,
        },
        {
          key: 'rpm',
          header: 'RPM',
          label: 'RPM',
          cell: (p) => <span className="readout">{p.rpm}</span>,
        },
        {
          key: 'flaps',
          header: 'Flaps',
          label: 'Flaps',
          cell: (p) => <span className="readout">{p.flaps}</span>,
        },
        {
          key: 'speed',
          header: 'Target speed (KIAS)',
          label: 'Target speed (KIAS)',
          cell: (p) => <span className="readout">{p.targetSpeed}</span>,
        },
        {
          key: 'pitch',
          header: 'Pitch',
          label: 'Pitch',
          cell: (p) => <span className="text-ink-2">{p.pitch ?? ''}</span>,
        },
      ]}
    />
  );
}
