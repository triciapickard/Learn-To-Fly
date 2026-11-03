import { Callout } from '@/components/Callout';
import { YouTubeEmbed } from '@/components/YouTubeEmbed';
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
        className="h-auto w-full rounded-lg border border-line"
      />
      {block.caption && (
        <figcaption className="mt-2 text-sm text-ink-2">{block.caption}</figcaption>
      )}
    </figure>
  );
}

/** Click-to-load YouTube (privacy-enhanced domain): nothing loads from YouTube until clicked. */
export function VideoBlock({ block }: { block: Block<'video'> }) {
  return (
    <figure className="my-6">
      <YouTubeEmbed
        videoId={block.videoId}
        title={block.title}
        detail="Loads YouTube (privacy-enhanced mode) when you click."
      />
      <figcaption className="mt-2 text-sm text-ink-2">
        {block.title}
        {block.captions ? ' · captions available' : ''}
      </figcaption>
    </figure>
  );
}
