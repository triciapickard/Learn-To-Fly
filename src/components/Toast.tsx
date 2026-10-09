import { Check, Info, OctagonAlert, TriangleAlert, X, type LucideIcon } from 'lucide-react';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/cn';
import { Button } from './Button';

export type ToastTone = 'info' | 'success' | 'warning' | 'error';

export interface ToastOptions {
  /** First line, bold. */
  title: string;
  description?: string;
  tone?: ToastTone;
  /** Replaces the dismiss control, e.g. a Retry button. */
  action?: ReactNode;
}

interface ToastItem extends ToastOptions {
  id: number;
  tone: ToastTone;
}

interface ToastContextValue {
  /** `toast('Saved.', 'success')` or `toast({ title, description, tone, action })`. */
  toast: (message: string | ToastOptions, tone?: ToastTone) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const value = useContext(ToastContext);
  if (!value) throw new Error('useToast must be used inside <ToastProvider>');
  return value;
}

/** Tone is carried by the 20px icon color only, never by the whole toast turning a color. */
const tones: Record<ToastTone, { icon: LucideIcon; color: string }> = {
  info: { icon: Info, color: 'text-ink-2' },
  success: { icon: Check, color: 'text-go' },
  warning: { icon: TriangleAlert, color: 'text-caution' },
  error: { icon: OctagonAlert, color: 'text-warn' },
};

const DURATION_MS = 6000;

/**
 * Toast notifications in a live region. One toast at a time; a new one replaces the
 * previous. Success and caution dismiss after 6 seconds; errors stay until dismissed.
 */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<ToastItem | null>(null);
  const nextId = useRef(1);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismiss = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
    setCurrent(null);
  }, []);

  const toast = useCallback((message: string | ToastOptions, tone?: ToastTone) => {
    const options = typeof message === 'string' ? { title: message, tone } : message;
    const item: ToastItem = { ...options, id: nextId.current++, tone: options.tone ?? 'info' };
    if (timer.current) clearTimeout(timer.current);
    setCurrent(item);
    timer.current =
      item.tone === 'error'
        ? null
        : setTimeout(() => setCurrent((c) => (c?.id === item.id ? null : c)), DURATION_MS);
  }, []);

  const value = useMemo(() => ({ toast }), [toast]);
  const isError = current?.tone === 'error';
  const Icon = current ? tones[current.tone].icon : null;

  return (
    <ToastContext value={value}>
      {children}
      <div
        role={isError ? 'alert' : 'status'}
        aria-live={isError ? 'assertive' : 'polite'}
        className="pointer-events-none fixed right-4 bottom-4 left-4 z-50 flex justify-end sm:left-auto"
      >
        {current && Icon && (
          <div
            key={current.id}
            className="pointer-events-auto flex w-full items-start gap-3 rounded-md border border-line bg-surface-raised px-4 py-3.5 text-sm leading-5 text-ink shadow-2 motion-safe:animate-rise-in sm:w-[360px]"
          >
            <Icon
              aria-hidden
              strokeWidth={1.75}
              className={cn('mt-px size-5 shrink-0', tones[current.tone].color)}
            />
            <div className="min-w-0 flex-1">
              <p className="font-semibold">{current.title}</p>
              {current.description && <p>{current.description}</p>}
            </div>
            {current.action ? (
              <div className="ml-auto flex shrink-0 items-center gap-2">
                {current.action}
                {isError && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={dismiss}
                    aria-label="Dismiss notification"
                  >
                    <X aria-hidden />
                  </Button>
                )}
              </div>
            ) : (
              <button
                type="button"
                onClick={dismiss}
                aria-label="Dismiss notification"
                className="-m-1 flex size-7 shrink-0 items-center justify-center rounded-sm text-ink-2 hover:bg-surface-sunken hover:text-ink"
              >
                <X aria-hidden className="size-4" strokeWidth={2} />
              </button>
            )}
          </div>
        )}
      </div>
    </ToastContext>
  );
}
