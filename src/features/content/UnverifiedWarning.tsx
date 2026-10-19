import { TriangleAlert } from 'lucide-react';
import { cn } from '@/lib/cn';

const SOURCES = 'Microsoft Flight Simulator 2024 or against official sources';

const MESSAGE = {
  lesson: `This lesson is an unverified draft. It hasn't been checked in ${SOURCES}, so its numbers, procedures and steps may be wrong. Don't use it to learn to fly, in the sim or in a real aircraft.`,
  challenge: `This challenge is an unverified draft. It hasn't been flown and checked in ${SOURCES}, so its numbers, procedures and scoring may be wrong. Don't use it to learn to fly, in the sim or in a real aircraft.`,
  module: `The lessons and challenges marked "Draft · unverified" below haven't been checked in ${SOURCES}, so their numbers, procedures and steps may be wrong. Don't use them to learn to fly, in the sim or in a real aircraft.`,
} as const;

/**
 * The loud version of DraftBadge, shown at the top of any page that renders unverified
 * content (Decision D-17). Production never seeds drafts, but the repository is public, so
 * anyone running it locally sees them.
 */
export function UnverifiedWarning({
  kind,
  className,
}: {
  kind: keyof typeof MESSAGE;
  className?: string;
}) {
  return (
    <aside
      aria-labelledby="unverified-warning-title"
      className={cn(
        'grid grid-cols-[28px_1fr] gap-4 rounded-md border-2 border-warn bg-warn-tint px-5 py-5',
        className,
      )}
    >
      <TriangleAlert aria-hidden className="mt-0.5 size-7 text-warn" strokeWidth={2} />
      <div className="min-w-0">
        <h2 id="unverified-warning-title" className="text-xl font-bold text-warn">
          Unverified content: not for learning use
        </h2>
        <p className="mt-2 text-ink">{MESSAGE[kind]}</p>
      </div>
    </aside>
  );
}
