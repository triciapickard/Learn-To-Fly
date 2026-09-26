import { useEffect, useMemo, useSyncExternalStore, type ReactNode } from 'react';
import {
  applyTheme,
  getPreference,
  resolveTheme,
  setStoredPreference,
  subscribePreference,
  subscribeSystemTheme,
  systemPrefersDark,
  type ThemePreference,
} from './theme';
import { ThemeContext } from './ThemeContext';

const noSubscribe = () => () => {};

/**
 * Theme state (Section 31.5). The inline script in index.html applies the stored theme
 * before first paint; this provider keeps it in sync afterwards. While hydrating a
 * prerendered page it reports the server's values ('system', light) so the markup matches,
 * and it doesn't touch the page's theme until the real values are in.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const preference = useSyncExternalStore<ThemePreference>(
    subscribePreference,
    getPreference,
    () => 'system',
  );
  const prefersDark = useSyncExternalStore(subscribeSystemTheme, systemPrefersDark, () => false);
  const hydrated = useSyncExternalStore(
    noSubscribe,
    () => true,
    () => false,
  );
  const resolvedTheme = resolveTheme(preference, prefersDark);

  useEffect(() => {
    if (hydrated) applyTheme(resolvedTheme);
  }, [hydrated, resolvedTheme]);

  const value = useMemo(
    () => ({ preference, resolvedTheme, setPreference: setStoredPreference }),
    [preference, resolvedTheme],
  );

  return <ThemeContext value={value}>{children}</ThemeContext>;
}
