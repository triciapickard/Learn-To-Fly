import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { seriousViolations } from '@/test/axe';
import { checklistFixture } from '@/test/fixtures';
import { TestProviders } from '@/test/render';
import AirspeedIndicator from './airspeed-indicator/AirspeedIndicator';
import AngleOfAttack from './angle-of-attack/AngleOfAttack';
import { ChecklistRunner } from './checklist-runner/ChecklistRunner';
import ControlSurfaces from './control-surfaces/ControlSurfaces';
import G1000Pfd from './g1000-pfd/G1000Pfd';
import LoadFactor from './load-factor/LoadFactor';
import PitchPower from './pitch-power/PitchPower';
import TrafficPattern from './traffic-pattern/TrafficPattern';
import TurnCoordinator from './turn-coordinator/TurnCoordinator';
import WindTriangle from './wind-triangle/WindTriangle';

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

describe('W1 Control surfaces explorer', () => {
  it('moves surfaces with the buttons and says what moved', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const { container } = render(<ControlSurfaces props={{}} />);
    await userEvent.click(screen.getByRole('button', { name: 'Roll right' }));
    const text = 'Yoke right: right aileron up, left aileron down. The airplane rolls right.';
    expect(screen.getByRole('img', { name: new RegExp(text) })).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(400));
    expect(container.querySelector('[aria-live="polite"]')).toHaveTextContent(text);
    await userEvent.click(screen.getByRole('button', { name: /^Pitch up/ }));
    act(() => vi.advanceTimersByTime(400));
    expect(container.querySelector('[aria-live="polite"]')).toHaveTextContent(
      'Yoke back: elevator up. The tail goes down and the nose pitches up.',
    );
    await userEvent.click(screen.getByRole('button', { name: '30°' }));
    expect(screen.getByRole('button', { name: '30°' })).toHaveAttribute('aria-pressed', 'true');
    vi.useRealTimers();
  });

  it('explains a selected surface and shows the axes', async () => {
    render(<ControlSurfaces props={{}} />);
    await userEvent.click(screen.getByRole('button', { name: 'Rudder' }));
    expect(screen.getByText('Vertical axis (yaw)')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Show the three axes'));
    expect(screen.getByText('Longitudinal (roll)')).toBeInTheDocument();
  });

  it('runs the quiz with control and select questions', async () => {
    const onQuizAnswer = vi.fn();
    render(<ControlSurfaces props={{ mode: 'quiz' }} onQuizAnswer={onQuizAnswer} />);
    expect(screen.getByText('Make the airplane roll right.')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Roll right' }));
    await userEvent.click(screen.getByRole('button', { name: 'Check' }));
    expect(onQuizAnswer).toHaveBeenLastCalledWith(
      expect.objectContaining({ questionId: 'w1-roll-right', correct: true }),
    );
    await userEvent.click(screen.getByRole('button', { name: 'Next question' }));
    await userEvent.click(screen.getByRole('button', { name: 'Elevator' }));
    await userEvent.click(screen.getByRole('button', { name: 'Check' }));
    expect(onQuizAnswer).toHaveBeenLastCalledWith({
      questionId: 'w1-right-pedal',
      correct: false,
      answer: 'Elevator',
    });
    // Quiz mode names the selection but doesn't explain it.
    expect(screen.queryByText('Lateral axis (pitch)')).not.toBeInTheDocument();
  });

  it('has no serious axe violations', async () => {
    const { container } = render(<ControlSurfaces props={{}} />);
    expect(await seriousViolations(container)).toEqual([]);
  });
});

