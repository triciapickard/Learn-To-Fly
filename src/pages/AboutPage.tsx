import { ExternalLink, Link } from '@/components/Link';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { Prose } from '@/components/Prose';
import { TRADEMARK_STATEMENT } from '@/features/layout/legal';
import { ISSUES_URL } from '@/features/layout/navigation';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function AboutPage() {
  usePageTitle('About');
  return (
    <PageContainer narrow>
      <PageHeader
        title="About Learn to Fly"
        description="Lessons and in-sim challenges that teach you to fly the Cessna 172 Skyhawk in Microsoft Flight Simulator 2024."
      />
      <Prose>
        <h2>How the course is built</h2>
        <p>
          Real pilots learn one skill at a time, in a set order, against clear standards. Learn to
          Fly follows the same order in MSFS 2024. A short lesson with interactive diagrams explains
          each skill. An in-sim challenge then gives you an exact setup to practice it and a scored
          debrief.
        </p>
        <h2>Who writes it</h2>
        <p>
          One flight-sim enthusiast builds Learn to Fly as an independent project. Before a lesson
          is published, the author checks every procedure and number against the FAA handbooks and
          flies it in the sim.
        </p>
        <h2>What the public beta means</h2>
        <p>
          Every module you can open has been flown and checked in MSFS 2024. The site is new, so you
          may still find a typo or a bug, and some pages will change as feedback comes in.
        </p>
        <h2>After the Cessna 172</h2>
        <p>
          Version 1 teaches one airplane, the Cessna 172 Skyhawk, from your first flight to a
          planned cross-country. Later versions add one aircraft at a time, up to the Airbus A380.
          See the <Link to="/roadmap">roadmap</Link>.
        </p>
        <h2>Report a bug or a mistake</h2>
        <p>
          Use Report a problem at the bottom of any page, or open an issue on{' '}
          <ExternalLink href={ISSUES_URL}>GitHub</ExternalLink>. Tell us what confused you, what
          broke and what you want next. The author reads every report.
        </p>
        <h2>Trademarks</h2>
        <p>{TRADEMARK_STATEMENT}</p>
        <p>
          Learn to Fly is for simulation use only. Read the full{' '}
          <Link to="/disclaimer">disclaimer</Link>.
        </p>
      </Prose>
    </PageContainer>
  );
}
