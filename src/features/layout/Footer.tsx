import { ExternalLink, Link } from '@/components/Link';
import { Logo } from '@/components/Logo';
import { DISCLAIMER_SHORT, FOOTER_NAV, GITHUB_URL } from './navigation';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-surface print:hidden">
      <div className="mx-auto flex max-w-page flex-col gap-5 px-4 py-10">
        <Logo />
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm leading-5">
            {FOOTER_NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} quiet className="text-ink-2">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <ExternalLink href={GITHUB_URL} quiet className="text-ink-2">
                GitHub
              </ExternalLink>
            </li>
          </ul>
        </nav>
        <p className="max-w-measure text-sm leading-5 text-ink-2">{DISCLAIMER_SHORT}</p>
        <p className="text-sm leading-5 text-ink-2">
          © {new Date().getFullYear()} Learn-To-Fly. Not affiliated with Microsoft, Asobo Studio,
          Textron Aviation, Garmin or the FAA.
        </p>
      </div>
    </footer>
  );
}
