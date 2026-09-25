import { Badge } from '@/components/Badge';
import { Tooltip } from '@/components/Tooltip';

/** Marks content that has not been verified in the sim yet (Decision D-17). */
export function DraftBadge({ className }: { className?: string }) {
  return (
    <Tooltip content="Written but not yet checked in MSFS 2024. Numbers and steps may change.">
      <Badge variant="warning" className={className} tabIndex={0}>
        Draft · unverified
      </Badge>
    </Tooltip>
  );
}
