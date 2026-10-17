import { ExternalLink, Link } from '@/components/Link';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { Prose } from '@/components/Prose';
import { TRADEMARK_STATEMENT } from '@/features/layout/legal';
import { GITHUB_URL } from '@/features/layout/navigation';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function AboutPage() {
  usePageTitle('About');
  return (
    <PageContainer narrow>
      <PageHeader
        title="About Learn to Fly"
        description="A structured course for learning to fly in Microsoft Flight Simulator 2024."
      />
      <Prose>
        <h2>Why this exists</h2>
        <p>
          Microsoft Flight Simulator 2024 models real airplanes in detail, but most beginners take
          off, crash a few times and give up. Tutorials are scattered across long videos, and
          real-world handbooks are long and dense. Real pilots learn one skill at a time, in a set
          order, against clear standards.
        </p>
        <p>
          Learn to Fly brings that structure to the sim. Short lessons with interactive diagrams
          explain each idea, and in-sim challenges let you practice it with an exact setup and a
          scored debrief.
        </p>
        <h2>Who builds it</h2>
        <p>
          Learn to Fly is an independent personal project built by a flight-sim enthusiast who
          struggled to find in-depth tutorials that explain how to fly the aircraft as well as which
          buttons to press. Every procedure and number is checked against FAA handbooks and flown in
          the sim before it is published.
        </p>
        <h2>Where it is going</h2>
        <p>
          Version 1 teaches one airplane, the Cessna 172 Skyhawk, from your first flight to a
          planned cross-country. Later versions add one aircraft at a time, up the ladder to the
          Airbus A380. See the <Link to="/roadmap">roadmap</Link>.
        </p>
        <h2>Contact</h2>
        <p>
          Found a mistake or have an idea? Open an issue on{' '}
          <ExternalLink href={`${GITHUB_URL}/issues`}>GitHub</ExternalLink>.
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
