import { existsSync, statSync, readFileSync } from 'node:fs';
import path from 'node:path';
import GithubSlugger from 'github-slugger';
import matter from 'gray-matter';
import { imageSize } from 'image-size';
import type { Heading, List, ListItem, Nodes, Paragraph, Root, RootContent, Image } from 'mdast';
import type { ContainerDirective, LeafDirective } from 'mdast-util-directive';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';
import {
  CALLOUT_TYPES,
  LessonFrontmatterSchema,
  QuizBlockSchema,
  type Aircraft,
  type LessonBlock,
  type LessonFrontmatter,
  type Section,
} from '@shared/schemas/content.js';
import { isWidgetName, type WidgetName } from '@shared/widgets.js';
import type { IssueList } from './issues.js';
import { INTERNAL_LINK_PATTERN, resolveToken, TOKEN_PATTERN } from './tokens.js';

export interface LinkTarget {
  code: string;
  title: string;
  href: string;
}

export interface ParseContext {
  aircraft: Aircraft;
  /** Lesson and challenge slugs that `[[slug]]` links can point to. */
  links: Map<string, LinkTarget>;
  checklistSlugs: Set<string>;
  /** Root folder for lesson images, e.g. `src/assets/lessons`. */
  assetsDir: string;
  issues: IssueList;
}

export interface ParsedLesson {
  file: string;
  frontmatter: LessonFrontmatter;
  blocks: LessonBlock[];
  sections: Section[];
  widgets: WidgetName[];
  checklists: string[];
  /** Plain text of the lesson body (for glossary term detection). */
  text: string;
  hasVerifyCallout: boolean;
}

const MAX_IMAGE_BYTES = 400 * 1024;
const WORDS_BEFORE_VISUAL = 300;

const processor = unified().use(remarkParse).use(remarkGfm).use(remarkDirective);
const stringifier = unified()
  .use(remarkStringify, { bullet: '-', emphasis: '_', listItemIndent: 'one' })
  .use(remarkGfm)
  .use(remarkDirective);

function toMarkdown(nodes: RootContent[]): string {
  if (nodes.length === 0) return '';
  return stringifier.stringify({ type: 'root', children: nodes } as Root).trim();
}

function toText(node: Nodes): string {
  if ('value' in node && typeof node.value === 'string') return node.value;
  if ('alt' in node && typeof node.alt === 'string') return node.alt;
  if ('children' in node) return (node.children as Nodes[]).map(toText).join(' ');
  return '';
}

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

/** Replaces `{{vspeed.vy}}` tokens and `[[slug]]` links, reporting unknown ones with lines. */
function replaceTokens(body: string, lineOffset: number, file: string, ctx: ParseContext): string {
  const lineAt = (index: number) => lineOffset + body.slice(0, index).split('\n').length;
  let out = body.replace(TOKEN_PATTERN, (match, ns: string, key: string, index: number) => {
    const value = resolveToken(ctx.aircraft, ns, key);
    if (value === null) {
      ctx.issues.error(file, `Unknown token ${match}`, lineAt(index));
      return match;
    }
    return value;
  });
  out = out.replace(INTERNAL_LINK_PATTERN, (match, slug: string, index: number) => {
    const target = ctx.links.get(slug);
    if (!target) {
      ctx.issues.error(
        file,
        `Broken internal link ${match}: no lesson or challenge with that slug`,
        lineAt(index),
      );
      return match;
    }
    return `[${target.code} ${target.title}](${target.href})`;
  });
  return out;
}

function directiveAttrs(node: ContainerDirective | LeafDirective): Record<string, string> {
  const attrs: Record<string, string> = {};
  for (const [key, value] of Object.entries(node.attributes ?? {})) {
    if (typeof value === 'string') attrs[key] = value;
  }
  return attrs;
}

function isImageParagraph(node: RootContent): node is Paragraph & { children: [Image] } {
  if (node.type !== 'paragraph') return false;
  const meaningful = node.children.filter((c) => !(c.type === 'text' && c.value.trim() === ''));
  return meaningful.length === 1 && meaningful[0]!.type === 'image';
}

