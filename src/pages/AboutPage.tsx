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
        <h2>Public beta</h2>
        <p>
          Learn to Fly is in public beta. Everything that is open has been flown and checked in MSFS
          2024, but the site is new: you may find a typo, a rough edge or a bug, and some pages and
          features will change as feedback comes in. Modules that are still being written are marked
          as such and are not meant for learning yet.
        </p>
        <p>
          The best thing you can do during the beta is fly the open lessons and challenges and say
          what confused you, what broke and what you want next.
        </p>
        <h2>Where it is going</h2>
        <p>
          Version 1 teaches one airplane, the Cessna 172 Skyhawk, from your first flight to a
          planned cross-country. Later versions add one aircraft at a time, up the ladder to the
          Airbus A380. See the <Link to="/roadmap">roadmap</Link>.
        </p>
        <h2>Contact</h2>
        <p>
          Found a bug or a mistake, or have an idea? Open an issue on{' '}
          <ExternalLink href={ISSUES_URL}>GitHub</ExternalLink>. Every report during the beta is
          read.
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
