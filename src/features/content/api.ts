import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/apiClient';
import { CONTENT_STALE_TIME } from '@/lib/queryClient';
import type {
  AircraftResponse,
  AirportResponse,
  AirportsResponse,
  ChallengeResponse,
  ChallengesResponse,
  ChecklistResponse,
  ChecklistsResponse,
  GlossaryResponse,
  LessonResponse,
  ModuleResponse,
  ModulesResponse,
  ResourcesResponse,
} from '@shared/schemas/api';

/** Query keys (Section 31.3). Content is public and cacheable: 5-minute stale time. */
export const contentKeys = {
  modules: ['modules'] as const,
  module: (slug: string) => ['module', slug] as const,
  lesson: (slug: string) => ['lesson', slug] as const,
  challenges: (filters: Record<string, string | number | undefined>) =>
    ['challenges', filters] as const,
  challenge: (slug: string) => ['challenge', slug] as const,
  aircraft: ['aircraft', 'c172'] as const,
  checklists: ['checklists'] as const,
  checklist: (slug: string) => ['checklist', slug] as const,
  airports: ['airports'] as const,
  airport: (icao: string) => ['airport', icao] as const,
  glossary: ['glossary'] as const,
  resources: (filters: Record<string, string | undefined>) => ['resources', filters] as const,
};

const content = { staleTime: CONTENT_STALE_TIME };

export const useModules = () =>
  useQuery({
    queryKey: contentKeys.modules,
    queryFn: () => api.get<ModulesResponse>('/modules'),
    ...content,
  });

export const useModule = (slug: string) =>
  useQuery({
    queryKey: contentKeys.module(slug),
    queryFn: () => api.get<ModuleResponse>(`/modules/${slug}`),
    ...content,
  });

export const useLesson = (slug: string) =>
  useQuery({
    queryKey: contentKeys.lesson(slug),
    queryFn: () => api.get<LessonResponse>(`/lessons/${slug}`),
    ...content,
  });

export const useChallenges = (filters: Record<string, string | number | undefined> = {}) =>
  useQuery({
    queryKey: contentKeys.challenges(filters),
    queryFn: () => api.get<ChallengesResponse>('/challenges', { query: filters }),
    ...content,
  });

export const useChallenge = (slug: string) =>
  useQuery({
    queryKey: contentKeys.challenge(slug),
    queryFn: () => api.get<ChallengeResponse>(`/challenges/${slug}`),
    ...content,
  });

export const useAircraft = () =>
  useQuery({
    queryKey: contentKeys.aircraft,
    queryFn: () => api.get<AircraftResponse>('/aircraft/c172'),
    ...content,
  });

export const useChecklists = () =>
  useQuery({
    queryKey: contentKeys.checklists,
    queryFn: () => api.get<ChecklistsResponse>('/checklists'),
    ...content,
  });

export const useChecklist = (slug: string) =>
  useQuery({
    queryKey: contentKeys.checklist(slug),
    queryFn: () => api.get<ChecklistResponse>(`/checklists/${slug}`),
    enabled: Boolean(slug),
    ...content,
  });

export const useAirports = () =>
  useQuery({
    queryKey: contentKeys.airports,
    queryFn: () => api.get<AirportsResponse>('/airports'),
    ...content,
  });

export const useAirport = (icao: string) =>
  useQuery({
    queryKey: contentKeys.airport(icao),
    queryFn: () => api.get<AirportResponse>(`/airports/${icao}`),
    ...content,
  });

export const useGlossary = () =>
  useQuery({
    queryKey: contentKeys.glossary,
    queryFn: () => api.get<GlossaryResponse>('/glossary'),
    ...content,
  });

export const useResources = (filters: Record<string, string | undefined> = {}) =>
  useQuery({
    queryKey: contentKeys.resources(filters),
    queryFn: () => api.get<ResourcesResponse>('/resources', { query: filters }),
    ...content,
  });
