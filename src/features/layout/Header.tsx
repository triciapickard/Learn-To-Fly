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

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  cn(
    'flex min-h-11 items-center rounded-control px-3 font-semibold hover:bg-surface-2',
    isActive ? 'text-primary' : 'text-text',
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

/** Global header (Section 19.2): desktop nav, mobile drawer, theme toggle, account. */
export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const { user, isLoading } = useAuth();
  const saveTheme = useSaveThemePreference();
  const account = isLoading ? null : user ? <UserMenu user={user} /> : <AccountLinks />;
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4">
        <Link to="/" unstyled className="rounded-control" aria-label="Learn to Fly home">
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
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle onChange={saveTheme} />
          <div className="hidden items-center gap-2 md:flex">{account}</div>
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger
              aria-label="Open menu"
              className="flex size-11 items-center justify-center rounded-control hover:bg-surface-2 md:hidden"
            >
              <Menu aria-hidden className="size-6" />
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
              <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
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
