import {
  ArrowLeft,
  ArrowRight,
  BookMarked,
  Check,
  ExternalLink as ExternalIcon,
  Plane,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Card, CardBody } from '@/components/Card';
import { DifficultyDots, TypeIcon } from '@/components/ChallengeMeta';
import { Dialog, DialogClose, DialogContent } from '@/components/Dialog';
import { Link } from '@/components/Link';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { Select } from '@/components/Select';
import { DraftBadge } from '@/features/content/DraftBadge';
import { cn } from '@/lib/cn';
import { lessonHref } from '@shared/schemas/api';
import type {
  ChallengeSummary,
  GlossaryTermRef,
  LessonSummary,
  ResourceDto,
} from '@shared/schemas/api';

export function SectionNav({
  sections,
  active,
}: {
  sections: { id: string; title: string }[];
  active?: string;
}) {
  return (
    <nav aria-label="Lesson sections" className="sticky top-24">
      <p className="mb-2 text-sm font-semibold text-muted">In this lesson</p>
      <ol className="flex flex-col gap-1 border-l-2 border-border">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              aria-current={active === section.id ? 'location' : undefined}
              className={cn(
                '-ml-0.5 block border-l-2 py-1 pl-3 text-sm hover:text-text',
                active === section.id
                  ? 'border-primary font-semibold text-primary'
                  : 'border-transparent text-muted',
              )}
            >
              <span className="mr-1 font-mono">{index + 1}.</span> {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Mobile: "Section 2 of 6" jump menu (Section 20.4). */
export function MobileSectionSelect({
  sections,
  active,
}: {
  sections: { id: string; title: string }[];
  active?: string;
}) {
  const index = Math.max(
    0,
    sections.findIndex((s) => s.id === active),
  );
  return (
    <div className="sticky top-16 z-20 -mx-4 border-b border-border bg-surface/95 px-4 py-2 backdrop-blur lg:hidden">
      <label htmlFor="section-jump" className="sr-only">
        Jump to section
      </label>
      <Select
        id="section-jump"
        value={active ?? sections[0]?.id}
        onChange={(e) => {
          const el = document.getElementById(e.target.value);
          el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          el?.focus({ preventScroll: true });
        }}
      >
        {sections.map((section, i) => (
          <option key={section.id} value={section.id}>
            Section {i + 1} of {sections.length}: {section.title}
          </option>
        ))}
      </Select>
      <span className="sr-only" aria-live="polite">
        Section {index + 1} of {sections.length}
      </span>
    </div>
  );
}

export function GlossaryList({ terms }: { terms: GlossaryTermRef[] }) {
  if (terms.length === 0) return null;
  return (
    <section
      aria-labelledby="terms-heading"
      className="rounded-card border border-border bg-surface p-4"
    >
      <h2 id="terms-heading" className="flex items-center gap-2 font-semibold">
        <BookMarked aria-hidden className="size-4" /> Terms in this lesson
      </h2>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {terms.map((term) => (
          <li key={term.slug}>
            <Popover>
              <PopoverTrigger className="min-h-8 rounded-full border border-border px-2.5 text-sm hover:border-primary hover:text-primary">
                {term.term}
              </PopoverTrigger>
              <PopoverContent>
                <p className="font-semibold">{term.term}</p>
                <p className="mt-1 text-sm text-muted">{term.definition}</p>
                <Link to={`/reference/glossary#${term.slug}`} className="mt-2 inline-block text-sm">
                  Open in the glossary
                </Link>
              </PopoverContent>
            </Popover>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ObjectivesBox({ objectives }: { objectives: string[] }) {
  return (
    <Card className="my-6 bg-primary-soft">
      <CardBody>
        <h2 className="font-semibold">In this lesson you will</h2>
        <ul className="mt-2 flex flex-col gap-1.5">
          {objectives.map((objective) => (
            <li key={objective} className="flex gap-2">
              <Check aria-hidden className="mt-1 size-4 shrink-0 text-primary" />
              {objective}
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}

const DISMISS_KEY = 'ltf-signup-banner-dismissed';

/** Non-blocking "Sign up to save your progress" banner for visitors (Flow A). */
export function SignupBanner({ returnTo }: { returnTo: string }) {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem(DISMISS_KEY) === '1';
    } catch {
      return false;
    }
  });
  if (dismissed) return null;
  return (
    <aside
      aria-label="Save your progress"
      className="my-4 flex items-center gap-3 rounded-card border border-border bg-surface-2 px-4 py-3"
    >
      <p className="flex-1 text-sm">
        <Link to={`/signup?returnTo=${encodeURIComponent(returnTo)}`}>Sign up</Link> (free) to save
        your progress and challenge scores.
      </p>
      <Button
        variant="ghost"
        size="sm"
        aria-label="Dismiss"
        onClick={() => {
          setDismissed(true);
          try {
            localStorage.setItem(DISMISS_KEY, '1');
          } catch {
            // ignore
          }
        }}
      >
        <X aria-hidden className="size-4" />
      </Button>
    </aside>
  );
}

export function GoDeeper({ resources }: { resources: ResourceDto[] }) {
  if (resources.length === 0) return null;
  return (
    <section aria-labelledby="go-deeper" className="mt-12">
      <h2 id="go-deeper" className="text-2xl font-bold">
        Go deeper
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {resources.map((resource) => (
          <li key={resource.slug}>
            <Card className="h-full">
              <CardBody className="flex h-full flex-col gap-1">
                <p className="text-sm text-muted">
                  {resource.publisher} · <span className="capitalize">{resource.type}</span>
                  {!resource.free && ' · paid'}
                </p>
                {resource.url ? (
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-1 font-semibold text-primary underline-offset-2 hover:underline"
                  >
                    {resource.title}
                    <ExternalIcon aria-hidden className="mt-1 size-3.5 shrink-0" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <p className="font-semibold">{resource.title}</p>
                )}
                <p className="text-sm text-muted">{resource.description}</p>
                {resource.location && <p className="text-sm">{resource.location}</p>}
              </CardBody>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function FlyIt({ challenges }: { challenges: ChallengeSummary[] }) {
  if (challenges.length === 0) return null;
  return (
    <section aria-labelledby="fly-it" className="mt-12">
      <h2 id="fly-it" className="flex items-center gap-2 text-2xl font-bold">
        <Plane aria-hidden className="size-6 text-primary" /> Fly it
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {challenges.map((challenge) => (
          <li key={challenge.slug}>
            <Link
              unstyled
              to={`/challenges/${challenge.slug}`}
              className="block h-full rounded-card border border-border bg-surface p-4 shadow-1 hover:border-primary"
            >
              <p className="font-mono text-sm text-muted">{challenge.code}</p>
              <p className="font-semibold">{challenge.title}</p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <TypeIcon type={challenge.type} />
                <DifficultyDots value={challenge.difficulty} />
                <span className="text-sm text-muted">{challenge.estimatedMinutes} min</span>
                {challenge.priority === 'P1' && <Badge variant="bonus">Bonus</Badge>}
                {challenge.draft && <DraftBadge />}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PrevNext({
  previous,
  next,
}: {
  previous: LessonSummary | null;
  next: LessonSummary | null;
}) {
  if (!previous && !next) return null;
  return (
    <nav aria-label="Previous and next lesson" className="mt-10 grid gap-3 sm:grid-cols-2">
      {previous ? (
        <Link
          unstyled
          to={lessonHref(previous)}
          className="rounded-card border border-border bg-surface p-4 hover:border-primary"
        >
          <span className="flex items-center gap-1 text-sm text-muted">
            <ArrowLeft aria-hidden className="size-4" /> Previous lesson
          </span>
          <span className="font-semibold">
            {previous.code} {previous.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          unstyled
          to={lessonHref(next)}
          className="rounded-card border border-border bg-surface p-4 text-right hover:border-primary"
        >
          <span className="flex items-center justify-end gap-1 text-sm text-muted">
            Next lesson <ArrowRight aria-hidden className="size-4" />
          </span>
          <span className="font-semibold">
            {next.code} {next.title}
          </span>
        </Link>
      )}
    </nav>
  );
}

/**
 * "Mark complete" (step 6.10). Visitors get a sign-up prompt; signed-in learners mark the
 * lesson complete (saved to the server from Phase 8 via `onComplete`).
 */
export function MarkComplete({
  signedIn,
  completed,
  onComplete,
  returnTo,
  pending,
}: {
  signedIn: boolean;
  completed: boolean;
  onComplete: () => void;
  returnTo: string;
  pending?: boolean;
}) {
  const [promptOpen, setPromptOpen] = useState(false);
  if (completed) {
    return (
      <p role="status" className="flex items-center gap-2 font-semibold text-success">
        <Check aria-hidden className="size-5" /> Lesson complete
      </p>
    );
  }
  return (
    <>
      <Button
        size="lg"
        loading={pending}
        onClick={() => (signedIn ? onComplete() : setPromptOpen(true))}
      >
        <Check aria-hidden className="size-5" /> Mark lesson complete
      </Button>
      <Dialog open={promptOpen} onOpenChange={setPromptOpen}>
        <DialogContent
          title="Save your progress"
          description="Create a free account to mark lessons complete, save quiz answers and track your challenge scores."
        >
          <div className="flex flex-wrap justify-end gap-2">
            <DialogClose asChild>
              <Button variant="secondary">Not now</Button>
            </DialogClose>
            <Button variant="secondary" asChild>
              <Link unstyled to={`/login?returnTo=${encodeURIComponent(returnTo)}`}>
                Log in
              </Link>
            </Button>
            <Button asChild>
              <Link unstyled to={`/signup?returnTo=${encodeURIComponent(returnTo)}`}>
                Sign up free
              </Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function LessonDisclaimer() {
  return (
    <p className="mt-12 border-t border-border pt-4 text-sm text-muted">
      For simulation use only. Not for real-world flight training or navigation.
    </p>
  );
}
