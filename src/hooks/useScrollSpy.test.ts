import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { activeSectionId, useScrollSpy } from './useScrollSpy';

const ids = ['one', 'two', 'three'];
let tops: Record<string, number>;

function setTops(next: Record<string, number>) {
  tops = next;
}

beforeEach(() => {
  setTops({ one: 96, two: 600, three: 1400 });
  for (const id of ids) {
    const el = document.createElement('h2');
    el.id = id;
    el.getBoundingClientRect = () => ({ top: tops[id] }) as DOMRect;
    document.body.append(el);
  }
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    configurable: true,
    value: 5000,
  });
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 800 });
});

afterEach(() => {
  document.body.innerHTML = '';
});

describe('activeSectionId', () => {
  it('picks the last heading at or above the offset line', () => {
    setTops({ one: -500, two: 96, three: 600 });
    expect(activeSectionId(ids, 96)).toBe('two');
  });

  it('tolerates sub-pixel landing just below the scroll margin', () => {
    setTops({ one: -500, two: 97.4, three: 600 });
    expect(activeSectionId(ids, 96)).toBe('two');
  });

  it('falls back to the first heading before any reaches the line', () => {
    setTops({ one: 300, two: 600, three: 1400 });
    expect(activeSectionId(ids, 96)).toBe('one');
  });

  it('picks the first heading at the top of the page', () => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 });
    setTops({ one: 0, two: 0, three: 0 });
    expect(activeSectionId(ids, 96)).toBe('one');
  });

  it('picks the last visible heading at the bottom of the page', () => {
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      configurable: true,
      value: window.innerHeight + window.scrollY,
    });
    setTops({ one: -900, two: 40, three: 400 });
    expect(activeSectionId(ids, 96)).toBe('three');
  });
});

describe('useScrollSpy', () => {
  it('updates when a heading already on screen is scrolled to the line', async () => {
    // The old IntersectionObserver version missed this: no heading crossed its band.
    setTops({ one: -200, two: 250, three: 1400 });
    const { result } = renderHook(() => useScrollSpy(ids));
    expect(result.current).toBe('one');
    setTops({ one: -354, two: 96, three: 1246 });
    await act(async () => {
      window.dispatchEvent(new Event('scroll'));
      await new Promise((resolve) => requestAnimationFrame(() => resolve(undefined)));
    });
    expect(result.current).toBe('two');
  });
});
