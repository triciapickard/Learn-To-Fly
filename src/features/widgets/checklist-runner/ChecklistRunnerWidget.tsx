import { LoadingRegion, Skeleton } from '@/components/Skeleton';
import { useChecklist } from '@/features/content/api';
import type { ChecklistDto } from '@shared/schemas/api';
import { WidgetFrame } from '../shared/WidgetFrame';
import type { WidgetProps } from '../types';
import { ChecklistRunner } from './ChecklistRunner';

function describeChecklist(checklist: ChecklistDto) {
  return (
    <ol className="list-decimal pl-5">
      {checklist.items.map((item) => (
        <li key={item.id}>
          {item.item} — {item.action}
          {item.note ? ` (${item.note})` : ''}
        </li>
      ))}
    </ol>
  );
}

/** W16 embedded in a lesson, via ::checklist{slug} (data provided) or ::widget (fetched). */
export default function ChecklistRunnerWidget({
  props,
  checklist: provided,
}: WidgetProps & { checklist?: ChecklistDto }) {
  const slug = props.checklist ?? props.slug ?? provided?.slug ?? '';
  const { data, isPending } = useChecklist(provided ? '' : slug);
  const checklist = provided ?? data?.checklist;
  if (!checklist) {
    return isPending && !provided ? (
      <LoadingRegion label="Loading the checklist" className="my-8">
        <Skeleton className="h-64 w-full" />
      </LoadingRegion>
    ) : null;
  }
  return (
    <WidgetFrame title="Checklist runner" description={describeChecklist(checklist)}>
      <ChecklistRunner checklist={checklist} bigText={props.large === 'true'} />
    </WidgetFrame>
  );
}
