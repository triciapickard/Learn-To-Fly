import { BookOpen, Gauge, Library, ListChecks, MapPin, type LucideIcon } from 'lucide-react';
import { Link } from '@/components/Link';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { AircraftKeyNumbers } from '@/features/content/AircraftKeyNumbers';
import { usePageTitle } from '@/hooks/usePageTitle';

const SECTIONS: { to: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    to: '/reference/speeds',
    title: 'V-speeds and limits',
    description: 'Every Skyhawk speed, the airspeed arcs and typical power settings.',
    icon: Gauge,
  },
  {
    to: '/reference/checklists',
    title: 'Checklists',
    description: 'Normal and emergency checklists, from preflight to securing the airplane.',
    icon: ListChecks,
  },
  {
    to: '/reference/airports',
    title: 'Airports',
    description: 'The Bay Area airports used in the course, with runways and challenges.',
    icon: MapPin,
  },
  {
    to: '/reference/glossary',
    title: 'Glossary',
    description: 'Plain-English definitions of the terms used in the lessons.',
    icon: BookOpen,
  },
  {
    to: '/reference/resources',
    title: 'Resources',
    description: 'Free FAA handbooks, charts, tools and communities worth knowing.',
    icon: Library,
  },
];

/** Reference hub (step 10.1): quick-lookup pages for use mid-flight. */
export default function ReferenceHubPage() {
  usePageTitle('Reference');
  return (
    <PageContainer>
      <PageHeader
        title="Reference"
        description="Quick lookups for mid-flight: speeds, checklists, airports, terms and further reading."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
        <ul className="grid gap-4 sm:grid-cols-2">
          {SECTIONS.map(({ to, title, description, icon: Icon }) => (
            <li
              key={to}
              className="relative flex gap-4 rounded-card border border-border bg-surface p-5 shadow-1 hover:border-primary"
            >
              <Icon aria-hidden className="size-8 shrink-0 text-primary" />
              <div>
                <h2 className="text-xl font-semibold">
                  <Link to={to} unstyled className="after:absolute after:inset-0">
                    {title}
                  </Link>
                </h2>
                <p className="mt-1 text-muted">{description}</p>
              </div>
            </li>
          ))}
        </ul>
        <AircraftKeyNumbers columns={1} />
      </div>
    </PageContainer>
  );
}
