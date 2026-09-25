import { ExternalLink, Link } from '@/components/Link';
import { DISCLAIMER_SHORT, FOOTER_NAV, GITHUB_URL } from './navigation';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <ExternalLink href={GITHUB_URL} className="text-muted">
                GitHub
              </ExternalLink>
            </li>
          </ul>
        </nav>
        <p className="max-w-3xl text-sm text-muted">{DISCLAIMER_SHORT}</p>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Learn-To-Fly. Not affiliated with Microsoft, Asobo Studio,
          Textron Aviation, Garmin or the FAA.
        </p>
      </div>
    </footer>
  );
}
