import { describe, expect, it } from 'vitest';
import { checkQuizAnswer, shuffledOrder } from './quiz.js';
import type { QuizBlock } from './schemas/content.js';

const base = { type: 'quiz' as const, prompt: 'Q', explanation: 'E' };
const options = [
  { id: 'a', text: 'A' },
  { id: 'b', text: 'B' },
  { id: 'c', text: 'C' },
];

describe('checkQuizAnswer', () => {
  it('single', () => {
    const q: QuizBlock = { ...base, id: 's', quizType: 'single', options, correct: ['b'] };
    expect(checkQuizAnswer(q, 'b')).toBe(true);
    expect(checkQuizAnswer(q, 'a')).toBe(false);
    expect(checkQuizAnswer(q, ['b'])).toBe(false);
  });

  it('multi needs exactly the correct set, in any order', () => {
    const q: QuizBlock = { ...base, id: 'm', quizType: 'multi', options, correct: ['a', 'c'] };
    expect(checkQuizAnswer(q, ['c', 'a'])).toBe(true);
    expect(checkQuizAnswer(q, ['a'])).toBe(false);
    expect(checkQuizAnswer(q, ['a', 'b', 'c'])).toBe(false);
  });

  it('numeric within tolerance', () => {
    const q: QuizBlock = { ...base, id: 'n', quizType: 'numeric', answer: 10, tolerance: 1 };
    expect(checkQuizAnswer(q, 11)).toBe(true);
    expect(checkQuizAnswer(q, 8.9)).toBe(false);
    expect(checkQuizAnswer(q, Number.NaN)).toBe(false);
  });

  it('order must match exactly', () => {
    const q: QuizBlock = { ...base, id: 'o', quizType: 'order', options };
    expect(checkQuizAnswer(q, ['a', 'b', 'c'])).toBe(true);
    expect(checkQuizAnswer(q, ['b', 'a', 'c'])).toBe(false);
  });
});

describe('shuffledOrder', () => {
  it('is deterministic, a permutation, and never already correct', () => {
    const ids = ['a', 'b', 'c', 'd'];
    for (const seed of ['q1', 'q2', 'go-around', 'x']) {
      const out = shuffledOrder(ids, seed);
      expect(out).toEqual(shuffledOrder(ids, seed));
      expect([...out].sort()).toEqual(ids);
      expect(out).not.toEqual(ids);
    }
  });
});