describe('W6 Turn coordinator', () => {
  it('shows a slip and fixes it by centering the ball', async () => {
    render(<TurnCoordinator props={{}} />);
    const bank = screen.getByRole('slider', { name: 'Bank' });
    fireEvent.change(bank, { target: { value: '20' } });
    expect(bank).toHaveAttribute('aria-valuetext', '20 degrees right bank');
    expect(screen.getByText('Slipping — add right rudder')).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /Turn coordinator: .*ball displaced right/ }),
    ).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Center the ball' }));
    expect(screen.getByText('Ball centered')).toBeInTheDocument();
    expect(screen.getByRole('slider', { name: 'Rudder' })).toHaveAttribute(
      'aria-valuetext',
      '22 percent right rudder',
    );
  });

  it('gives the standard-rate bank for the airspeed', () => {
    render(<TurnCoordinator props={{}} />);
    fireEvent.change(screen.getByRole('slider', { name: 'True airspeed' }), {
      target: { value: '120' },
    });
    expect(screen.getByText('Standard rate at 120 KTAS:').parentElement).toHaveTextContent(
      'about 18° of bank (rule of thumb TAS ÷ 10 + 7 = 19°)',
    );
  });

  it('runs the quiz', async () => {
    const onQuizAnswer = vi.fn();
    render(<TurnCoordinator props={{ mode: 'quiz' }} onQuizAnswer={onQuizAnswer} />);
    expect(screen.queryByRole('button', { name: 'Center the ball' })).not.toBeInTheDocument();
    fireEvent.change(screen.getByRole('slider', { name: 'Bank' }), { target: { value: '20' } });
    fireEvent.change(screen.getByRole('slider', { name: 'Rudder' }), { target: { value: '22' } });
    await userEvent.click(screen.getByRole('button', { name: 'Check' }));
    expect(onQuizAnswer).toHaveBeenCalledWith({
      questionId: 'w6-coordinated-right',
      correct: true,
      answer: '20 degrees right bank, 22 percent right rudder',
    });
  });

  it('has no serious axe violations', async () => {
    const { container } = render(<TurnCoordinator props={{}} />);
    expect(await seriousViolations(container)).toEqual([]);
  });
});

describe('W14 Load factor', () => {
  it('describes load factor and stall speed, and warns past the limit load', async () => {
    render(
      <TestProviders>
        <LoadFactor props={{}} />
      </TestProviders>,
    );
    const slider = await screen.findByRole('slider', { name: 'Bank angle in degrees' });
    fireEvent.change(slider, { target: { value: '60' } });
    expect(slider).toHaveAttribute(
      'aria-valuetext',
      '60 degrees of bank, load factor 2.00 G, stall speed 68 knots',
    );
    expect(screen.getByRole('img', { name: 'G meter showing 2.00 G' })).toBeInTheDocument();
    expect(screen.queryByText(/limit load of the normal category/)).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Increase bank by 5 degrees' }));
    await userEvent.click(screen.getByRole('button', { name: 'Increase bank by 5 degrees' }));
    expect(slider).toHaveValue('70');
    await userEvent.click(screen.getByRole('button', { name: 'Increase bank by 5 degrees' }));
    expect(screen.getByText(/limit load of the normal category/)).toBeInTheDocument();
  });

  it('runs the quiz', async () => {
    const onQuizAnswer = vi.fn();
    render(
      <TestProviders>
        <LoadFactor props={{ mode: 'quiz' }} onQuizAnswer={onQuizAnswer} />
      </TestProviders>,
    );
    const slider = await screen.findByRole('slider', { name: 'Bank angle in degrees' });
    fireEvent.change(slider, { target: { value: '60' } });
    await userEvent.click(screen.getByRole('button', { name: 'Check' }));
    expect(onQuizAnswer).toHaveBeenCalledWith({
      questionId: 'w14-2g',
      correct: true,
      answer: '60° bank',
    });
  });

  it('has no serious axe violations', async () => {
    const { container } = render(
      <TestProviders>
        <LoadFactor props={{}} />
      </TestProviders>,
    );
    await screen.findByRole('slider', { name: 'Bank angle in degrees' });
    expect(await seriousViolations(container)).toEqual([]);
  });
});

describe('W4 Angle of attack', () => {
  it('shows attached flow, then the stall warning and the stall', async () => {
    const { container } = render(<AngleOfAttack props={{}} />);
    const slider = screen.getByRole('slider', { name: 'Angle of attack in degrees' });
    expect(slider).toHaveAttribute(
      'aria-valuetext',
      'Angle of attack 4 degrees, lift coefficient 0.60, airflow attached',
    );
    fireEvent.change(slider, { target: { value: '13' } });
    expect(slider.getAttribute('aria-valuetext')).toMatch(/stall warning sounding$/);
    fireEvent.change(slider, { target: { value: '18' } });
    expect(screen.getByText('Airflow: Stalled')).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /airflow is breaking away from the upper surface/ }),
    ).toBeInTheDocument();
    await userEvent.click(
      screen.getByRole('button', { name: 'Decrease angle of attack by 1 degree' }),
    );
    expect(slider).toHaveValue('17');
    expect(container.querySelectorAll('path').length).toBeGreaterThan(8);
  });

  it('lowers the critical angle with flaps and runs the quiz', async () => {
    const onQuizAnswer = vi.fn();
    render(<AngleOfAttack props={{ mode: 'quiz' }} onQuizAnswer={onQuizAnswer} />);
    await userEvent.click(screen.getByLabelText('Flaps down'));
    fireEvent.change(screen.getByRole('slider', { name: 'Angle of attack in degrees' }), {
      target: { value: '16' },
    });
    await userEvent.click(screen.getByRole('button', { name: 'Check' }));
    expect(onQuizAnswer).toHaveBeenCalledWith({
      questionId: 'w4-critical',
      correct: false,
      answer: '16° angle of attack, flaps down',
    });
  });

  it('has no serious axe violations', async () => {
    const { container } = render(<AngleOfAttack props={{}} />);
    expect(await seriousViolations(container)).toEqual([]);
  });
});

