import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { seriousViolations } from '@/test/axe';
import { aircraftFixture, glossaryFixture } from '@/test/fixtures';
import { renderRoute } from '@/test/render';
import { buildReferenceIndex, commonLookups, searchReference } from './search';
import { arcsModel, kiasText } from './speeds';

describe('reference search index (step 10.1 redesign)', () => {
  const index = buildReferenceIndex({ aircraft: aircraftFixture, terms: glossaryFixture });

  it('indexes speeds and terms with short names and readouts', () => {
    const vy = index.find((e) => e.id === 'speed:vy')!;
    expect(vy.title).toBe('Vy');
    expect(vy.readout).toBe('74');
    expect(vy.to).toBe('/reference/speeds');
    expect(index.find((e) => e.id === 'speed:approachFlaps30')!.readout).toBe('60–70');
    expect(index.find((e) => e.id === 'term:ctaf')!.to).toBe('/reference/glossary#ctaf');
  });

  it('ranks name and alias matches before body matches and caps the list', () => {
    const ids = (q: string, limit?: number) => searchReference(index, q, limit).map((e) => e.id);
    expect(ids('')).toEqual([]);
    // "Vy" is a speed name and a glossary term; both are name matches, speeds first.
    expect(ids('vy')).toEqual(['speed:vy', 'term:vy']);
    // "altitude" is only in glossary definitions.
    expect(ids('altitude')).toEqual(['term:vy', 'term:vx']);
    expect(ids('common traffic')).toEqual(['term:ctaf']);
    expect(ids('v', 3)).toHaveLength(3);
    expect(ids('zzz')).toEqual([]);
  });

  it('lists the common lookups that exist in the data, in a fixed order', () => {
    expect(commonLookups(index).map((e) => e.id)).toEqual(['speed:vy', 'term:ctaf']);
  });
});

describe('airspeed arcs model', () => {
  it('scales the arcs and alternates flag rows', () => {
    const model = arcsModel(aircraftFixture);
    expect(model.min).toBe(30);
    expect(model.max).toBe(170);
    expect(model.segments.map((s) => [s.id, s.from, s.to])).toEqual([
      ['white', 40, 85],
      ['green', 48, 129],
      ['yellow', 129, 163],
    ]);
    expect(model.redline.at).toBeCloseTo(133 / 140);
    expect(model.flags.map((f) => f.name)).toEqual([
      'Vso',
      'Vs1',
      'Vr',
      'Vx',
      'Vg',
      'Vy',
      'Vfe (10°–30°)',
      'Vno',
      'Vne',
    ]);
    expect(model.flags.map((f) => f.row)).toEqual([0, 1, 0, 1, 0, 1, 0, 1, 0]);
    expect(model.flags.find((f) => f.key === 'vne')!.tone).toBe('limit');
    expect(model.flags.find((f) => f.key === 'vy')!.tone).toBe('target');
    expect(model.ticks[0]).toEqual({ kias: 40, at: 10 / 140 });
    expect(kiasText({ label: 'x', meaning: 'y', min: 60, max: 70 })).toBe('60–70');
  });
});