function parseQuiz(
  node: ContainerDirective,
  sectionId: string | undefined,
  file: string,
  line: number | undefined,
  ctx: ParseContext,
): LessonBlock | null {
  const attrs = directiveAttrs(node);
  const quizType = attrs.type;
  const breakIndex = node.children.findIndex((c) => c.type === 'thematicBreak');
  if (breakIndex === -1) {
    ctx.issues.error(
      file,
      `Quiz "${attrs.id ?? '?'}" needs a "---" line before its explanation`,
      line,
    );
    return null;
  }
  const question = node.children.slice(0, breakIndex) as RootContent[];
  const explanation = toMarkdown(node.children.slice(breakIndex + 1) as RootContent[]);
  const listIndex = question.findIndex((c) => c.type === 'list');
  const base = { type: 'quiz' as const, id: attrs.id ?? '', explanation, sectionId };
  let candidate: unknown;

  if (quizType === 'numeric') {
    const missing = [
      Number.isNaN(Number(attrs.answer ?? 'x')) && 'answer="…" with the correct number',
      Number.isNaN(Number(attrs.tolerance ?? 'x')) &&
        'a tolerance="…" (Numeric questions need a tolerance)',
    ].filter(Boolean);
    if (missing.length) {
      ctx.issues.error(file, `Quiz "${attrs.id ?? '?'}" needs ${missing.join(' and ')}`, line);
      return null;
    }
    candidate = {
      ...base,
      quizType,
      prompt: toMarkdown(question),
      answer: Number(attrs.answer),
      tolerance: attrs.tolerance === undefined ? undefined : Number(attrs.tolerance),
      ...(attrs.unit ? { unit: attrs.unit } : {}),
    };
  } else {
    if (listIndex === -1) {
      ctx.issues.error(file, `Quiz "${attrs.id ?? '?'}" needs a list of options`, line);
      return null;
    }
    const list = question[listIndex] as List;
    const items = list.children as ListItem[];
    const options = items.map((item, i) => ({
      id: String.fromCharCode(97 + i),
      text: toMarkdown(item.children as RootContent[]),
    }));
    const prompt = toMarkdown(question.slice(0, listIndex));
    if (quizType === 'single' || quizType === 'multi') {
      const unmarked = items.filter((item) => item.checked === null || item.checked === undefined);
      if (unmarked.length > 0) {
        ctx.issues.error(
          file,
          `Quiz "${attrs.id ?? '?'}": write every option as "- [ ]" or "- [x]"`,
          line,
        );
        return null;
      }
      const correct = items.flatMap((item, i) =>
        item.checked ? [String.fromCharCode(97 + i)] : [],
      );
      candidate = { ...base, quizType, prompt, options, correct };
    } else if (quizType === 'order') {
      candidate = { ...base, quizType, prompt, options };
    } else {
      ctx.issues.error(
        file,
        `Quiz "${attrs.id ?? '?'}" has unknown type "${quizType ?? ''}"`,
        line,
      );
      return null;
    }
  }

  const result = QuizBlockSchema.safeParse(candidate);
  if (!result.success) {
    for (const issue of result.error.issues) {
      ctx.issues.error(
        file,
        `Quiz "${attrs.id ?? '?'}": ${issue.path.join('.') || 'quiz'} — ${issue.message}`,
        line,
      );
    }
    return null;
  }
  return result.data;
}

/**
 * Parses a lesson Markdown file into frontmatter, blocks and sections (step 5.12,
 * Section 28.4). Problems are added to `ctx.issues`; returns null only if the file is
 * unusable (bad frontmatter).
 */
