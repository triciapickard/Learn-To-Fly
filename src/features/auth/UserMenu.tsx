import { LayoutDashboard, LogOut, UserRound } from 'lucide-react';
import { Link } from 'react-router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/DropdownMenu';
import { hardNavigate } from '@/lib/navigation';
import type { UserDto } from '@shared/schemas/auth';
import { useLogout } from './api';

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}

/** Header avatar menu: Dashboard, Account, Log out (step 4.14). */
export function UserMenu({ user }: { user: UserDto }) {
  const logout = useLogout();
  const onLogout = async () => {
    await logout.mutateAsync().catch(() => undefined);
    hardNavigate.to('/');
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={`Account menu for ${user.displayName}`}
        className="flex size-11 items-center justify-center rounded-full"
      >
        <span className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-contrast">
          {initials(user.displayName) || '?'}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          Signed in as <span className="font-semibold text-text">{user.displayName}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/dashboard">
            <LayoutDashboard aria-hidden className="size-4" /> Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/account">
            <UserRound aria-hidden className="size-4" /> Account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={onLogout}>
          <LogOut aria-hidden className="size-4" /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
