import { act, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { renderWithProviders, TestProviders } from '@/test/render';
import { Badge } from './Badge';
import { Breadcrumbs } from './Breadcrumbs';
import { Callout } from './Callout';
import { DifficultyDots, TierBadge, TypeIcon } from './ChallengeMeta';
import { KeyNumbers } from './KeyNumbers';
import { ProgressBar, ProgressRing } from './Progress';
import { LoadingRegion, Skeleton } from './Skeleton';
import { EmptyState, ErrorState } from './States';
import { formatElapsed, Stopwatch } from './Stopwatch';
import { Table } from './Table';
import { useToast } from './Toast';

describe('Badge and Callout', () => {
  it('renders badge text', () => {
    render(<Badge variant="complete">Complete</Badge>);
    expect(screen.getByText('Complete')).toHaveClass('text-success');
  });

  it('labels a callout by its type', () => {
    render(
      <Callout type="sim">
        <p>Auto-rudder keeps the ball centred.</p>
      </Callout>,
    );
    expect(screen.getByRole('complementary', { name: 'Sim vs reality' })).toHaveTextContent(
      'Auto-rudder',
    );
  });
});

describe('Progress', () => {
  it('exposes progressbar semantics', () => {
    render(<ProgressBar value={3} max={5} label="Module 2" valueText="3 of 5 lessons" showValue />);
    const bar = screen.getByRole('progressbar', { name: 'Module 2' });
    expect(bar).toHaveAttribute('aria-valuenow', '3');
    expect(bar).toHaveAttribute('aria-valuemax', '5');
    expect(bar).toHaveAttribute('aria-valuetext', '3 of 5 lessons');
    expect(screen.getByText('3 of 5 lessons')).toBeInTheDocument();
  });

  it('clamps the ring and labels it', () => {
    render(<ProgressRing value={150} label="Course" />);
    expect(screen.getByRole('progressbar', { name: 'Course' })).toHaveAttribute(
      'aria-valuetext',
      '100%',
    );
  });
});

describe('States', () => {
  it('announces loading once', () => {
    render(
      <LoadingRegion label="Loading lessons">
        <Skeleton className="h-4" />
      </LoadingRegion>,
    );
    expect(screen.getByRole('status')).toHaveTextContent('Loading lessons…');
  });

  it('shows empty state action', () => {
    render(<EmptyState title="Nothing here" action={<button type="button">Clear</button>} />);
    expect(screen.getByText('Nothing here')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Clear' })).toBeInTheDocument();
  });

  it('shows an error alert with retry', async () => {
    const onRetry = vi.fn();
    render(<ErrorState onRetry={onRetry} />);
    expect(screen.getByRole('alert')).toHaveTextContent('Something went wrong');
    await userEvent.click(screen.getByRole('button', { name: 'Try again' }));
    expect(onRetry).toHaveBeenCalledOnce();
  });
});

describe('Toast', () => {
  function Trigger() {
    const { toast } = useToast();
    return (
      <button type="button" onClick={() => toast('Saved!', 'success')}>
        Save
      </button>
    );
  }

  it('shows messages in a polite status region and can be dismissed', async () => {
    render(
      <TestProviders>
        <Trigger />
      </TestProviders>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Save' }));
    const region = screen.getByRole('status');
    expect(region).toHaveAttribute('aria-live', 'polite');
    expect(region).toHaveTextContent('Saved!');
    await userEvent.click(screen.getByRole('button', { name: 'Dismiss notification' }));
    expect(region).not.toHaveTextContent('Saved!');
  });
});

describe('Table', () => {
  it('renders a captioned table with labelled cells for stacking', () => {
    render(
      <Table
        caption="Attempts"
        rows={[{ id: 'a', tier: 'Gold', pct: 96 }]}
        rowKey={(r) => r.id}
        columns={[
          { key: 'tier', header: 'Tier', cell: (r) => r.tier },
          { key: 'pct', header: 'Score', numeric: true, cell: (r) => `${r.pct}%` },
        ]}
      />,
    );
    const table = screen.getByRole('table', { name: 'Attempts' });
    expect(within(table).getByRole('columnheader', { name: 'Score' })).toBeInTheDocument();
    expect(within(table).getByRole('cell', { name: '96%' })).toHaveAttribute('data-label', 'Score');
  });
});

describe('Breadcrumbs', () => {
  it('marks the current page', () => {
    renderWithProviders(
      <Breadcrumbs items={[{ label: 'Learn', to: '/learn' }, { label: 'Module 4' }]} />,
    );
    const nav = screen.getByRole('navigation', { name: 'Breadcrumb' });
    expect(within(nav).getByRole('link', { name: 'Learn' })).toHaveAttribute('href', '/learn');
    expect(within(nav).getByText('Module 4')).toHaveAttribute('aria-current', 'page');
  });
});

describe('Challenge metadata', () => {
  it('describes difficulty in text', () => {
    render(<DifficultyDots value={3} />);
    expect(screen.getByRole('img', { name: 'Difficulty 3 of 5' })).toBeInTheDocument();
  });

  it('shows tier names, not just colour', () => {
    render(
      <>
        <TierBadge tier="gold" />
        <TierBadge tier="none" />
      </>,
    );
    expect(screen.getByText('Gold')).toBeInTheDocument();
    expect(screen.getByText('Not passed')).toBeInTheDocument();
  });

  it('labels type icons', () => {
    render(<TypeIcon type="landing" showLabel={false} />);
    expect(screen.getByText('Landing')).toHaveClass('sr-only');
  });
});

describe('Stopwatch', () => {
  it('formats elapsed time', () => {
    expect(formatElapsed(0)).toBe('00:00');
    expect(formatElapsed(65_000)).toBe('01:05');
    expect(formatElapsed(3_725_000)).toBe('1:02:05');
  });

  it('starts, pauses and resets', () => {
    vi.useFakeTimers();
    const onStart = vi.fn();
    render(<Stopwatch onStart={onStart} />);
    act(() => screen.getByRole('button', { name: 'Start' }).click());
    expect(onStart).toHaveBeenCalledOnce();
    act(() => vi.advanceTimersByTime(3100));
    expect(screen.getByRole('timer')).toHaveTextContent('00:03');
    act(() => screen.getByRole('button', { name: 'Pause' }).click());
    act(() => vi.advanceTimersByTime(5000));
    expect(screen.getByRole('timer')).toHaveTextContent('00:03');
    act(() => screen.getByRole('button', { name: 'Reset' }).click());
    expect(screen.getByRole('timer')).toHaveTextContent('00:00');
    vi.useRealTimers();
  });
});

describe('KeyNumbers', () => {
  it('lists labelled values', () => {
    render(<KeyNumbers items={[{ label: 'Vy', value: '74', unit: 'KIAS' }]} />);
    const region = screen.getByRole('region', { name: 'Key numbers' });
    expect(within(region).getByText('Vy')).toBeInTheDocument();
    expect(within(region).getByText('74')).toBeInTheDocument();
  });
});
