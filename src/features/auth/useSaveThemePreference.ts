import type { ThemePreference } from '@/features/theme/theme';
import { useTheme } from '@/features/theme/ThemeContext';
import { useAuth, useUpdateMe } from './api';

/** Applies a theme now and, when signed in, saves it to the account (US-16). */
export function useSaveThemePreference() {
  const { setPreference } = useTheme();
  const { user } = useAuth();
  const updateMe = useUpdateMe();
  return (preference: ThemePreference) => {
    setPreference(preference);
    if (user && user.preferences.theme !== preference) {
      updateMe.mutate({ preferences: { theme: preference } });
    }
  };
}
