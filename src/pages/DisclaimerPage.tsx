import { Callout } from '@/components/Callout';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { Prose } from '@/components/Prose';
import { LEGAL_LAST_UPDATED, TRADEMARK_STATEMENT } from '@/features/layout/legal';
import { DISCLAIMER_SHORT } from '@/features/layout/navigation';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function DisclaimerPage() {
  usePageTitle('Disclaimer');
  return (
    <PageContainer narrow>
      <PageHeader
        title="Simulation-only disclaimer"
        description={`Last updated ${LEGAL_LAST_UPDATED}`}
      />
      <Callout type="safety" title="For simulation use only">
        <p>{DISCLAIMER_SHORT}</p>
      </Callout>
      <Prose>
        <ul>
          <li>
            Learn-To-Fly content is for entertainment and educational use with flight simulation
            software.
          </li>
          <li>
            It is not approved by any aviation authority and does not count toward any pilot
            certificate or rating.
          </li>
          <li>
            Procedures and numbers are simplified and may differ from the real aircraft. Always use
            the official Pilot&apos;s Operating Handbook and a certified flight instructor for real
            flying.
          </li>
          <li>
            Charts and airport information are shown for simulation only and may be out of date.
            <strong> Not for navigation.</strong>
          </li>
          <li>The author accepts no liability for use of the content outside a simulator.</li>
        </ul>
        <h2>Sources</h2>
        <p>
          Lessons reference and credit FAA publications such as the Pilot&apos;s Handbook of
          Aeronautical Knowledge (FAA-H-8083-25) and the Airplane Flying Handbook (FAA-H-8083-3).
          Copyrighted manuals, books and videos are linked, never copied.
        </p>
        <h2>Trademarks</h2>
        <p>{TRADEMARK_STATEMENT}</p>
      </Prose>
    </PageContainer>
  );
}
