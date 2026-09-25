import type { QuizAnswer } from '@shared/quiz';

/**
 * Quiz answers kept for this browser session (Section 31.7). Signed-in answers are also
 * recorded on the server from Phase 8.
 */
export interface StoredAnswer {
  firstAnswer: QuizAnswer;
  correctFirstTry: boolean;
  lastAnswer: QuizAnswer;
  correct: boolean;
}

const KEY = 'ltf-quiz-answers';

function readAll(): Record<string, StoredAnswer> {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) ?? '{}') as Record<string, StoredAnswer>;
  } catch {
    return {};
  }
}

export function getStoredAnswer(questionId: string): StoredAnswer | undefined {
  return readAll()[questionId];
}

export function storeAnswer(
  questionId: string,
  answer: QuizAnswer,
  correct: boolean,
): StoredAnswer {
  const all = readAll();
  const previous = all[questionId];
  const stored: StoredAnswer = previous
    ? { ...previous, lastAnswer: answer, correct }
    : { firstAnswer: answer, correctFirstTry: correct, lastAnswer: answer, correct };
  all[questionId] = stored;
  try {
    sessionStorage.setItem(KEY, JSON.stringify(all));
  } catch {
    // Storage may be unavailable; answers still work for this page view.
  }
  return stored;
}
