import { useSearchParams } from 'react-router';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { WidgetBlock } from '@/features/lessons/blocks/WidgetBlock';
import { widgetRegistry, WIDGET_TITLES } from '@/features/widgets/registry';
import { usePageTitle } from '@/hooks/usePageTitle';
import { WIDGETS, type WidgetName } from '@shared/widgets';

/**
 * Development-only widget gallery (`/dev/widgets?w=load-factor&mode=quiz`). Lets each widget be
 * checked in a real browser before the lesson that embeds it is written (Phase 9).
 */
export default function DevWidgetsPage() {
  usePageTitle('Widgets (dev)');
  const [params, setParams] = useSearchParams();
  const built = (Object.keys(widgetRegistry) as WidgetName[]).filter(
    (name) => name !== 'checklist-runner',
  );
  const selected = built.find((name) => name === params.get('w')) ?? built[0];
  const mode = params.get('mode') === 'quiz' ? 'quiz' : 'explore';

  return (
    <PageContainer>
      <PageHeader title="Widget gallery" description="Development only." />
      <nav aria-label="Widgets" className="flex flex-wrap gap-2">
        {built.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={name === selected}
            onClick={() => setParams({ w: name, mode })}
            className="min-h-11 rounded-control border border-border-strong px-3 text-sm font-semibold aria-pressed:bg-primary aria-pressed:text-primary-contrast"
          >
            {WIDGETS[name]} {WIDGET_TITLES[name]}
          </button>
        ))}
      </nav>
      {selected && (
        <div className="max-w-3xl">
          <WidgetBlock key={`${selected}-${mode}`} name={selected} props={{ mode }} />
        </div>
      )}
    </PageContainer>
  );
}
