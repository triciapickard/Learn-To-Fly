import { lazy, type ComponentType, type LazyExoticComponent } from 'react';
import type { WidgetName } from '@shared/widgets';
import type { WidgetProps } from './types';

type WidgetComponent = LazyExoticComponent<ComponentType<WidgetProps>>;

/**
 * Widget name → lazily loaded component (step 6.13). Each widget is its own chunk, so
 * lessons without widgets don't download them (Section 16.1).
 */
export const widgetRegistry: Partial<Record<WidgetName, WidgetComponent>> = {
  'control-surfaces': lazy(() => import('./control-surfaces/ControlSurfaces')),
  'g1000-pfd': lazy(() => import('./g1000-pfd/G1000Pfd')),
  'vor-cdi': lazy(() => import('./vor-cdi/VorCdi')),
  'airspace-profile': lazy(() => import('./airspace-profile/AirspaceProfile')),
  'sectional-legend': lazy(() => import('./sectional-legend/SectionalLegend')),
  'airspeed-indicator': lazy(() => import('./airspeed-indicator/AirspeedIndicator')),
  'checklist-runner': lazy(() => import('./checklist-runner/ChecklistRunnerWidget')),
  'traffic-pattern': lazy(() => import('./traffic-pattern/TrafficPattern')),
  'wind-triangle': lazy(() => import('./wind-triangle/WindTriangle')),
  'pitch-power': lazy(() => import('./pitch-power/PitchPower')),
  'angle-of-attack': lazy(() => import('./angle-of-attack/AngleOfAttack')),
  'turn-coordinator': lazy(() => import('./turn-coordinator/TurnCoordinator')),
  'load-factor': lazy(() => import('./load-factor/LoadFactor')),
};

export const WIDGET_TITLES: Record<WidgetName, string> = {
  'control-surfaces': 'Control surfaces explorer',
  'g1000-pfd': 'G1000 PFD explorer',
  'airspeed-indicator': 'Airspeed indicator',
  'angle-of-attack': 'Angle of attack and lift',
  'pitch-power': 'Pitch and power trainer',
  'turn-coordinator': 'Turn coordinator and slip ball',
  'traffic-pattern': 'Traffic pattern animator',
  'airport-signs': 'Airport signs and markings',
  'vor-cdi': 'VOR and CDI simulator',
  'sectional-legend': 'Sectional chart legend explorer',
  'airspace-profile': 'Airspace cross-section',
  'wind-triangle': 'Wind triangle',
  crosswind: 'Crosswind component calculator',
  'load-factor': 'Bank angle, load factor and stall speed',
  'glide-range': 'Glide range ring',
  'checklist-runner': 'Checklist runner',
  'metar-decoder': 'METAR decoder',
  'landing-sight-picture': 'Landing sight picture',
  'phonetic-alphabet': 'Phonetic alphabet trainer',
  'nav-log': 'Nav log calculator',
};
