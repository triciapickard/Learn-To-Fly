import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { seriousViolations } from '@/test/axe';
import { glossaryFixture, resourcesFixture } from '@/test/fixtures';
import { renderRoute } from '@/test/render';
import { groupByLetter, letterOf, normalize, searchGlossary } from './glossary';
import { filterResources, humanize, topicsOf } from './resources';

describe('glossary search (step 10.5)', () => {
  it('normalizes case, accents and punctuation', () => {
    expect(normalize('  V-Speeds, Café!  ')).toBe('v speeds cafe');
  });

  it('matches names and aliases first, then definitions', () => {
    const slugs = (q: string) => searchGlossary(glossaryFixture, q).map((t) => t.slug);
    expect(slugs('')).toEqual(['vy', 'vx', 'ctaf']);
    expect(slugs('VY')).toEqual(['vy']);
    expect(slugs('common traffic')).toEqual(['ctaf']);
    // "altitude" only appears in the Vy and Vx definitions.
    expect(slugs('altitude')).toEqual(['vy', 'vx']);
    // "climb" is in both aliases and not in the CTAF entry.
    expect(slugs('climb')).toEqual(['vy', 'vx']);
    expect(slugs('zzz')).toEqual([]);
  });

  it('groups terms A–Z, with numbers under #', () => {
    expect(letterOf('1-in-60 rule')).toBe('#');
    expect(letterOf('ctaf')).toBe('C');
    expect(groupByLetter(glossaryFixture).map(([l, ts]) => [l, ts.map((t) => t.slug)])).toEqual([
      ['C', ['ctaf']],
      ['V', ['vx', 'vy']],
    ]);
  });
});

describe('resource filters (step 10.6)', () => {
  it('combines topic, type and free-only', () => {
    const slugs = (f: Parameters<typeof filterResources>[1]) =>
      filterResources(resourcesFixture, f).map((r) => r.slug);
    expect(slugs({})).toEqual(['phak', 'pilotedge']);
    expect(slugs({ free: 'true' })).toEqual(['phak']);
    expect(slugs({ topic: 'radio' })).toEqual(['pilotedge']);
    expect(slugs({ topic: 'radio', free: 'true' })).toEqual([]);
    expect(slugs({ type: 'handbook' })).toEqual(['phak']);
    expect(topicsOf(resourcesFixture)).toEqual(['aerodynamics', 'radio']);
    expect(humanize('aircraft-systems')).toBe('Aircraft systems');
  });
});

