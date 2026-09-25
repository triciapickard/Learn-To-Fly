import { ArrowLeft } from 'lucide-react';
import { useParams } from 'react-router';
import { Link } from '@/components/Link';
import { FlyPanel } from '@/features/challenges/FlyPanel';
import { useChallenge } from '@/features/content/api';
import { QueryStates } from '@/features/content/queryState';
import { usePageTitle } from '@/hooks/usePageTitle';

/** Fly mode (Section 20.7): the Fly tab in large type for a second screen (US-10). */
export default function FlyModePage() {
  const { slug = '' } = useParams();
  const { data, isPending, error, refetch } = useChallenge(slug);
  const challenge = data?.challenge;
  usePageTitle(challenge ? `Fly: ${challenge.code} ${challenge.title}` : 'Fly mode');
  return (
    <QueryStates isPending={isPending} error={error} refetch={refetch} label="Loading fly mode">
      {() => {
        const c = challenge!;
        return (
          <div className="flex flex-col gap-6">
            <Link to={`/challenges/${c.slug}`} className="inline-flex items-center gap-2 text-lg">
              <ArrowLeft aria-hidden className="size-5" /> Back to challenge
            </Link>
            <div>
              <p className="font-mono text-muted">{c.code}</p>
              <h1 className="text-4xl font-bold">{c.title}</h1>
              <p className="mt-2 text-2xl">{c.goal}</p>
            </div>
            <FlyPanel challenge={c} large />
          </div>
        );
      }}
    </QueryStates>
  );
}
