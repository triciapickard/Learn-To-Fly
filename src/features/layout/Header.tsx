import { Menu } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';
import { Button } from '@/components/Button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/Drawer';
import { Link } from '@/components/Link';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useAuth } from '@/features/auth/api';
import { UserMenu } from '@/features/auth/UserMenu';
import { useSaveThemePreference } from '@/features/auth/useSaveThemePreference';
import { cn } from '@/lib/cn';
import { PRIMARY_NAV } from './navigation';

/** Nav links are quiet labels; the current section carries the 3px accent-line rule. */
const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  cn(
    'flex min-h-11 items-center rounded-md px-3 text-sm font-medium transition-colors duration-150 hover:bg-surface-sunken hover:text-ink',
    isActive
      ? 'rounded-b-none text-ink shadow-[inset_0_-3px_0_var(--color-accent-line)]'
      : 'text-ink-2',
  );

export function AccountLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <Button variant="ghost" size="sm" asChild>
        <Link unstyled to="/login" onClick={onNavigate}>
          Log in
        </Link>
      </Button>
      <Button size="sm" asChild>
        <Link unstyled to="/signup" onClick={onNavigate}>
          Sign up
        </Link>
      </Button>
    </>
  );
}

/** Global header (Section 19.2): the fin mark and wordmark, Learn, Challenges, Reference, the ThemeToggle and account. */
export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const { user, isLoading } = useAuth();
  const saveTheme = useSaveThemePreference();
  const account = isLoading ? null : user ? <UserMenu user={user} /> : <AccountLinks />;
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-canvas/95 backdrop-blur print:hidden">
      <div className="mx-auto flex h-16 max-w-page items-center gap-4 px-4">
        <Link to="/" unstyled className="shrink-0 rounded-sm" aria-label="Learn to Fly home">
          <Logo />
        </Link>
        <nav aria-label="Main" className="ml-4 hidden md:block">
          <ul className="flex gap-1">
            {PRIMARY_NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={navLinkClasses}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle compact="phone" onChange={saveTheme} />
          <div className="hidden items-center gap-2 md:flex">{account}</div>
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger
              aria-label="Open menu"
              className="flex size-11 items-center justify-center rounded-md text-ink hover:bg-surface-sunken md:hidden"
            >
              <Menu aria-hidden className="size-6" strokeWidth={1.75} />
            </DrawerTrigger>
            <DrawerContent title="Menu">
              <nav aria-label="Main">
                <ul className="flex flex-col gap-1">
                  {PRIMARY_NAV.map((item) => (
                    <li key={item.to}>
                      <NavLink to={item.to} className={navLinkClasses} onClick={close}>
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-6">
                {isLoading ? null : user ? (
                  <ul className="flex w-full flex-col gap-1">
                    <li>
                      <NavLink to="/dashboard" className={navLinkClasses} onClick={close}>
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/account" className={navLinkClasses} onClick={close}>
                        Account
                      </NavLink>
                    </li>
                  </ul>
                ) : (
                  <AccountLinks onNavigate={close} />
                )}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
