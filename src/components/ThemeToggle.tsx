import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Laptop, Moon, Sun, type LucideIcon } from 'lucide-react';
import type { ThemePreference } from '@/features/theme/theme';
import { useTheme } from '@/features/theme/ThemeContext';
import { cn } from '@/lib/cn';

/** The themes are called Day and Night in the UI; data-theme stays light and dark. */
const OPTIONS: { value: ThemePreference; label: string; icon: LucideIcon }[] = [
  { value: 'light', label: 'Day', icon: Sun },
  { value: 'system', label: 'System', icon: Laptop },
  { value: 'dark', label: 'Night', icon: Moon },
];

export const THEME_LABELS: Record<ThemePreference, string> = {
  light: 'Day',
  system: 'System',
  dark: 'Night',
};

export interface ThemeToggleProps {
  /** Called instead of the default local-only update (e.g. to also save to the account). */
  onChange?: (preference: ThemePreference) => void;
  /** Icons only (with aria-labels). `phone` hides the words below the `sm` breakpoint. */
  compact?: boolean | 'phone';
  /** Accessible name of the control (the account page uses "Theme preference"). */
  label?: string;
  className?: string;
}

/**
 * A three-way segmented control: Day, System, Night. The track is surface-sunken with
 * radius-pill and 3px padding; the selected segment is an ink pill with on-ink text.
 * Switching never animates page colors; only the control transitions.
 */
export function ThemeToggle({
  onChange,
  compact = false,
  label = 'Theme',
  className,
}: ThemeToggleProps) {
  const { preference, setPreference } = useTheme();
  const change = onChange ?? setPreference;
  return (
    <RadioGroupPrimitive.Root
      aria-label={label}
      orientation="horizontal"
      value={preference}
      onValueChange={(value) => change(value as ThemePreference)}
      className={cn('inline-flex gap-0.5 rounded-pill bg-surface-sunken p-[3px]', className)}
    >
      {OPTIONS.map(({ value, label, icon: Icon }) => (
        <RadioGroupPrimitive.Item
          key={value}
          value={value}
          aria-label={label}
          className={cn(
            'inline-flex h-8 items-center gap-1.5 rounded-pill text-sm font-medium text-ink-2 transition-colors duration-150 hover:text-ink',
            'data-[state=checked]:bg-ink data-[state=checked]:text-on-ink',
            compact === true ? 'px-2.5' : compact === 'phone' ? 'px-2.5 sm:px-3.5' : 'px-3.5',
          )}
        >
          <Icon aria-hidden className="size-4" strokeWidth={1.75} />
          <span
            aria-hidden
            className={cn(compact === true && 'sr-only', compact === 'phone' && 'hidden sm:inline')}
          >
            {label}
          </span>
        </RadioGroupPrimitive.Item>
      ))}
    </RadioGroupPrimitive.Root>
  );
}