describe('reference hub page', () => {
  it('shows the search, the arcs and the speeds section with no serious violations', async () => {
    const { container } = renderRoute('/reference');
    expect(
      await screen.findByRole('heading', { level: 1, name: 'What do you need to know?' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /white 40 to 85, green 48 to 129, yellow 129 to 163/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('tab', { name: /V-speeds and limits/, selected: true }),
    ).toBeInTheDocument();
    expect(screen.getByRole('table', { name: 'Power settings by phase' })).toBeInTheDocument();
    const lookups = await screen.findByRole('navigation', { name: 'Common lookups' });
    expect(within(lookups).getByRole('link', { name: 'Vy 74' })).toHaveAttribute(
      'href',
      '/reference/speeds',
    );
    expect(await seriousViolations(container)).toEqual([]);
  });

  it('searches every reference type and opens the first result on Enter', async () => {
    const { router } = renderRoute('/reference');
    const box = await screen.findByRole('searchbox', { name: 'Search the reference' });
    await screen.findByRole('navigation', { name: 'Common lookups' });

    await userEvent.type(box, 'traffic');
    expect(screen.getByText('1 result for “traffic”')).toBeInTheDocument();
    const results = screen.getByRole('list', { name: 'Search results' });
    expect(within(results).getByRole('link', { name: /CTAF/ })).toHaveAttribute(
      'href',
      '/reference/glossary#ctaf',
    );
    expect(screen.queryByRole('navigation', { name: 'Common lookups' })).not.toBeInTheDocument();

    await userEvent.clear(box);
    await userEvent.type(box, 'before');
    expect(
      within(screen.getByRole('list', { name: 'Search results' })).getAllByRole('link'),
    ).toHaveLength(2);
    expect(screen.getByRole('link', { name: /Before takeoff/ })).toHaveAttribute(
      'href',
      '/reference/checklists/before-takeoff',
    );

    await userEvent.clear(box);
    await userEvent.type(box, 'qqq');
    expect(screen.getByText('Nothing matches “qqq”')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Clear search' }));
    expect(box).toHaveValue('');
    expect(box).toHaveFocus();

    await userEvent.type(box, 'livermore{Enter}');
    await waitFor(() => expect(router.state.location.pathname).toBe('/reference/airports/KLVK'));
  });

  it('walks results with the arrow keys and focuses the box with "/"', async () => {
    renderRoute('/reference');
    const box = await screen.findByRole('searchbox', { name: 'Search the reference' });
    await screen.findByRole('navigation', { name: 'Common lookups' });
    await userEvent.type(box, 'v');
    const links = within(screen.getByRole('list', { name: 'Search results' })).getAllByRole('link');
    await userEvent.keyboard('{ArrowDown}');
    expect(links[0]).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    expect(links[1]).toHaveFocus();
    await userEvent.keyboard('{ArrowUp}{ArrowUp}');
    expect(box).toHaveFocus();
    await userEvent.keyboard('{Escape}');
    expect(box).toHaveValue('');

    await userEvent.tab();
    expect(box).not.toHaveFocus();
    await userEvent.keyboard('/');
    expect(box).toHaveFocus();
    expect(box).toHaveValue('');
  });

  it('switches sections from the rail and keeps the choice in the URL', async () => {
    const { router } = renderRoute('/reference?section=airports');
    expect(
      await screen.findByRole('tab', { name: /Airports/, selected: true }),
    ).toBeInTheDocument();
    expect(await screen.findByRole('link', { name: 'KLVK' })).toHaveAttribute(
      'href',
      '/reference/airports/KLVK',
    );

    await userEvent.click(screen.getByRole('tab', { name: /Checklists/ }));
    expect(router.state.location.search).toBe('?section=checklists');
    const panel = await screen.findByRole('tabpanel');
    expect(within(panel).getByRole('link', { name: 'Before landing' })).toHaveAttribute(
      'href',
      '/reference/checklists/before-landing',
    );
    expect(within(panel).getAllByText('Do-verify')).toHaveLength(2);

    await userEvent.click(screen.getByRole('tab', { name: /Glossary/ }));
    const letters = await screen.findByRole('navigation', { name: 'Jump to letter' });
    expect(within(letters).getByRole('link', { name: 'V, 2 terms' })).toHaveAttribute(
      'href',
      '/reference/glossary#letter-V',
    );

    await userEvent.click(screen.getByRole('tab', { name: /Resources/ }));
    expect(await screen.findByRole('link', { name: 'Handbooks 1' })).toHaveAttribute(
      'href',
      '/reference/resources?type=handbook',
    );

    await userEvent.click(screen.getByRole('tab', { name: /V-speeds/ }));
    expect(router.state.location.search).toBe('');
  });
});
