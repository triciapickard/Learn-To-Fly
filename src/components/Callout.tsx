import {
  CircleAlert,
  Gauge,
  Info,
  Lightbulb,
  MonitorPlay,
  SearchCheck,
  type LucideIcon,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type CalloutType = 'safety' | 'sim' | 'classic' | 'tip' | 'verify' | 'note';

const config: Record<CalloutType, { title: string; icon: LucideIcon; classes: string }> = {
  safety: {
    title: 'Safety',
    icon: CircleAlert,
    classes: 'border-danger bg-danger-soft [&_.callout-icon]:text-danger',
  },
  sim: {
    title: 'Sim vs reality',
    icon: MonitorPlay,
    classes: 'border-cyan bg-cyan-soft [&_.callout-icon]:text-cyan',
  },
  classic: {
    title: 'Classic panel',
    icon: Gauge,
    classes: 'border-magenta bg-magenta-soft [&_.callout-icon]:text-magenta',
  },
  tip: {
    title: 'Pro tip',
    icon: Lightbulb,
    classes: 'border-success bg-success-soft [&_.callout-icon]:text-success',
  },
  verify: {
    title: 'Verify (author note)',
    icon: SearchCheck,
    classes: 'border-warning bg-warning-soft [&_.callout-icon]:text-warning',
  },
  note: {
    title: 'Note',
    icon: Info,
    classes: 'border-primary bg-primary-soft [&_.callout-icon]:text-primary',
  },
};

export interface CalloutProps {
  type: CalloutType;
  title?: string;
  children: ReactNode;
  className?: string;
}

/** Lesson callout (Section 18.4). The type is announced as text, not only by colour. */
export function Callout({ type, title, children, className }: CalloutProps) {
  const { title: defaultTitle, icon: Icon, classes } = config[type];
  return (
    <aside
      className={cn('flex gap-3 rounded-card border-l-4 p-4', classes, className)}
      aria-label={title ?? defaultTitle}
    >
      <Icon aria-hidden className="callout-icon mt-0.5 size-5 shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="font-semibold">{title ?? defaultTitle}</p>
        <div className="mt-1 text-text [&>p+p]:mt-2">{children}</div>
      </div>
    </aside>
  );
}