describe('reference pages (step 10.9)', () => {
  it('shows the V-speeds, limits and power settings from the aircraft data', async () => {
    const { container } = renderRoute('/reference/speeds');
    const table = await screen.findByRole('table', { name: 'V-speeds' });
    const vy = within(table).getByRole('row', { name: /Best rate of climb/ });
    expect(within(vy).getByText('74')).toBeInTheDocument();
    expect(within(table).getByText('60–70')).toBeInTheDocument();
    expect(screen.getByText('105 KIAS at 2,550 lb')).toBeInTheDocument();
    expect(screen.getByText(/not yet checked against the MSFS 2024/)).toBeInTheDocument();
    expect(
      screen.getByRole('table', { name: 'Typical training power settings' }),
    ).toBeInTheDocument();
    expect(await seriousViolations(container)).toEqual([]);
  });

  it('shows an airport with its challenges', async () => {
    const { container } = renderRoute('/reference/airports/KLVK');
    expect(
      await screen.findByRole('heading', { level: 1, name: 'Livermore Municipal' }),
    ).toBeInTheDocument();
    const challenges = screen.getByRole('region', { name: 'Challenges at this airport' });
    expect(within(challenges).getByRole('link', { name: 'Straight and level' })).toHaveAttribute(
      'href',
      '/challenges/c2-1-straight-and-level',
    );
    expect(
      screen.getByText(/Frequencies are listed here once they're verified/),
    ).toBeInTheDocument();
    expect(screen.getAllByText('Not yet verified').length).toBeGreaterThan(0);
    expect(await seriousViolations(container)).toEqual([]);
  });

  it('shows the not-found page for an unknown airport', async () => {
    renderRoute('/reference/airports/KXXX');
    expect(
      await screen.findByRole('heading', { level: 1, name: "You've wandered off the taxiway" }),
    ).toBeInTheDocument();
  });

  it('lists airports with how many challenges start there', async () => {
    renderRoute('/reference/airports');
    const link = await screen.findByRole('link', { name: 'Livermore Municipal' });
    expect(link).toHaveAttribute('href', '/reference/airports/KLVK');
    expect(screen.getByText('Class D')).toBeInTheDocument();
  });

  it('searches the glossary and links A–Z', async () => {
    const { container } = renderRoute('/reference/glossary');
    const nav = await screen.findByRole('navigation', { name: 'Jump to letter' });
    expect(within(nav).getByRole('link', { name: 'V' })).toHaveAttribute('href', '#letter-V');
    expect(within(nav).queryByRole('link', { name: 'A' })).not.toBeInTheDocument();
    expect(screen.getByRole('article', { name: 'Vy' })).toHaveAttribute('id', 'vy');
    expect(await seriousViolations(container)).toEqual([]);

    await userEvent.type(screen.getByRole('searchbox', { name: 'Search terms' }), 'traffic');
    expect(screen.getByText('1 term match “traffic”')).toBeInTheDocument();
    expect(screen.getByRole('article', { name: 'CTAF' })).toBeInTheDocument();
    expect(screen.queryByRole('article', { name: 'Vy' })).not.toBeInTheDocument();

    await userEvent.clear(screen.getByRole('searchbox', { name: 'Search terms' }));
    await userEvent.type(screen.getByRole('searchbox', { name: 'Search terms' }), 'qqq');
    expect(screen.getByText('No terms match')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Clear search' }));
    expect(screen.getByRole('article', { name: 'Vy' })).toBeInTheDocument();
  });

  it('opens a related term even when a search hides it', async () => {
    renderRoute('/reference/glossary');
    await userEvent.type(
      await screen.findByRole('searchbox', { name: 'Search terms' }),
      'best rate',
    );
    const vy = screen.getByRole('article', { name: 'Vy' });
    await userEvent.click(within(vy).getByRole('link', { name: 'Vx' }));
    const vx = await screen.findByRole('article', { name: 'Vx' });
    await waitFor(() => expect(vx).toHaveFocus());
    expect(window.location.hash).toBe('#vx');
  });

  it('filters resources from the URL', async () => {
    renderRoute('/reference/resources?free=true');
    expect(await screen.findByText('Showing 1 resource of 2')).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: "Pilot's Handbook of Aeronautical Knowledge (opens in a new tab)",
      }),
    ).toBeInTheDocument();
    await userEvent.selectOptions(screen.getByRole('combobox', { name: 'Cost' }), '');
    expect(screen.getByText('Showing 2 resources')).toBeInTheDocument();
    expect(screen.getByText(/Link checked Sep 1, 2026/)).toBeInTheDocument();
  });

  it('runs a checklist in large type, with links to the next one', async () => {
    const { container } = renderRoute('/reference/checklists/before-landing');
    expect(
      await screen.findByRole('heading', { level: 1, name: 'Before landing' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /Seat and belts/ })).toBeInTheDocument();
    const nav = await screen.findByRole('navigation', { name: 'Other checklists' });
    expect(within(nav).getByRole('link', { name: /Before takeoff/ })).toHaveAttribute(
      'href',
      '/reference/checklists/before-takeoff',
    );
    expect(await seriousViolations(container)).toEqual([]);
  });

  it('lists checklists in flight order', async () => {
    renderRoute('/reference/checklists');
    const links = await screen.findAllByRole('link', { name: /Before/ });
    expect(links.map((l) => l.textContent)).toEqual(['Before takeoff', 'Before landing']);
  });
});
