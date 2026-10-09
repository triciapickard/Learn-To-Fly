import { describe, expect, it } from 'vitest';
import { cn } from './cn';

describe('cn', () => {
  it('merges conflicting token colours and keeps sizes', () => {
    expect(cn('text-sm text-ink', 'text-ink-2')).toBe('text-sm text-ink-2');
    expect(cn('bg-surface', undefined, 'bg-surface-sunken')).toBe('bg-surface-sunken');
  });
});
