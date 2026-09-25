import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ThemeToggle } from '@/components/ThemeToggle';
import { renderWithProviders } from '@/test/render';
import { readStoredPreference, resolveTheme, THEME_STORAGE_KEY } from './theme';

describe('theme helpers', () => {
  it('resolves system preference', () => {
    expect(resolveTheme('system', true)).toBe('dark');
    expect(resolveTheme('system', false)).toBe('light');
    expect(resolveTheme('dark', false)).toBe('dark');
    expect(resolveTheme('light', true)).toBe('light');
  });

  it('ignores invalid stored values', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'purple');
    expect(readStoredPreference()).toBe('system');
  });
});

describe('ThemeToggle', () => {
  it('switches the theme and remembers it', async () => {
    renderWithProviders(<ThemeToggle />);
    await userEvent.click(screen.getByRole('button', { name: 'Theme: System' }));
    await userEvent.click(screen.getByRole('radio', { name: 'Dark' }));
    await waitFor(() => expect(document.documentElement.dataset.theme).toBe('dark'));
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
    expect(screen.getByRole('button', { name: 'Theme: Dark' })).toBeInTheDocument();
  });
});
