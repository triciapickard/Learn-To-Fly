import { Suspense } from 'react';
import { LoadingRegion, Skeleton } from '@/components/Skeleton';
import { widgetRegistry, WIDGET_TITLES } from '@/features/widgets/registry';
import { ErrorBoundary } from '@/features/widgets/shared/ErrorBoundary';
import type { WidgetQuizAnswer } from '@/features/widgets/types';
import type { ChecklistDto } from '@shared/schemas/api';
import type { LessonBlock } from '@shared/schemas/content';

function WidgetFallback({ title }: { title: string }) {
  return (
    <div
      role="note"
      className="my-8 rounded-card border border-dashed border-border p-4 text-muted"
    >
      The interactive diagram “{title}” failed to load. Open “Describe this diagram” in a refreshed
      page, or carry on — the text around it covers the same ideas.
    </div>
  );
}

/** Looks the widget up in the registry and renders it lazily inside an error boundary (Section 31.4). */
export function WidgetBlock({
  name,
  props,
  checklist,
  onQuizAnswer,
}: {
  name: Extract<LessonBlock, { type: 'widget' }>['name'];
  props: Record<string, string>;
  checklist?: ChecklistDto;
  onQuizAnswer?: (answer: WidgetQuizAnswer) => void;
}) {
  const Widget = widgetRegistry[name];
  const title = WIDGET_TITLES[name];
  if (!Widget) {
    return import.meta.env.DEV ? (
      <p className="my-8 rounded-card border-2 border-dashed border-warning p-4 text-warning">
        Development only: the widget “{name}” is not built yet.
      </p>
    ) : null;
  }
  return (
    <ErrorBoundary fallback={<WidgetFallback title={title} />}>
      <Suspense
        fallback={
          <LoadingRegion label={`Loading ${title}`} className="my-8">
            <Skeleton className="h-72 w-full" />
          </LoadingRegion>
        }
      >
        <Widget props={props} onQuizAnswer={onQuizAnswer} {...(checklist ? { checklist } : {})} />
      </Suspense>
    </ErrorBoundary>
  );
}
