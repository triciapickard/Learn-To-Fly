import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it } from 'vitest';
import { APP_VERSION } from '@/lib/release';
import { BetaBanner } from './BetaBanner';

function renderBanner() {
  return render(
    <MemoryRouter>
      <BetaBanner />
    </MemoryRouter>,
  );
}

describe('BetaBanner', () => {
  beforeEach(() => localStorage.clear());

  it('names the live modules and links to the roadmap and the issue tracker', () => {
    renderBanner();
    const notice = screen.getByRole('region', { name: 'Beta notice' });
    expect(notice).toHaveTextContent(/Early beta v0\.0/);
    expect(notice).toHaveTextContent('Modules 0 and 1 are live');
    expect(screen.getByRole('link', { name: 'What is coming' })).toHaveAttribute(
      'href',
      '/roadmap',
    );
    expect(screen.getByRole('link', { name: /Report a problem/ })).toHaveAttribute(
      'href',
      'https://github.com/triciapickard/Learn-To-Fly/issues',
    );
  });

  it('dismisses for this version only', async () => {
    const user = userEvent.setup();
    renderBanner();
    await user.click(screen.getByRole('button', { name: 'Dismiss the beta notice' }));
    expect(screen.queryByRole('region', { name: 'Beta notice' })).not.toBeInTheDocument();
    expect(localStorage.getItem('ltf-beta-notice-dismissed')).toBe(APP_VERSION);

    localStorage.setItem('ltf-beta-notice-dismissed', '9.9.9');
    renderBanner();
    expect(screen.getByRole('region', { name: 'Beta notice' })).toBeInTheDocument();
  });
});
