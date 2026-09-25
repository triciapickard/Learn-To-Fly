import { Card, CardBody, CardHeader } from '@/components/Card';
import { Checkbox } from '@/components/Checkbox';
import { FormField } from '@/components/FormField';
import { RadioGroup } from '@/components/RadioGroup';
import { Select } from '@/components/Select';
import { useToast } from '@/components/Toast';
import { useUpdateMe } from '@/features/auth/api';
import { useSaveThemePreference } from '@/features/auth/useSaveThemePreference';
import type { ThemePreference } from '@/features/theme/theme';
import type { Preferences, UserDto } from '@shared/schemas/auth';

/** Preferences save as soon as they change (US-16, US-17). */
export function PreferencesSection({ user }: { user: UserDto }) {
  const updateMe = useUpdateMe();
  const saveTheme = useSaveThemePreference();
  const { toast } = useToast();

  const save = (preferences: Partial<Preferences>) =>
    updateMe.mutate(
      { preferences },
      {
        onSuccess: () => toast('Preferences saved.', 'success'),
        onError: () => toast('Could not save your preferences. Please try again.', 'error'),
      },
    );

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">Preferences</h2>
      </CardHeader>
      <CardBody className="flex flex-col gap-6">
        <RadioGroup
          label="Theme"
          orientation="horizontal"
          value={user.preferences.theme}
          onValueChange={(value) => saveTheme(value as ThemePreference)}
          options={[
            { value: 'system', label: 'System' },
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
          ]}
        />
        <FormField
          id="account-cockpit"
          label="Cockpit variant"
          hint="Lessons focus on the G1000; this will tailor classic-panel callouts."
        >
          <Select
            value={user.preferences.cockpitVariant}
            onChange={(e) =>
              save({ cockpitVariant: e.target.value as Preferences['cockpitVariant'] })
            }
          >
            <option value="g1000">G1000 NXi (glass cockpit)</option>
            <option value="classic">Classic (steam gauges)</option>
          </Select>
        </FormField>
        <FormField id="account-controller" label="Controller" hint="Used to tailor control tips.">
          <Select
            value={user.preferences.controller}
            onChange={(e) => save({ controller: e.target.value as Preferences['controller'] })}
          >
            <option value="unknown">Not set</option>
            <option value="gamepad">Gamepad (e.g. Xbox controller)</option>
            <option value="stick">Joystick</option>
            <option value="yoke">Yoke and pedals</option>
          </Select>
        </FormField>
        <Checkbox
          label="Show bonus (P1) lessons and challenges"
          checked={user.preferences.showBonus}
          onChange={(e) => save({ showBonus: e.target.checked })}
        />
      </CardBody>
    </Card>
  );
}
