import type { QuizBlock } from './schemas/content.js';

/**
 * Checks a quiz answer (Section 17). Shared so the client gives instant feedback and the
 * server can record answers authoritatively (step 8.1).
 *   single → "b"; multi → ["a","c"]; numeric → 10.5; order → ["a","b","c"]
 */
export type QuizAnswer = string | string[] | number;

export function checkQuizAnswer(quiz: QuizBlock, answer: QuizAnswer): boolean {
  switch (quiz.quizType) {
    case 'single':
      return typeof answer === 'string' && quiz.correct[0] === answer;
    case 'multi': {
      if (!Array.isArray(answer)) return false;
      const given = [...new Set(answer)].sort();
      const expected = [...quiz.correct].sort();
      return given.length === expected.length && given.every((id, i) => id === expected[i]);
    }
    case 'numeric': {
      const value = typeof answer === 'number' ? answer : Number(answer);
      return Number.isFinite(value) && Math.abs(value - quiz.answer) <= quiz.tolerance + 1e-9;
    }
    case 'order':
      return (
        Array.isArray(answer) &&
        answer.length === quiz.options.length &&
        quiz.options.every((option, i) => option.id === answer[i])
      );
  }
}

/** Deterministic shuffle (seeded by the question id) that never returns the correct order. */
export function shuffledOrder(ids: string[], seed: string): string[] {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  const out = [...ids];
  for (let i = out.length - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    const j = Math.abs(h) % (i + 1);
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  if (out.length > 1 && out.every((id, i) => id === ids[i])) out.push(out.shift()!);
  return out;
}
