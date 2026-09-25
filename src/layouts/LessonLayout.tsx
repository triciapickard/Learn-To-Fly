import { Outlet } from 'react-router';

/**
 * Route wrapper for lessons. The lesson page lays out its sidebar, main column and
 * right rail itself because they all depend on the lesson's data (Section 20.4).
 */
export default function LessonLayout() {
  return <Outlet />;
}
