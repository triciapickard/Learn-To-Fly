import { describe, expect, it } from 'vitest';
import { plural } from './format';

describe('plural', () => {
  it('uses the singular only for one', () => {
    expect(plural(1, 'challenge')).toBe('1 challenge');
    expect(plural(0, 'challenge')).toBe('0 challenges');
    expect(plural(2, 'attempt')).toBe('2 attempts');
    expect(plural(2, 'person', 'people')).toBe('2 people');
  });
});
