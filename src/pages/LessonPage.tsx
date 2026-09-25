import { Clock } from 'lucide-react';
import { useState } from 'react';
import { Navigate, useLocation, useParams } from 'react-router';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Callout } from '@/components/Callout';
import { useAuth } from '@/features/auth/api';
import { AircraftKeyNumbers } from '@/features/content/AircraftKeyNumbers';
import { useLesson } from '@/features/content/api';
import { DraftBadge } from '@/features/content/DraftBadge';
import { QueryStates } from '@/features/content/queryState';
import {
  FlyIt,
  GlossaryList,
  GoDeeper,
  LessonDisclaimer,
  MarkComplete,
  MobileSectionSelect,
  ObjectivesBox,
  PrevNext,
  SectionNav,
  SignupBanner,
} from '@/features/lessons/LessonParts';
import { LessonRenderer } from '@/features/lessons/LessonRenderer';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { lessonHref } from '@shared/schemas/api';

/** Lesson player (Section 20.4). */
export default function LessonPage() {
  const { moduleSlug = '', lessonSlug = '' } = useParams();
  const location = useLocation();
  const { data, isPending, error, refetch } = useLesson(lessonSlug);
  const { user } = useAuth();
  const lesson = data?.lesson;
  const [completed, setCompleted] = useState(false);
  usePageTitle(lesson ? `${lesson.code} ${lesson.title}` : 'Lesson');
  const active = useScrollSpy(lesson?.sections.map((s) => s.id) ?? []);

  if (lesson && lesson.moduleSlug !== moduleSlug) {
    return <Navigate to={lessonHref(lesson)} replace />;
  }

  return (
    <QueryStates isPending={isPending} error={error} refetch={refetch} label="Loading the lesson">
      {() => {
        const l = lesson!;
        return (
          <div className="mx-auto w-full max-w-7xl gap-10 px-4 py-8 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)_280px]">
            <aside className="hidden lg:block">
              <SectionNav sections={l.sections} active={active} />
            </aside>

            <article className="min-w-0 max-w-[800px]">
              <Breadcrumbs
                items={[
                  { label: 'Learn', to: '/learn' },
                  {
                    label: `Module ${l.module.code.slice(1)}: ${l.module.title}`,
                    to: `/learn/${l.module.slug}`,
                  },
                  { label: l.title },
                ]}
              />
              <header className="mt-4">
                <p className="font-mono text-sm font-semibold text-primary">
                  Lesson {l.code.slice(1)}
                </p>
                <h1 className="mt-1 text-3xl font-bold sm:text-4xl">{l.title}</h1>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-muted">
                  {l.estimatedMinutes && (
                    <span className="flex items-center gap-1">
                      <Clock aria-hidden className="size-4" /> About {l.estimatedMinutes} minutes
                    </span>
                  )}
                  {l.draft && <DraftBadge />}
                </div>
              </header>

              {l.draft && (
                <Callout type="note" title="Draft lesson" className="mt-6">
                  <p>
                    This lesson hasn&apos;t been checked in MSFS 2024 yet, so numbers and steps may
                    still change. Cross-check with the in-sim checklist.
                  </p>
                </Callout>
              )}
              {!user && <SignupBanner returnTo={location.pathname} />}
              <ObjectivesBox objectives={l.objectives} />
              <MobileSectionSelect sections={l.sections} active={active} />

              <div className="mt-6">
                <LessonRenderer blocks={l.blocks} checklists={l.checklists} />
              </div>

              <FlyIt challenges={l.challenges} />
              <GoDeeper resources={l.resources} />
              <div className="mt-10 xl:hidden">
                <GlossaryList terms={l.glossaryTerms} />
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-4 rounded-card border border-border bg-surface p-5">
                <p className="flex-1 font-semibold">Finished reading and trying the questions?</p>
                <MarkComplete
                  signedIn={Boolean(user)}
                  completed={completed}
                  onComplete={() => setCompleted(true)}
                  returnTo={location.pathname}
                />
              </div>
              <PrevNext previous={l.navigation.previous} next={l.navigation.next} />
              <LessonDisclaimer />
            </article>

            <aside className="hidden xl:block" aria-label="Lesson reference">
              <div className="sticky top-24 flex flex-col gap-4">
                <AircraftKeyNumbers columns={1} />
                <GlossaryList terms={l.glossaryTerms} />
              </div>
            </aside>
          </div>
        );
      }}
    </QueryStates>
  );
}
