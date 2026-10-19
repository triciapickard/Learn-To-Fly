import { Link, useSearchParams } from 'react-router';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { ReelPlayer } from '@/features/reel/ReelPlayer';
import { SHOTS } from '@/features/reel/shots';
import { usePageTitle } from '@/hooks/usePageTitle';

/**
 * Development-only launch video reel (`/dev/reel?shot=a1`). Plays each app shot of the launch
 * video script on the real site with a scripted cursor, ready to screen record. `host` sets
 * what the address bar shows before the path (`&host=learntofly.app`).
 */
export default function DevReelPage() {
  const [params] = useSearchParams();
  const shot = SHOTS.find((s) => s.id === params.get('shot'));
  usePageTitle(shot ? `${shot.code} reel (dev)` : 'Launch video reel (dev)');
  const host = params.get('host') ?? undefined;

  if (shot) return <ReelPlayer key={shot.id} shot={shot} host={host} />;

  return (
    <PageContainer>
      <PageHeader
        title="Launch video reel"
        description="Development only. Open a shot, set the browser to 1920 × 1080, press Space and record."
      />
      <ol className="grid gap-2">
        {SHOTS.map((s) => (
          <li key={s.id}>
            <Link
              to={`?shot=${s.id}${host ? `&host=${encodeURIComponent(host)}` : ''}`}
              className="font-semibold text-accent underline"
            >
              {s.code} · {s.title}
            </Link>{' '}
            <span className="text-ink-2">
              (scene {s.scene}, {s.start}s to {s.end}s)
            </span>
          </li>
        ))}
      </ol>
    </PageContainer>
  );
}
