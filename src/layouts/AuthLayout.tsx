import { Outlet } from 'react-router';

/** Narrow centred column for log in / sign up. */
export default function AuthLayout() {
  return (
    <div className="mx-auto w-full max-w-md px-4 py-10 sm:py-16">
      <Outlet />
    </div>
  );
}
