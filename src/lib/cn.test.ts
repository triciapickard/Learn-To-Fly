import { describe, expect, it } from 'vitest';
import { cn } from './cn';

describe('cn', () => {
  it('merges conflicting token colours and keeps sizes', () => {
    expect(cn('text-sm text-text', 'text-muted')).toBe('text-sm text-muted');
    expect(cn('bg-surface', undefined, 'bg-surface-2')).toBe('bg-surface-2');
  });
});
