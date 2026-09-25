import { Outlet } from 'react-router';

/**
 * Lesson layout: sidebar sections, main column and right rail on xl (Section 20.4).
 * The lesson player fills the regions in Phase 6.
 */
export default function LessonLayout() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      <Outlet />
    </div>
  );
}
