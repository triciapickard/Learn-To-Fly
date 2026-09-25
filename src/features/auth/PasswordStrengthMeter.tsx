import { cn } from '@/lib/cn';
import { passwordStrength } from './passwordStrength';

const colours = ['bg-danger', 'bg-danger', 'bg-warning', 'bg-success', 'bg-success'];

export function PasswordStrengthMeter({ password, id }: { password: string; id: string }) {
  const { score, label } = passwordStrength(password);
  return (
    <div className="flex items-center gap-3" aria-hidden={!label}>
      <div className="flex flex-1 gap-1" aria-hidden>
        {[1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={cn(
              'h-1.5 flex-1 rounded-full',
              label && i <= Math.max(score, 1) ? colours[score] : 'bg-surface-2',
            )}
          />
        ))}
      </div>
      <p id={id} className="min-w-20 text-right text-sm text-muted" aria-live="polite">
        {label && <>Strength: {label}</>}
      </p>
    </div>
  );
}
