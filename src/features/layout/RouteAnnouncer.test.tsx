import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StrictMode } from 'react';
import { describe, expect, it } from 'vitest';
import { renderRoute } from '@/test/render';

describe('RouteAnnouncer', () => {
  it('does not move focus on first load, even in StrictMode', async () => {
    renderRoute('/', [], { wrapper: StrictMode });
    await screen.findByRole('heading', { level: 1 });
    expect(document.body).toHaveFocus();
  });

  it('focuses the new h1 and announces the title after navigation', async () => {
    renderRoute('/');
    await userEvent.click((await screen.findAllByRole('link', { name: 'See the curriculum' }))[0]!);
    const heading = await screen.findByRole('heading', { level: 1, name: 'Learn' });
    expect(heading).toHaveFocus();
    await waitFor(() => expect(screen.getByText('Learn · Learn-To-Fly')).toBeInTheDocument());
  });
});
