import { PASSWORD_MIN } from '@shared/schemas/auth';

export interface Strength {
  score: 0 | 1 | 2 | 3 | 4;
  label: string;
}

/**
 * A simple length + variety heuristic (step 4.12 — no large library). Length matters
 * most; passphrases of several words score well.
 */
export function passwordStrength(password: string): Strength {
  if (password.length === 0) return { score: 0, label: '' };
  if (password.length < PASSWORD_MIN) return { score: 0, label: 'Too short' };
  const classes = [/[a-z]/, /[A-Z]/, /\d/, /[^A-Za-z0-9]/].filter((re) => re.test(password)).length;
  const unique = new Set(password).size;
  let score = 1;
  if (password.length >= 16) score++;
  if (password.length >= 20) score++;
  if (classes >= 3) score++;
  if (unique < 6) score = 1;
  const clamped = Math.min(4, score) as Strength['score'];
  return { score: clamped, label: ['Too short', 'Weak', 'Fair', 'Good', 'Strong'][clamped]! };
}