export function parseLessonSource(
  source: string,
  file: string,
  ctx: ParseContext,
): ParsedLesson | null {
  const parsedMatter = matter(source);
  const fm = LessonFrontmatterSchema.safeParse(parsedMatter.data);
  if (!fm.success) {
    for (const issue of fm.error.issues) {
      ctx.issues.error(file, `frontmatter ${issue.path.join('.')}: ${issue.message}`, 1);
    }
    return null;
  }
  const frontmatter = fm.data;
  const body = parsedMatter.content;
  const lineOffset = source.slice(0, source.indexOf(body)).split('\n').length - 1;
  const tree = processor.parse(replaceTokens(body, lineOffset, file, ctx)) as Root;
  const lineOf = (node: { position?: { start: { line: number } } }) =>
    node.position ? node.position.start.line + lineOffset : undefined;

  const slugger = new GithubSlugger();
  const blocks: LessonBlock[] = [];
  const sections: Section[] = [];
  const widgets = new Set<WidgetName>();
  const checklists: string[] = [];
  let buffer: RootContent[] = [];
  let hasVerifyCallout = false;
  let currentSection: string | undefined;
  let wordsSinceVisual = 0;
  let warnedSection: string | undefined;

  const flush = () => {
    const markdown = toMarkdown(buffer);
    if (markdown) {
      blocks.push({ type: 'markdown', markdown });
      wordsSinceVisual += wordCount(buffer.map((n) => toText(n as Nodes)).join(' '));
      if (wordsSinceVisual > WORDS_BEFORE_VISUAL && warnedSection !== currentSection) {
        warnedSection = currentSection;
        ctx.issues.warning(
          file,
          `Section "${currentSection ?? '(intro)'}" has more than ${WORDS_BEFORE_VISUAL} words without a visual, widget or question`,
          lineOf(buffer[0]!),
        );
      }
    }
    buffer = [];
  };
  const visual = () => {
    wordsSinceVisual = 0;
  };

  for (const node of tree.children) {
    if (node.type === 'heading') {
      const heading = node as Heading;
      if (heading.depth === 1) {
        ctx.issues.error(
          file,
          'Use ## for sections; the lesson title comes from the frontmatter',
          lineOf(node),
        );
        continue;
      }
      if (heading.depth === 2) {
        flush();
        const text = toText(heading).trim();
        const id = slugger.slug(text);
        sections.push({ id, title: text });
        blocks.push({ type: 'heading', id, text, level: 2 });
        currentSection = id;
        wordsSinceVisual = 0;
        continue;
      }
    }

    if (node.type === 'containerDirective') {
      flush();
      const directive = node as ContainerDirective;
      const attrs = directiveAttrs(directive);
      if (directive.name === 'callout') {
        const calloutType = attrs.type as (typeof CALLOUT_TYPES)[number];
        if (!CALLOUT_TYPES.includes(calloutType)) {
          ctx.issues.error(
            file,
            `Callout type "${attrs.type ?? ''}" must be one of ${CALLOUT_TYPES.join(', ')}`,
            lineOf(node),
          );
          continue;
        }
        if (calloutType === 'verify') hasVerifyCallout = true;
        blocks.push({
          type: 'callout',
          calloutType,
          markdown: toMarkdown(directive.children as RootContent[]),
        });
        continue;
      }
      if (directive.name === 'quiz') {
        const quiz = parseQuiz(directive, currentSection, file, lineOf(node), ctx);
        if (quiz) {
          blocks.push(quiz);
          visual();
        }
        continue;
      }
      ctx.issues.error(file, `Unknown container directive ":::${directive.name}"`, lineOf(node));
      continue;
    }

    if (node.type === 'leafDirective') {
      flush();
      const directive = node as LeafDirective;
      const attrs = directiveAttrs(directive);
      if (directive.name === 'widget') {
        const { name, ...props } = attrs;
        if (!name || !isWidgetName(name)) {
          ctx.issues.error(file, `Unknown widget "${name ?? ''}"`, lineOf(node));
          continue;
        }
        widgets.add(name);
        blocks.push({ type: 'widget', name, props });
        visual();
        continue;
      }
      if (directive.name === 'video') {
        if (attrs.provider !== 'youtube' || !attrs.id || !attrs.title) {
          ctx.issues.error(file, 'Video needs provider="youtube", an id and a title', lineOf(node));
          continue;
        }
        blocks.push({
          type: 'video',
          provider: 'youtube',
          videoId: attrs.id,
          title: attrs.title,
          captions: attrs.captions !== 'false',
        });
        visual();
        continue;
      }
      if (directive.name === 'checklist') {
        if (!attrs.slug || !ctx.checklistSlugs.has(attrs.slug)) {
          ctx.issues.error(file, `Unknown checklist "${attrs.slug ?? ''}"`, lineOf(node));
          continue;
        }
        checklists.push(attrs.slug);
        widgets.add('checklist-runner');
        blocks.push({ type: 'checklist', slug: attrs.slug });
        visual();
        continue;
      }
      ctx.issues.error(file, `Unknown directive "::${directive.name}"`, lineOf(node));
      continue;
    }

    if (isImageParagraph(node)) {
      flush();
      const image = node.children.find((c) => c.type === 'image') as Image;
      const relative = path.posix.join(frontmatter.module, image.url);
      const filePath = path.join(ctx.assetsDir, relative);
      if (!image.alt || image.alt.trim().length < 10) {
        ctx.issues.error(
          file,
          `Image "${image.url}" needs alt text of at least 10 characters`,
          lineOf(node),
        );
      }
      if (!existsSync(filePath)) {
        ctx.issues.error(
          file,
          `Image not found: ${path.relative(process.cwd(), filePath)}`,
          lineOf(node),
        );
        continue;
      }
      if (statSync(filePath).size > MAX_IMAGE_BYTES) {
        ctx.issues.error(file, `Image "${image.url}" is larger than 400 KB`, lineOf(node));
      }
      const { width, height } = imageSize(readFileSync(filePath));
      blocks.push({
        type: 'image',
        src: relative,
        alt: image.alt ?? '',
        ...(image.title ? { caption: image.title } : {}),
        width: width ?? 0,
        height: height ?? 0,
      });
      visual();
      continue;
    }

    if (node.type === 'table') {
      // Tables count as a visual: numbers belong in tables (Section 12.4).
      buffer.push(node);
      flush();
      visual();
      continue;
    }

    buffer.push(node);
  }
  flush();

  if (frontmatter.widgets) {
    const listed = [...frontmatter.widgets].sort().join(',');
    const used = [...widgets].sort().join(',');
    if (listed !== used) {
      ctx.issues.error(
        file,
        `frontmatter widgets [${listed}] do not match the widgets used [${used}]`,
        1,
      );
    }
  }
  if (sections.length === 0) ctx.issues.error(file, 'A lesson needs at least one ## section', 1);

  return {
    file,
    frontmatter,
    blocks,
    sections,
    widgets: [...widgets],
    checklists,
    text: toText(tree as Nodes),
    hasVerifyCallout,
  };
}
