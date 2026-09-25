import { QuizBlock, type QuizAnswerEvent } from '@/features/quizzes/QuizBlock';
import type { ChecklistDto } from '@shared/schemas/api';
import type { LessonBlock } from '@shared/schemas/content';
import {
  CalloutBlock,
  HeadingBlock,
  ImageBlock,
  MarkdownBlock,
  VideoBlock,
} from './blocks/SimpleBlocks';
import { WidgetBlock } from './blocks/WidgetBlock';

/**
 * Maps pre-parsed lesson blocks to components (Section 31.4). Unknown block types render
 * nothing in production and a warning in development.
 */
export function LessonRenderer({
  blocks,
  checklists = [],
  onQuizAnswer,
}: {
  blocks: LessonBlock[];
  checklists?: ChecklistDto[];
  onQuizAnswer?: (event: QuizAnswerEvent) => void;
}) {
  return (
    <>
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        switch (block.type) {
          case 'markdown':
            return <MarkdownBlock key={key} block={block} />;
          case 'heading':
            return <HeadingBlock key={key} block={block} />;
          case 'callout':
            return <CalloutBlock key={key} block={block} />;
          case 'image':
            return <ImageBlock key={key} block={block} />;
          case 'video':
            return <VideoBlock key={key} block={block} />;
          case 'quiz':
            return <QuizBlock key={key} quiz={block} onAnswer={onQuizAnswer} />;
          case 'widget':
            return (
              <WidgetBlock
                key={key}
                name={block.name}
                props={block.props}
                onQuizAnswer={(e) =>
                  onQuizAnswer?.({ questionId: e.questionId, answer: e.answer, correct: e.correct })
                }
              />
            );
          case 'checklist':
            return (
              <WidgetBlock
                key={key}
                name="checklist-runner"
                props={{ slug: block.slug }}
                checklist={checklists.find((c) => c.slug === block.slug)}
              />
            );
          default: {
            const unknown = block as { type: string };
            return import.meta.env.DEV ? (
              <p
                key={key}
                className="my-4 rounded-card border-2 border-dashed border-warning p-3 text-warning"
              >
                Development only: unknown block type “{unknown.type}”.
              </p>
            ) : null;
          }
        }
      })}
    </>
  );
}