describe('W5 Pitch and power trainer', () => {
  it('interpolates the table, trims and flags provisional numbers', async () => {
    render(
      <TestProviders>
        <PitchPower props={{}} />
      </TestProviders>,
    );
    expect(await screen.findByText(/Provisional numbers/)).toBeInTheDocument();
    const pitch = screen.getByRole('slider', { name: 'Pitch attitude' });
    // Start: cruise, 2,300 RPM with the nose level.
    expect(pitch).toHaveAttribute(
      'aria-valuetext',
      'pitch level, 2,300 RPM: 102 knots, climbing 50 feet per minute',
    );
    expect(screen.getByText('Trimmed: no force needed')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Vy climb' }));
    expect(screen.getByRole('img', { name: 'Airspeed 76 knots' })).toBeInTheDocument();
    expect(screen.getByText('Strong back pressure (pull)')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Trim for 76 knots' }));
    expect(screen.getByText('Trimmed: no force needed')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Increase power by 100 RPM' }));
    expect(screen.getByRole('slider', { name: 'Power' })).toHaveValue('2600');
  });

  it('runs the quiz', async () => {
    const onQuizAnswer = vi.fn();
    render(
      <TestProviders>
        <PitchPower props={{ mode: 'quiz' }} onQuizAnswer={onQuizAnswer} />
      </TestProviders>,
    );
    fireEvent.change(await screen.findByRole('slider', { name: 'Pitch attitude' }), {
      target: { value: '-2.5' },
    });
    fireEvent.change(screen.getByRole('slider', { name: 'Power' }), { target: { value: '1700' } });
    await userEvent.click(screen.getByRole('button', { name: 'Check' }));
    expect(onQuizAnswer).toHaveBeenCalledWith(
      expect.objectContaining({ questionId: 'w5-descent', correct: true }),
    );
  });

  it('has no serious axe violations', async () => {
    const { container } = render(
      <TestProviders>
        <PitchPower props={{}} />
      </TestProviders>,
    );
    await screen.findByRole('slider', { name: 'Pitch attitude' });
    expect(await seriousViolations(container)).toEqual([]);
  });
});

describe('W2 G1000 PFD explorer', () => {
  it('explains a region chosen from the list and runs the tour', async () => {
    render(
      <TestProviders>
        <G1000Pfd props={{}} />
      </TestProviders>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Altimeter setting (BARO)' }));
    expect(screen.getByText('The Kollsman window on the altimeter.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Altimeter setting (BARO)' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );

    await userEvent.click(screen.getByRole('button', { name: 'Start tour' }));
    expect(screen.getByText('Stop 1 of 16')).toBeInTheDocument();
    expect(screen.getByText('Attitude indicator (artificial horizon).')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByText('Stop 2 of 16')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Airspeed tape' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    await userEvent.click(screen.getByRole('button', { name: 'End tour' }));
    expect(screen.getByRole('button', { name: 'Start tour' })).toBeInTheDocument();
  });

  it('shows a region card on hover', async () => {
    const { container } = render(
      <TestProviders>
        <G1000Pfd props={{}} />
      </TestProviders>,
    );
    fireEvent.pointerEnter(container.querySelector('[data-region="vsi"]')!);
    expect(screen.getByText('Vertical speed indicator (VSI).')).toBeInTheDocument();
  });

  it('walks through Direct-To in navigation mode', async () => {
    render(
      <TestProviders>
        <G1000Pfd props={{ view: 'navigation' }} />
      </TestProviders>,
    );
    const steps = screen.getByRole('list', { name: 'Direct-To steps' });
    expect(within(steps).getAllByRole('listitem')[0]).toHaveAttribute('aria-current', 'step');
    expect(screen.getByRole('button', { name: 'Previous step' })).toBeDisabled();
    await userEvent.click(screen.getByRole('button', { name: /Next step/ }));
    expect(within(steps).getAllByRole('listitem')[1]).toHaveAttribute('aria-current', 'step');
    // The step's key is explained in the card.
    expect(screen.getByText(/Opens the Direct-To window/, { selector: 'dd' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'D→ (Direct-To) key' })).toBeInTheDocument();
  });

  it('runs the quiz with the mouse and the keyboard', async () => {
    const onQuizAnswer = vi.fn();
    render(
      <TestProviders>
        <G1000Pfd props={{ mode: 'quiz' }} onQuizAnswer={onQuizAnswer} />
      </TestProviders>,
    );
    expect(screen.getByText('Click the vertical speed indicator.')).toBeInTheDocument();
    // Area 1 is the attitude indicator: a wrong answer, chosen with the keyboard.
    screen.getByRole('button', { name: 'Display area 1' }).focus();
    await userEvent.keyboard('{Enter}');
    await userEvent.click(screen.getByRole('button', { name: 'Check' }));
    expect(onQuizAnswer).toHaveBeenLastCalledWith(
      expect.objectContaining({
        questionId: 'find-vsi',
        correct: false,
        answer: 'Attitude indicator',
      }),
    );
    await userEvent.click(screen.getByRole('button', { name: 'Display area 5' }));
    await userEvent.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByText(/narrow scale just right of the altitude tape/)).toBeInTheDocument();
  });

  it('has no serious axe violations', async () => {
    const { container } = render(
      <TestProviders>
        <G1000Pfd props={{}} />
      </TestProviders>,
    );
    expect(await seriousViolations(container)).toEqual([]);
  });
});

describe('W7 Traffic pattern animator', () => {
  const legs = () =>
    within(screen.getByRole('list', { name: 'Pattern legs' })).getAllByRole('listitem');

  it('steps through the legs with radio calls and shows a go-around', async () => {
    render(<TrafficPattern props={{ calls: 'true' }} />);
    expect(legs()[0]).toHaveAttribute('aria-current', 'step');
    expect(legs()[0]).toHaveTextContent('45° entry');
    await userEvent.click(screen.getByRole('button', { name: 'Next leg' }));
    expect(legs()[1]).toHaveAttribute('aria-current', 'step');
    expect(legs()[1]).toHaveTextContent(
      'Tracy traffic, Skyhawk 123, left downwind runway 26, touch-and-go, Tracy.',
    );
    await userEvent.click(screen.getByRole('button', { name: 'Right traffic' }));
    expect(screen.getByRole('img', { name: /right traffic/ })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Go around' }));
    const current = legs().find((li) => li.getAttribute('aria-current') === 'step');
    expect(current).toHaveTextContent('Go-around');
  });

  it('has no serious axe violations', async () => {
    const { container } = render(<TrafficPattern props={{ calls: 'true', config: 'true' }} />);
    expect(await seriousViolations(container)).toEqual([]);
  });
});

describe('W12 Wind triangle', () => {
  const result = (label: string) => screen.getByText(label, { selector: 'dt' }).nextElementSibling;

  it('solves the default example', () => {
    render(<WindTriangle props={{}} />);
    expect(result('WCA')).toHaveTextContent('12° left');
    expect(result('True heading')).toHaveTextContent('078');
    expect(result('Groundspeed')).toHaveTextContent('98 kt');
    expect(screen.getByRole('img', { name: /Wind from 360° at 20 knots/ })).toBeInTheDocument();
  });

  it('validates fields and flags a wind too strong to hold the course', async () => {
    render(<WindTriangle props={{}} />);
    const tas = screen.getByLabelText('True airspeed (kt)');
    await userEvent.clear(tas);
    await userEvent.type(tas, 'abc');
    expect(screen.getByText('Enter a number.')).toBeInTheDocument();
    expect(tas).toHaveAttribute('aria-invalid', 'true');
    await userEvent.clear(tas);
    await userEvent.type(tas, '40');
    const ws = screen.getByLabelText('Wind speed (kt)');
    await userEvent.clear(ws);
    await userEvent.type(ws, '60');
    expect(screen.getByRole('alert')).toHaveTextContent('The wind is too strong');
  });

  it('has no serious axe violations', async () => {
    const { container } = render(<WindTriangle props={{}} />);
    expect(await seriousViolations(container)).toEqual([]);
  });
});
