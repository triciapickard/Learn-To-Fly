import type { WidgetQuestion } from '../shared/QuizPanel';
import data from './hotspots.json';

export interface Hotspot {
  id: string;
  name: string;
  legend: string;
  explanation: string;
  kind?: string;
  rect: { x: number; y: number; width: number; height: number };
}

export const CHART = data.chart;
export const HOTSPOTS: Hotspot[] = data.hotspots;
export const hotspotById = (id: string) => HOTSPOTS.find((h) => h.id === id);

export interface ChartQuestion extends WidgetQuestion {
  /** Any of these hotspots answers the question. */
  targets: string[];
}

/** "Find it" quiz (Section 16.11). */
export const QUESTIONS: ChartQuestion[] = [
  {
    id: 'w10-nontowered',
    prompt: 'Click a non-towered airport.',
    targets: HOTSPOTS.filter((h) => h.kind === 'nontowered-airport').map((h) => h.id),
    explanation: 'Magenta airport symbols have no control tower (Tracy, and the private strip).',
  },
  {
    id: 'w10-mef',
    prompt: 'What is the maximum elevation figure (MEF) in this area? Click it.',
    targets: ['mef'],
    explanation:
      'The large blue 3⁶ means 3,600 ft MSL clears all terrain and obstacles in this box.',
  },
  {
    id: 'w10-class-d-top',
    prompt: "Click the number that tells you the top of Livermore's Class D airspace.",
    targets: ['class-d-ceiling'],
    explanation: 'The dashed blue box: 29 means the Class D goes up to 2,900 ft MSL.',
  },
  {
    id: 'w10-tower-frequency',
    prompt: 'Where would you find the tower frequency for Livermore? Click it.',
    targets: ['lvk-data-block'],
    explanation: 'The airport data block: CT – 118.1 is the control tower frequency.',
  },
  {
    id: 'w10-isogonic',
    prompt: 'Click the line where the magnetic variation is 14° east.',
    targets: ['isogonic'],
    explanation: 'The dashed magenta isogonic line is labeled 14°E.',
  },
  {
    id: 'w10-obstacle',
    prompt: 'How tall is the obstacle above the ground? Click the place that tells you.',
    targets: ['obstacle'],
    explanation: 'The number in brackets, (620), is the height above the ground in feet.',
  },
];
