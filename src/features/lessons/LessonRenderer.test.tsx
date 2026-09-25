import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { checklistFixture } from '@/test/fixtures';
import { renderWithProviders } from '@/test/render';
import type { LessonBlock } from '@shared/schemas/content';
import { LessonRenderer } from './LessonRenderer';

describe('LessonRenderer', () => {
  it('renders each block type', async () => {
    const blocks: LessonBlock[] = [
      { type: 'heading', id: 'intro', text: 'Intro', level: 2 },
      {
        type: 'markdown',
        markdown:
          'Some **bold** text with [a link](/learn) and a table:\n\n| A | B |\n| - | - |\n| 1 | 2 |',
      },
      { type: 'callout', calloutType: 'safety', markdown: 'Never do this in a real airplane.' },
      {
        type: 'video',
        provider: 'youtube',
        videoId: 'abc123XYZ',
        title: 'Traffic patterns',
        captions: true,
      },
      { type: 'checklist', slug: 'before-landing' },
    ];
    renderWithProviders(<LessonRenderer blocks={blocks} checklists={[checklistFixture]} />);
    expect(screen.getByRole('heading', { level: 2, name: 'Intro' })).toHaveAttribute('id', 'intro');
    expect(screen.getByText('bold').tagName).toBe('STRONG');
    expect(screen.getByRole('link', { name: 'a link' })).toHaveAttribute('href', '/learn');
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByRole('complementary', { name: 'Safety' })).toHaveTextContent(
      'Never do this',
    );
    expect(await screen.findByRole('checkbox', { name: /Seat and belts/ })).toBeInTheDocument();
  });

  it('loads YouTube only after a click', async () => {
    renderWithProviders(
      <LessonRenderer
        blocks={[
          {
            type: 'video',
            provider: 'youtube',
            videoId: 'abc123XYZ',
            title: 'Traffic patterns',
            captions: true,
          },
        ]}
      />,
    );
    expect(document.querySelector('iframe')).toBeNull();
    await userEvent.click(screen.getByRole('button', { name: /Play video: Traffic patterns/ }));
    const iframe = document.querySelector('iframe');
    expect(iframe?.src).toBe('https://www.youtube-nocookie.com/embed/abc123XYZ?autoplay=1&rel=0');
    expect(iframe).toHaveAttribute('title', 'Traffic patterns');
  });

  it('never renders raw HTML from content', () => {
    render(
      <LessonRenderer
        blocks={[
          {
            type: 'markdown',
            markdown: 'Hi <img src=x onerror="alert(1)"> <script>alert(1)</script>',
          },
        ]}
      />,
    );
    expect(document.querySelector('img')).toBeNull();
    expect(document.querySelector('script')).toBeNull();
  });

  it('skips images that are not in the asset bundle', () => {
    render(
      <LessonRenderer
        blocks={[
          {
            type: 'image',
            src: 'm1/missing.webp',
            alt: 'A missing image here',
            width: 10,
            height: 10,
          },
        ]}
      />,
    );
    expect(screen.queryByRole('img')).toBeNull();
  });

  it('handles unknown blocks and unbuilt widgets safely', () => {
    const blocks = [
      { type: 'hologram', data: 1 },
      { type: 'widget', name: 'nav-log', props: {} },
    ] as unknown as LessonBlock[];
    renderWithProviders(<LessonRenderer blocks={blocks} />);
    // Development build: visible warnings instead of crashes.
    expect(screen.getByText(/unknown block type “hologram”/)).toBeInTheDocument();
    expect(screen.getByText(/widget “nav-log” is not built yet/)).toBeInTheDocument();
  });

  it('renders a widget lazily', async () => {
    renderWithProviders(
      <LessonRenderer
        blocks={[{ type: 'widget', name: 'airspeed-indicator', props: { mode: 'explore' } }]}
      />,
    );
    const figure = await screen.findByRole('figure', {
      name: 'Interactive diagram: Airspeed indicator',
    });
    expect(
      await within(figure).findByRole('slider', { name: 'Airspeed in knots' }),
    ).toBeInTheDocument();
  });
});
