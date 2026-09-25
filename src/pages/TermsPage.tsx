import { ExternalLink, Link } from '@/components/Link';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { Prose } from '@/components/Prose';
import { LEGAL_LAST_UPDATED } from '@/features/layout/legal';
import { DISCLAIMER_SHORT, GITHUB_URL } from '@/features/layout/navigation';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function TermsPage() {
  usePageTitle('Terms of use');
  return (
    <PageContainer narrow>
      <PageHeader title="Terms of use" description={`Last updated ${LEGAL_LAST_UPDATED}`} />
      <Prose>
        <h2>1. Acceptance and eligibility</h2>
        <p>
          By using Learn-To-Fly you agree to these terms. You must be at least 13 years old to
          create an account.
        </p>
        <h2>2. Simulation only</h2>
        <p>
          {DISCLAIMER_SHORT} The full <Link to="/disclaimer">disclaimer</Link> is part of these
          terms.
        </p>
        <h2>3. Your account</h2>
        <p>
          Keep your password safe and do not share your account. One person per account. You are
          responsible for activity on your account.
        </p>
        <h2>4. Acceptable use</h2>
        <p>
          Do not abuse the service, scrape it, overload it, or attempt to break or bypass its
          security.
        </p>
        <h2>5. Intellectual property</h2>
        <p>
          Lessons, illustrations, widgets and code remain the property of Learn-To-Fly. You may use
          them for your own personal learning. Third-party names and trademarks belong to their
          owners.
        </p>
        <h2>6. No warranty and limitation of liability</h2>
        <p>
          The service is provided &quot;as is&quot;, without any warranty. To the fullest extent
          permitted by law, Learn-To-Fly is not liable for any loss or damage arising from its use,
          and in particular from any use of its content outside a flight simulator.
        </p>
        <h2>7. Termination and changes</h2>
        <p>
          You can delete your account at any time. We may suspend accounts that break these terms.
          We may update these terms; the date above shows the latest version. These terms are
          governed by the laws of the jurisdiction where the author lives.
        </p>
        <h2>8. Contact</h2>
        <p>
          Questions about these terms? Open an issue on{' '}
          <ExternalLink href={`${GITHUB_URL}/issues`}>GitHub</ExternalLink>.
        </p>
      </Prose>
    </PageContainer>
  );
}
