import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { renderRoute, renderWithProviders } from '@/test/render';
import { BETA_BANNER_STORAGE_KEY, BETA_BANNER_VERSION, BetaBanner } from './BetaBanner';

const region = () => screen.queryByRole('region', { name: 'Public beta notice' });

describe('BetaBanner', () => {
  it('names the beta and links to where problems are reported', () => {
    renderWithProviders(<BetaBanner />);
    expect(region()).toHaveTextContent('Learn to Fly is in public beta.');
    expect(screen.getByRole('link', { name: /Report a problem/ })).toHaveAttribute('href');
  });

  it('dismisses for this browser and stays dismissed on the next render', async () => {
    const first = renderWithProviders(<BetaBanner />);
    await userEvent.click(screen.getByRole('button', { name: 'Dismiss beta notice' }));
    expect(region()).not.toBeInTheDocument();
    expect(localStorage.getItem(BETA_BANNER_STORAGE_KEY)).toBe(BETA_BANNER_VERSION);

    first.unmount();
    renderWithProviders(<BetaBanner />);
    expect(region()).not.toBeInTheDocument();
  });

  it('comes back when the notice version changes', () => {
    localStorage.setItem(BETA_BANNER_STORAGE_KEY, 'an-older-version');
    renderWithProviders(<BetaBanner />);
    expect(region()).toBeInTheDocument();
  });

  it('shows on ordinary pages and in fly mode', async () => {
    const home = renderRoute('/');
    await screen.findByRole('heading', { level: 1 });
    expect(region()).toBeInTheDocument();
    home.unmount();

    renderRoute('/challenges/c4-3-full-stop-landing/fly');
    await screen.findByRole('heading', { level: 1 });
    expect(region()).toBeInTheDocument();
  });
});
