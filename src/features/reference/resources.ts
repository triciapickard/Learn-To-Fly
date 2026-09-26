import type { ResourceDto } from '@shared/schemas/api';

export interface ResourceFilters {
  topic?: string;
  type?: string;
  free?: string;
}

/** Resources page filters (step 10.6): topic, type and free-only, combined with AND. */
export function filterResources(resources: ResourceDto[], filters: ResourceFilters) {
  return resources.filter(
    (r) =>
      (!filters.topic || r.topics.includes(filters.topic)) &&
      (!filters.type || r.type === filters.type) &&
      (filters.free !== 'true' || r.free),
  );
}

/** Every topic used by at least one resource, alphabetically. */
export function topicsOf(resources: ResourceDto[]): string[] {
  return [...new Set(resources.flatMap((r) => r.topics))].sort();
}

/** "aircraft-systems" → "Aircraft systems". */
export function humanize(slug: string): string {
  const text = slug.replace(/[-_]+/g, ' ');
  return text.charAt(0).toUpperCase() + text.slice(1);
}
