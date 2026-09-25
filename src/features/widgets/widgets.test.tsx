import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { checklistFixture } from '@/test/fixtures';
import { TestProviders } from '@/test/render';
import AirspeedIndicator from './airspeed-indicator/AirspeedIndicator';
import { ChecklistRunner } from './checklist-runner/ChecklistRunner';

describe('W3 Airspeed indicator', () => {
  it('is operable with the keyboard and describes the band', async () => {
    render(
      <TestProviders>
        <AirspeedIndicator props={{}} />
      </TestProviders>,
    );
    const slider = await screen.findByRole('slider', { name: 'Airspeed in knots' });
    // A native range input: browsers step it with the arrow keys (checked in Chromium);
    // jsdom does not implement that, so set the value directly here.
    fireEvent.change(slider, { target: { value: '74' } });
    await waitFor(() =>
      expect(slider).toHaveAttribute(
        'aria-valuetext',
        '74 knots, green arc, Vy, best rate of climb',
      ),
    );
    expect(
      screen.getByRole('img', { name: /Round airspeed indicator showing 74 knots/ }),
    ).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Increase airspeed by 1 knot' }));
    expect(slider).toHaveAttribute('aria-valuetext', '75 knots, green arc');
  });

  it('announces changes in a live region', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    render(
      <TestProviders>
        <AirspeedIndicator props={{}} />
      </TestProviders>,
    );
    const slider = await screen.findByRole('slider', { name: 'Airspeed in knots' });
    fireEvent.change(slider, { target: { value: '170' } });
    act(() => vi.advanceTimersByTime(600));
    expect(screen.getByText('170 knots, at or above the red line')).toBeInTheDocument();
    vi.useRealTimers();
  });

  it('runs the quiz mode and reports answers', async () => {
    const onQuizAnswer = vi.fn();
    render(
      <TestProviders>
        <AirspeedIndicator props={{ mode: 'quiz' }} onQuizAnswer={onQuizAnswer} />
      </TestProviders>,
    );
    expect(await screen.findByText('Set the airspeed to best glide speed.')).toBeInTheDocument();
    fireEvent.change(screen.getByRole('slider', { name: 'Airspeed in knots' }), {
      target: { value: '69' },
    });
    await userEvent.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByText(/Best glide \(Vg\) is 68 KIAS/)).toBeInTheDocument();
    expect(onQuizAnswer).toHaveBeenCalledWith({
      questionId: 'w3-best-glide',
      correct: true,
      answer: '69 KIAS',
    });
  });
});

describe('W16 Checklist runner', () => {
  it('ticks with Space, unticks with Backspace and moves with arrows', async () => {
    const onChange = vi.fn();
    render(<ChecklistRunner checklist={checklistFixture} onChange={onChange} />);
    const first = screen.getByRole('checkbox', { name: /Seat and belts/ });
    expect(first).toHaveAttribute('aria-current', 'step');
    first.focus();
    await userEvent.keyboard(' ');
    expect(first).toBeChecked();
    expect(onChange).toHaveBeenLastCalledWith(
      expect.anything(),
      expect.objectContaining({ itemId: 'belts' }),
    );
    await userEvent.keyboard('{ArrowDown}');
    const second = screen.getByRole('checkbox', { name: /Fuel selector/ });
    expect(second).toHaveFocus();
    expect(second).toHaveAttribute('aria-current', 'step');
    await userEvent.keyboard('{Enter}');
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuetext', '2 of 3 items');
    await userEvent.keyboard('{Backspace}');
    expect(second).not.toBeChecked();
  });

  it('announces completion', async () => {
    render(<ChecklistRunner checklist={checklistFixture} />);
    for (const name of [/Seat and belts/, /Fuel selector/, /Mixture/]) {
      await userEvent.click(screen.getByRole('checkbox', { name }));
    }
    expect(screen.getByText('Checklist complete')).toBeInTheDocument();
    expect(screen.getByText('Before landing checklist complete.')).toBeInTheDocument();
  });

  it('explains the checklist mode', () => {
    render(<ChecklistRunner checklist={checklistFixture} />);
    expect(screen.getByText(/Do-verify: do the flow from memory/)).toBeInTheDocument();
  });
});
