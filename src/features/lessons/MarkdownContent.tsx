import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from '@/components/Link';
import { cn } from '@/lib/cn';

const components: Components = {
  // Internal links use the router; external links open in the same tab (Section 18.7).
  a: ({ href = '', children }) =>
    href.startsWith('/') ? (
      <Link to={href}>{children}</Link>
    ) : (
      <a href={href} className="font-medium text-primary underline underline-offset-2">
        {children}
      </a>
    ),
  table: ({ children }) => (
    // Wide tables scroll sideways on phones; the scroll region must be keyboard-focusable
    // (WCAG 2.1.1, axe "scrollable-region-focusable").
    <div
      className="my-4 overflow-x-auto rounded-card border border-border"
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      role="region"
      aria-label="Table"
    >
      <table className="w-full border-collapse text-left text-sm sm:text-base">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b-2 border-border bg-surface-2 px-3 py-2 font-semibold">{children}</th>
  ),
  td: ({ children }) => <td className="border-b border-border px-3 py-2 align-top">{children}</td>,
  code: ({ children }) => (
    <code className="rounded bg-surface-2 px-1 py-0.5 font-mono text-[0.9em]">{children}</code>
  ),
  // Lesson headings come from heading blocks; any stray h1/h2 renders as h3.
  h1: ({ children }) => <h3>{children}</h3>,
  h2: ({ children }) => <h3>{children}</h3>,
};

/**
 * Renders content Markdown safely: GitHub-flavoured Markdown, no raw HTML (no XSS from
 * content, Section 28.4).
 */
export function MarkdownContent({
  markdown,
  className,
  inline = false,
}: {
  markdown: string;
  className?: string;
  inline?: boolean;
}) {
  return (
    <div
      className={cn(
        inline
          ? '[&_p]:inline'
          : '[&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-semibold [&_li]:my-1 [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-3 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6',
        '[&_strong]:font-semibold',
        className,
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components} skipHtml>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
