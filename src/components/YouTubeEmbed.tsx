import { Play } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface YouTubeEmbedProps {
  videoId: string;
  /** Names the player: used for the iframe title and the play button ("Play video: …"). */
  title: string;
  /** Shown under the play button before the video loads. */
  detail?: ReactNode;
  className?: string;
}

/**
 * Click-to-load YouTube on the privacy-enhanced domain (D-14): nothing is requested from
 * YouTube, not even a thumbnail, until the visitor presses play. The CSP allows only this
 * frame origin (server/src/middleware/security.ts).
 */
export function YouTubeEmbed({ videoId, title, detail, className }: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);
  return (
    <div
      className={cn(
        'relative aspect-video overflow-hidden rounded-lg border border-line bg-instrument',
        className,
      )}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center text-instrument-text"
        >
          <span className="flex size-16 items-center justify-center rounded-full bg-warn text-on-warn transition-transform duration-150 group-hover:scale-105">
            <Play aria-hidden className="size-8 fill-current" />
          </span>
          <span className="text-lg font-semibold">Play video: {title}</span>
          {detail ? <span className="text-sm opacity-80">{detail}</span> : null}
        </button>
      )}
    </div>
  );
}
