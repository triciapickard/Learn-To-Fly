import {
  Gauge,
  Info,
  Lightbulb,
  Monitor,
  OctagonAlert,
  SearchCheck,
  type LucideIcon,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type CalloutType = 'safety' | 'sim' | 'classic' | 'tip' | 'verify' | 'note';

/**
 * The six Markdown directives from the content style guide. Fill is the type's tint and the
 * type color is spent only on the icon and title; body copy stays ink. No left stripe.
 */
const config: Record<CalloutType, { title: string; icon: LucideIcon; classes: string }> = {
  safety: {
    title: 'Safety',
    icon: OctagonAlert,
    classes: 'bg-warn-tint [&_.callout-head]:text-warn',
  },
  sim: {
    title: 'Sim vs reality',
    icon: Monitor,
    classes: 'bg-accent-tint [&_.callout-head]:text-accent',
  },
  tip: {
    title: 'Pro tip',
    icon: Lightbulb,
    classes: 'bg-go-tint [&_.callout-head]:text-go',
  },
  classic: {
    title: 'Classic panel',
    icon: Gauge,
    classes: 'bg-caution-tint [&_.callout-head]:text-caution',
  },
  note: {
    title: 'Note',
    icon: Info,
    classes: 'border border-line bg-surface-sunken [&_.callout-head]:text-ink-2',
  },
  // Author-only: content validation refuses to publish it. Rendered dashed so it is obvious.
  verify: {
    title: 'Verify (author note)',
    icon: SearchCheck,
    classes:
      'border border-dashed border-line-strong bg-caution-tint [&_.callout-head]:text-caution',
  },
};

export interface CalloutProps {
  type: CalloutType;
  title?: string;
  children: ReactNode;
  className?: string;
}

/** Lesson callout (Section 18.4). The type is announced as text, not only by color. */
export function Callout({ type, title, children, className }: CalloutProps) {
  const { title: defaultTitle, icon: Icon, classes } = config[type];
  return (
    <aside
      className={cn('grid grid-cols-[20px_1fr] gap-3 rounded-md px-5 py-4', classes, className)}
      aria-label={title ?? defaultTitle}
    >
      <Icon aria-hidden className="callout-head mt-[3px] size-5" strokeWidth={1.75} />
      <div className="min-w-0">
        <p className="callout-head font-semibold">{title ?? defaultTitle}</p>
        <div className="text-ink [&>p+p]:mt-2">{children}</div>
      </div>
    </aside>
  );
}
