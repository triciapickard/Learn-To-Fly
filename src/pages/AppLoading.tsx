import { LogoMark } from '@/components/Logo';

/** Shown while the first route's code loads. */
export default function AppLoading() {
  return (
    <div role="status" className="flex min-h-dvh items-center justify-center">
      <LogoMark className="size-12 animate-pulse" />
      <span className="sr-only">Loading Learn-To-Fly…</span>
    </div>
  );
}
