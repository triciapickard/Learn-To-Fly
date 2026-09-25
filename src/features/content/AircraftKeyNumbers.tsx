import { KeyNumbers, type KeyNumber } from '@/components/KeyNumbers';
import type { AircraftDto } from '@shared/schemas/api';
import { useAircraft } from './api';

const KEYS: [string, string][] = [
  ['vr', 'Rotate (Vr)'],
  ['vx', 'Best angle (Vx)'],
  ['vy', 'Best rate (Vy)'],
  ['vg', 'Best glide (Vg)'],
  ['approachFlaps30', 'Approach, flaps 30°'],
  ['vfe', 'Max flaps >10° (Vfe)'],
  ['vno', 'Max cruise (Vno)'],
  ['vne', 'Never exceed (Vne)'],
];

export function keyNumbersFor(aircraft: AircraftDto): KeyNumber[] {
  return KEYS.flatMap(([key, label]) => {
    const v = aircraft.vspeeds[key];
    if (!v) return [];
    return [
      { label, value: v.kias !== undefined ? String(v.kias) : `${v.min}–${v.max}`, unit: 'KIAS' },
    ];
  });
}

/** The Skyhawk's key speeds for mid-flight lookup (lesson rail, fly mode). */
export function AircraftKeyNumbers({
  large,
  columns,
  className,
}: {
  large?: boolean;
  columns?: 1 | 2;
  className?: string;
}) {
  const { data } = useAircraft();
  if (!data) return null;
  return (
    <KeyNumbers
      title="Key numbers (KIAS)"
      items={keyNumbersFor(data.aircraft)}
      large={large}
      columns={columns}
      className={className}
    />
  );
}
