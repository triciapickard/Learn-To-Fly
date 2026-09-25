import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const COLORS = [
  'bg',
  'surface',
  'surface-2',
  'border',
  'border-strong',
  'text',
  'muted',
  'primary',
  'primary-hover',
  'primary-contrast',
  'accent',
  'success',
  'warning',
  'danger',
  'magenta',
  'cyan',
  'gold',
  'silver',
  'bronze',
  'primary-soft',
  'success-soft',
  'warning-soft',
  'danger-soft',
  'magenta-soft',
  'cyan-soft',
  'instrument',
  'instrument-text',
  'white',
  'black',
  'transparent',
  'current',
];

const twMerge = extendTailwindMerge({
  extend: { theme: { color: COLORS, radius: ['control', 'card'], shadow: ['1', '2'] } },
});

/** Joins class names and resolves Tailwind conflicts (later classes win). */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
