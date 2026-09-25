import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import type { QuizBlock as QuizData } from '@shared/schemas/content';
import { QuizBlock } from './QuizBlock';

const options = [
  { id: 'a', text: 'Full power' },
  { id: 'b', text: 'Flaps 20' },
  { id: 'c', text: 'Climb at 60 KIAS' },
];
const base = { type: 'quiz' as const, explanation: 'Because physics.' };

describe('QuizBlock', () => {
  it('gives feedback with the explanation and allows retries (single)', async () => {
    const onAnswer = vi.fn();
    const quiz: QuizData = {
      ...base,
      id: 'q-single',
      quizType: 'single',
      prompt: 'What is Vy?',
      options: [
        { id: 'a', text: '62 KIAS' },
        { id: 'b', text: '74 KIAS' },
      ],
      correct: ['b'],
    };
    render(<QuizBlock quiz={quiz} onAnswer={onAnswer} />);
    const check = screen.getByRole('button', { name: 'Check answer' });
    expect(check).toBeDisabled();
    await userEvent.click(screen.getByRole('radio', { name: '62 KIAS' }));
    await userEvent.click(check);
    expect(screen.getByText('Not quite.')).toBeInTheDocument();
    expect(screen.getByText('Because physics.')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('radio', { name: '74 KIAS' }));
    await userEvent.click(check);
    expect(screen.getByText('Correct!')).toBeInTheDocument();
    expect(onAnswer).toHaveBeenNthCalledWith(1, {
      questionId: 'q-single',
      answer: 'a',
      correct: false,
    });
    expect(onAnswer).toHaveBeenNthCalledWith(2, {
      questionId: 'q-single',
      answer: 'b',
      correct: true,
    });
  });

  it('is operable by keyboard and labelled by its prompt', async () => {
    const quiz: QuizData = {
      ...base,
      id: 'q-kb',
      quizType: 'single',
      prompt: 'Pick B',
      options: [
        { id: 'a', text: 'A' },
        { id: 'b', text: 'B' },
      ],
      correct: ['b'],
    };
    render(<QuizBlock quiz={quiz} />);
    expect(screen.getByRole('group', { name: 'Pick B' })).toBeInTheDocument();
    await userEvent.tab();
    await userEvent.keyboard('{ArrowDown}');
    expect(screen.getByRole('radio', { name: 'B' })).toBeChecked();
  });

  it('checks multi-select answers', async () => {
    const quiz: QuizData = {
      ...base,
      id: 'q-multi',
      quizType: 'multi',
      prompt: 'Left-turning tendencies?',
      options,
      correct: ['a', 'c'],
    };
    render(<QuizBlock quiz={quiz} />);
    await userEvent.click(screen.getByRole('checkbox', { name: 'Full power' }));
    await userEvent.click(screen.getByRole('button', { name: 'Check answer' }));
    expect(screen.getByText('Not quite.')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('checkbox', { name: 'Climb at 60 KIAS' }));
    await userEvent.click(screen.getByRole('button', { name: 'Check answer' }));
    expect(screen.getByText('Correct!')).toBeInTheDocument();
  });

  it('checks numeric answers within the tolerance', async () => {
    const quiz: QuizData = {
      ...base,
      id: 'q-num',
      quizType: 'numeric',
      prompt: 'Crosswind?',
      answer: 10,
      tolerance: 1,
      unit: 'kt',
    };
    render(<QuizBlock quiz={quiz} />);
    const input = screen.getByLabelText('Your answer in kt');
    await userEvent.type(input, '12');
    await userEvent.click(screen.getByRole('button', { name: 'Check answer' }));
    expect(screen.getByText('Not quite.')).toBeInTheDocument();
    await userEvent.clear(input);
    await userEvent.type(input, '10.5');
    await userEvent.click(screen.getByRole('button', { name: 'Check answer' }));
    expect(screen.getByText('Correct!')).toBeInTheDocument();
  });

  it('reorders steps with buttons', async () => {
    const quiz: QuizData = {
      ...base,
      id: 'q-order',
      quizType: 'order',
      prompt: 'Order the go-around',
      options,
    };
    render(<QuizBlock quiz={quiz} />);
    const current = () =>
      screen.getAllByRole('listitem').map((li) => li.textContent?.replace(/^\d+\./, '').trim());
    expect(current()).not.toEqual(['Full power', 'Flaps 20', 'Climb at 60 KIAS']);
    // Bubble each option into place using only the move buttons.
    for (const [target, text] of ['Full power', 'Flaps 20', 'Climb at 60 KIAS'].entries()) {
      while (current().indexOf(text) > target) {
        await userEvent.click(screen.getByRole('button', { name: `Move "${text}" up` }));
      }
    }
    await userEvent.click(screen.getByRole('button', { name: 'Check answer' }));
    expect(screen.getByText('Correct!')).toBeInTheDocument();
  });

  it('remembers answers for this session', async () => {
    const quiz: QuizData = {
      ...base,
      id: 'q-memory',
      quizType: 'single',
      prompt: 'Q',
      options: [
        { id: 'a', text: 'A' },
        { id: 'b', text: 'B' },
      ],
      correct: ['a'],
    };
    const { unmount } = render(<QuizBlock quiz={quiz} />);
    await userEvent.click(screen.getByRole('radio', { name: 'A' }));
    await userEvent.click(screen.getByRole('button', { name: 'Check answer' }));
    unmount();
    render(<QuizBlock quiz={quiz} />);
    expect(screen.getByRole('radio', { name: 'A' })).toBeChecked();
    expect(screen.getByText('Correct!')).toBeInTheDocument();
    expect(
      JSON.parse(sessionStorage.getItem('ltf-quiz-answers') ?? '{}')['q-memory'],
    ).toMatchObject({ correctFirstTry: true });
  });
});
