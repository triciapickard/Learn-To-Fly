import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Button } from '@/components/Button';
import { seriousViolations } from '@/test/axe';
import { renderWithProviders } from '@/test/render';
import { ReportProblemDialog } from './ReportProblemDialog';

function setup(props: Partial<Parameters<typeof ReportProblemDialog>[0]> = {}) {
  return renderWithProviders(
    <ReportProblemDialog trigger={<Button>Report a problem</Button>} {...props} />,
    { route: '/learn/m2-first-flight/l2-3-straight-and-level' },
  );
}

afterEach(() => vi.restoreAllMocks());

describe('ReportProblemDialog', () => {
  it('opens a dialog with the kind, description and diagnostics', async () => {
    const { container } = setup();
    await userEvent.click(screen.getByRole('button', { name: 'Report a problem' }));
    const dialog = screen.getByRole('dialog', { name: 'Report a problem' });
    expect(screen.getByRole('radio', { name: 'Something is broken' })).toBeChecked();
    expect(screen.getByRole('textbox', { name: /What happened/ })).toBeRequired();
    await userEvent.click(screen.getByText('Technical details included with the report'));
    expect(dialog).toHaveTextContent('Page: /learn/m2-first-flight/l2-3-straight-and-level');
    expect(dialog).toHaveTextContent('Signed in: no');
    expect(await seriousViolations(container)).toEqual([]);
  });

  it('asks for a description before continuing', async () => {
    const open = vi.spyOn(window, 'open').mockImplementation(() => null);
    setup();
    await userEvent.click(screen.getByRole('button', { name: 'Report a problem' }));
    await userEvent.click(screen.getByRole('button', { name: 'Continue on GitHub' }));
    expect(screen.getByText('Please describe the problem first.')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /What happened/ })).toHaveAccessibleDescription(
      /Please describe the problem first/,
    );
    expect(open).not.toHaveBeenCalled();
  });

  it('opens the pre-filled GitHub issue form in a new tab and closes', async () => {
    const open = vi.spyOn(window, 'open').mockImplementation(() => null);
    setup();
    await userEvent.click(screen.getByRole('button', { name: 'Report a problem' }));
    await userEvent.click(screen.getByRole('radio', { name: 'A lesson or number is wrong' }));
    await userEvent.type(
      screen.getByRole('textbox', { name: /What happened/ }),
      'Vr is 55, not 65',
    );
    await userEvent.click(screen.getByRole('button', { name: 'Continue on GitHub' }));
    expect(open).toHaveBeenCalledTimes(1);
    const url = new URL(open.mock.calls[0]![0] as string);
    expect(url.pathname).toBe('/triciapickard/Learn-To-Fly/issues/new');
    expect(url.searchParams.get('template')).toBe('content_error.yml');
    expect(url.searchParams.get('title')).toBe('[Content] Vr is 55, not 65');
    expect(url.searchParams.get('where')).toBe('/learn/m2-first-flight/l2-3-straight-and-level');
    expect(url.searchParams.get('diagnostics')).toContain('Theme: light');
    expect(open.mock.calls[0]![1]).toBe('_blank');
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(screen.getByRole('status')).toHaveTextContent('GitHub opened in a new tab.');
  });

  it('copies the report as plain text', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    setup({ defaultKind: 'idea' });
    await userEvent.click(screen.getByRole('button', { name: 'Report a problem' }));
    await userEvent.type(
      screen.getByRole('textbox', { name: /What happened/ }),
      'Add a night module',
    );
    await userEvent.click(screen.getByRole('button', { name: 'Copy report' }));
    await waitFor(() => expect(writeText).toHaveBeenCalledTimes(1));
    expect(writeText.mock.calls[0]![0]).toMatch(/^\[Idea\] Add a night module\n/);
    expect(screen.getByRole('status')).toHaveTextContent('Report copied.');
  });

  it('carries the error message when opened from the error page', async () => {
    setup({ error: new TypeError('boom') });
    await userEvent.click(screen.getByRole('button', { name: 'Report a problem' }));
    await userEvent.click(screen.getByText('Technical details included with the report'));
    expect(screen.getByRole('dialog')).toHaveTextContent('Error: TypeError: boom');
  });
});
