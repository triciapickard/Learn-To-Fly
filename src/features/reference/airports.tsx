import { Badge } from '@/components/Badge';
import type { AirportDto } from '@shared/schemas/api';

export const ROLE_LABELS: Record<AirportDto['role'], string> = {
  training: 'Training airport',
  destination: 'Destination',
  awareness: 'Airspace awareness only',
};

/** Class and tower status as text badges, never colour alone. */
export function AirportBadges({ airport }: { airport: AirportDto }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="info">Class {airport.airspaceClass}</Badge>
      <Badge variant={airport.towered ? 'info' : 'bonus'}>
        {airport.towered ? 'Towered' : 'Non-towered'}
      </Badge>
      {airport.role === 'awareness' && <Badge variant="warning">No landings</Badge>}
    </div>
  );
}

export const runwayList = (airport: AirportDto) =>
  airport.runways.map((r) => r.designator).join(', ');
