import { describe, expect, it } from 'vitest';
import { passwordStrength } from './passwordStrength';

describe('passwordStrength', () => {
  it.each([
    ['', 0, ''],
    ['short', 0, 'Too short'],
    ['aaaaaaaaaaaa', 1, 'Weak'],
    ['abcdefghijkl', 1, 'Weak'],
    ['abcdefghijklmnop', 2, 'Fair'],
    ['correct horse battery staple', 3, 'Good'],
    ['Correct Horse Battery 42!', 4, 'Strong'],
  ])('%s → %s', (password, score, label) => {
    expect(passwordStrength(password)).toEqual({ score, label });
  });
});
