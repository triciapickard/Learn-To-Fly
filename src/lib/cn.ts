import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/** Color token names from src/styles/tokens.css, so tailwind-merge can resolve conflicts. */
const COLORS = [
  'canvas',
  'surface',
  'surface-raised',
  'surface-sunken',
  'line',
  'line-strong',
  'ink',
  'ink-2',
  'ink-3',
  'on-ink',
  'accent',
  'accent-strong',
  'accent-line',
  'accent-tint',
  'on-accent',
  'go',
  'go-tint',
  'on-go',
  'caution',
  'caution-tint',
  'warn',
  'warn-tint',
  'on-warn',
  'tier-gold',
  'tier-silver',
  'tier-bronze',
  'focus',
  'scrim',
  'instrument',
  'instrument-text',
  'arc-white',
  'arc-green',
  'arc-yellow',
  'arc-red',
  'sky',
  'ground',
  'bezel',
  'bezel-key',
  'display-magenta',
  'display-cyan',
  'display-green',
  'chart-land',
  'chart-hills',
  'chart-water',
  'chart-city',
  'chart-blue',
  'chart-magenta',
  'chart-ink',
  'white',
  'black',
  'transparent',
  'current',
];

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      color: COLORS,
      radius: ['sm', 'md', 'lg', 'pill'],
      shadow: ['1', '2', 'press'],
      spacing: ['control-sm', 'control-md', 'control-lg'],
    },
  },
});

/** Joins class names and resolves Tailwind conflicts (later classes win). */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
