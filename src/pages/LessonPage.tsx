import { CheckCircle2, Clock } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Navigate, useLocation, useParams } from 'react-router';
import { Badge } from '@/components/Badge';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Callout } from '@/components/Callout';
import { useToast } from '@/components/Toast';
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
import {
  useMyProgress,
  useRecordQuizAnswer,
  useUpdateLessonProgress,
} from '@/features/progress/api';
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
  const { toast } = useToast();
  const { data: progress } = useMyProgress();
  const saved = progress?.lessons[lessonSlug];
  const completed = saved?.status === 'completed';
  const complete = useUpdateLessonProgress(lessonSlug);
  const saveSection = useUpdateLessonProgress(lessonSlug);
  const recordAnswer = useRecordQuizAnswer(lessonSlug);
  usePageTitle(lesson ? `${lesson.code} ${lesson.title}` : 'Lesson');
  const active = useScrollSpy(lesson?.sections.map((s) => s.id) ?? []);

  // Auto-save the resume point (step 8.7), debounced so scrolling doesn't send a burst.
  const lastSaved = useRef<string | null>(null);
  const { mutate: saveSectionMutate } = saveSection;
  useEffect(() => {
    if (!user || !lesson || !active || lastSaved.current === active) return;
    const timer = setTimeout(() => {
      lastSaved.current = active;
      saveSectionMutate({ lastSectionId: active });
    }, 2000);
    return () => clearTimeout(timer);
  }, [user, lesson, active, saveSectionMutate]);

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
                  {completed && (
                    <Badge variant="complete">
                      <CheckCircle2 aria-hidden className="size-3.5" /> Completed
                    </Badge>
                  )}
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
              {saved && !completed && saved.lastSectionId && !location.hash && (
                <ResumeLink sections={l.sections} sectionId={saved.lastSectionId} />
              )}
              <ObjectivesBox objectives={l.objectives} />
              <MobileSectionSelect sections={l.sections} active={active} />

              <div className="mt-6">
                <LessonRenderer
                  blocks={l.blocks}
                  checklists={l.checklists}
                  onQuizAnswer={
                    user
                      ? ({ questionId, answer }) => recordAnswer.mutate({ questionId, answer })
                      : undefined
                  }
                />
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
                  onComplete={() =>
                    complete.mutate(
                      { status: 'completed' },
                      {
                        onSuccess: () => toast('Lesson complete. Nice work!', 'success'),
                        onError: () =>
                          toast('Could not save your progress. Please try again.', 'error'),
                      },
                    )
                  }
                  pending={complete.isPending}
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

/** "Pick up where you left off" (step 8.7) when a saved section isn't the first one. */
function ResumeLink({
  sections,
  sectionId,
}: {
  sections: { id: string; title: string }[];
  sectionId: string;
}) {
  const index = sections.findIndex((s) => s.id === sectionId);
  if (index <= 0) return null;
  return (
    <p className="mt-4 rounded-card border border-primary/40 bg-primary-soft px-4 py-3">
      Pick up where you left off:{' '}
      <a href={`#${sectionId}`} className="font-semibold text-primary underline">
        {index + 1}. {sections[index]!.title}
      </a>
    </p>
  );
}
