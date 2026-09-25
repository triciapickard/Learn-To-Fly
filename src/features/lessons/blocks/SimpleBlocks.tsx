import { Play } from 'lucide-react';
import { useState } from 'react';
import { Callout } from '@/components/Callout';
import type { LessonBlock } from '@shared/schemas/content';
import { lessonImageUrl } from '../lessonImages';
import { MarkdownContent } from '../MarkdownContent';

type Block<T extends LessonBlock['type']> = Extract<LessonBlock, { type: T }>;

export function MarkdownBlock({ block }: { block: Block<'markdown'> }) {
  return <MarkdownContent markdown={block.markdown} />;
}

export function HeadingBlock({ block }: { block: Block<'heading'> }) {
  return (
    <h2
      id={block.id}
      tabIndex={-1}
      className="mt-12 mb-3 scroll-mt-24 text-2xl font-bold first:mt-0"
    >
      {block.text}
    </h2>
  );
}

export function CalloutBlock({ block }: { block: Block<'callout'> }) {
  return (
    <Callout type={block.calloutType} className="my-6">
      <MarkdownContent markdown={block.markdown} className="[&_p]:my-0 [&_p+p]:mt-2" />
    </Callout>
  );
}

export function ImageBlock({ block }: { block: Block<'image'> }) {
  const url = lessonImageUrl(block.src);
  if (!url) return null;
  return (
    <figure className="my-6">
      <img
        src={url}
        alt={block.alt}
        width={block.width}
        height={block.height}
        loading="lazy"
        decoding="async"
        className="h-auto w-full rounded-card border border-border"
      />
      {block.caption && (
        <figcaption className="mt-2 text-sm text-muted">{block.caption}</figcaption>
      )}
    </figure>
  );
}

/** Click-to-load YouTube (privacy-enhanced domain): nothing loads from YouTube until clicked. */
export function VideoBlock({ block }: { block: Block<'video'> }) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="my-6">
      <div className="relative aspect-video overflow-hidden rounded-card border border-border bg-instrument">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${block.videoId}?autoplay=1&rel=0`}
            title={block.title}
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
            <span className="flex size-16 items-center justify-center rounded-full bg-danger text-white group-hover:scale-105 dark:text-bg">
              <Play aria-hidden className="size-8 fill-current" />
            </span>
            <span className="text-lg font-semibold">Play video: {block.title}</span>
            <span className="text-sm opacity-80">
              Loads YouTube (privacy-enhanced mode) when you click.
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-2 text-sm text-muted">
        {block.title}
        {block.captions ? ' · captions available' : ''}
      </figcaption>
    </figure>
  );
}
