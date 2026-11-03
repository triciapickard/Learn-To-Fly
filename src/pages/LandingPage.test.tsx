import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { renderRoute } from '@/test/render';

describe('landing page', () => {
  it('loads the launch video from YouTube only after a click', async () => {
    const { container } = renderRoute('/');
    await screen.findByRole('heading', { level: 1 });
    expect(container.querySelector('iframe')).toBeNull();

    await userEvent.click(
      screen.getByRole('button', { name: /Play video: Learn to Fly launch video/ }),
    );
    expect(container.querySelector('iframe')?.src).toBe(
      'https://www.youtube-nocookie.com/embed/PoRC5bLH-YU?autoplay=1&rel=0',
    );
  });

  it('still shows the Module 0 lesson path', async () => {
    renderRoute('/');
    expect(await screen.findByRole('heading', { level: 2, name: /Getting started/ })).toBeVisible();
    expect(screen.getByLabelText('Module 0 lesson path')).toBeInTheDocument();
  });
});
