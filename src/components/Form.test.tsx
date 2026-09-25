import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Checkbox } from './Checkbox';
import { FormField } from './FormField';
import { Input } from './Input';
import { PasswordInput } from './PasswordInput';
import { RadioGroup } from './RadioGroup';
import { Select } from './Select';
import { Textarea } from './Textarea';

describe('FormField', () => {
  it('links the label, hint and error to the control', () => {
    render(
      <FormField label="Email" hint="We never share it." error="Enter a valid email." required>
        <Input type="email" />
      </FormField>,
    );
    const input = screen.getByRole('textbox', { name: /Email/ });
    expect(input).toHaveAccessibleDescription('We never share it. Enter a valid email.');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-required', 'true');
  });

  it('works with Textarea and Select', () => {
    render(
      <>
        <FormField label="Notes">
          <Textarea />
        </FormField>
        <FormField label="Controller">
          <Select defaultValue="yoke">
            <option value="gamepad">Gamepad</option>
            <option value="yoke">Yoke</option>
          </Select>
        </FormField>
      </>,
    );
    expect(screen.getByRole('textbox', { name: 'Notes' })).not.toHaveAttribute('aria-invalid');
    expect(screen.getByRole('combobox', { name: 'Controller' })).toHaveValue('yoke');
  });
});

describe('PasswordInput', () => {
  it('toggles visibility with an accessible button', async () => {
    render(
      <FormField label="Password">
        <PasswordInput />
      </FormField>,
    );
    const input = screen.getByLabelText('Password');
    expect(input).toHaveAttribute('type', 'password');
    const toggle = screen.getByRole('button', { name: 'Show password' });
    await userEvent.click(toggle);
    expect(input).toHaveAttribute('type', 'text');
    expect(screen.getByRole('button', { name: 'Hide password' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });
});

describe('Checkbox', () => {
  it('has a label and reports errors', async () => {
    const onChange = vi.fn();
    render(<Checkbox label="I agree to the Terms" error="Required" onChange={onChange} />);
    const box = screen.getByRole('checkbox', { name: 'I agree to the Terms' });
    expect(box).toHaveAccessibleDescription('Required');
    await userEvent.click(box);
    expect(box).toBeChecked();
    expect(onChange).toHaveBeenCalled();
  });
});

describe('RadioGroup', () => {
  const options = [
    { value: 'gold', label: 'Gold' },
    { value: 'silver', label: 'Silver' },
    { value: 'bronze', label: 'Bronze' },
  ];

  it('is a labelled radio group operable with the keyboard', async () => {
    const onValueChange = vi.fn();
    render(
      <RadioGroup
        label="Final approach speed"
        options={options}
        defaultValue="gold"
        onValueChange={onValueChange}
      />,
    );
    expect(screen.getByRole('radiogroup', { name: 'Final approach speed' })).toBeInTheDocument();
    const gold = screen.getByRole('radio', { name: 'Gold' });
    expect(gold).toBeChecked();
    gold.focus();
    await userEvent.keyboard('{ArrowDown}');
    const silver = screen.getByRole('radio', { name: 'Silver' });
    expect(silver).toHaveFocus();
    await userEvent.keyboard(' ');
    expect(silver).toBeChecked();
    expect(onValueChange).toHaveBeenCalledWith('silver');
  });

  it('describes errors', () => {
    render(<RadioGroup label="Result" options={options} error="Choose one." />);
    expect(screen.getByRole('radiogroup')).toHaveAccessibleDescription('Choose one.');
  });
});
