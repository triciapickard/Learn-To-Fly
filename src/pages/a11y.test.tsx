import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { seriousViolations } from '@/test/axe';
import { renderRoute } from '@/test/render';

describe('accessibility (axe)', () => {
  it.each(['/dev/components', '/', '/about', '/privacy', '/roadmap', '/no-such-page'])(
    '%s has no serious violations',
    async (url) => {
      const { container } = renderRoute(url);
      await screen.findByRole('heading', { level: 1 });
      expect(await seriousViolations(container)).toEqual([]);
    },
  );
});
