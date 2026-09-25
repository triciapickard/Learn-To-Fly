import { useEffect, useRef } from 'react';
import { useTheme } from '@/features/theme/ThemeContext';
import { useCsrf, useMe } from './api';

/**
 * Fetches the current user and a CSRF token on app start, and applies the signed-in
 * user's saved theme when they log in (Section 30.9, US-16).
 */
export function AuthBootstrap() {
  useCsrf();
  const { data } = useMe();
  const { setPreference } = useTheme();
  const appliedFor = useRef<string | null>(null);
  const user = data?.user;

  useEffect(() => {
    if (!user) {
      appliedFor.current = null;
      return;
    }
    if (appliedFor.current === user.id) return;
    appliedFor.current = user.id;
    setPreference(user.preferences.theme);
  }, [user, setPreference]);

  return null;
}
