/** Widget directive names (Section 16) → display code. The registry in src maps them to code. */
export const WIDGETS = {
  'control-surfaces': 'W1',
  'g1000-pfd': 'W2',
  'airspeed-indicator': 'W3',
  'angle-of-attack': 'W4',
  'pitch-power': 'W5',
  'turn-coordinator': 'W6',
  'traffic-pattern': 'W7',
  'airport-signs': 'W8',
  'vor-cdi': 'W9',
  'sectional-legend': 'W10',
  'airspace-profile': 'W11',
  'wind-triangle': 'W12',
  crosswind: 'W13',
  'load-factor': 'W14',
  'glide-range': 'W15',
  'checklist-runner': 'W16',
  'metar-decoder': 'W17',
  'landing-sight-picture': 'W18',
  'phonetic-alphabet': 'W19',
  'nav-log': 'W20',
} as const;

export type WidgetName = keyof typeof WIDGETS;
export const WIDGET_NAMES = Object.keys(WIDGETS) as WidgetName[];

export function isWidgetName(value: string): value is WidgetName {
  return Object.hasOwn(WIDGETS, value);
}
