import { Monitor, Moon, Sun } from 'lucide-react';
import type { ThemePreference } from '@/features/theme/theme';
import { useTheme } from '@/features/theme/ThemeContext';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import { RadioGroup } from './RadioGroup';

const labels: Record<ThemePreference, string> = { system: 'System', light: 'Light', dark: 'Dark' };

/** Theme picker: system / light / dark (US-16). */
export function ThemeToggle({
  onChange,
}: {
  /** Called instead of the default local-only update (e.g. to also save to the account). */
  onChange?: (preference: ThemePreference) => void;
}) {
  const { preference, resolvedTheme, setPreference } = useTheme();
  const change = onChange ?? setPreference;
  const Icon = preference === 'system' ? Monitor : resolvedTheme === 'dark' ? Moon : Sun;
  return (
    <Popover>
      <PopoverTrigger
        aria-label={`Theme: ${labels[preference]}`}
        className="flex size-11 items-center justify-center rounded-control text-muted hover:bg-surface-2 hover:text-text"
      >
        <Icon aria-hidden className="size-5" />
      </PopoverTrigger>
      <PopoverContent align="end" className="w-56">
        <RadioGroup
          label="Theme"
          value={preference}
          onValueChange={(value) => change(value as ThemePreference)}
          options={[
            { value: 'system', label: 'System', description: 'Match your device' },
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
          ]}
        />
      </PopoverContent>
    </Popover>
  );
}
