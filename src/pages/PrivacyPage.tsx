import { ExternalLink } from '@/components/Link';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { Prose } from '@/components/Prose';
import { LEGAL_LAST_UPDATED } from '@/features/layout/legal';
import { GITHUB_URL } from '@/features/layout/navigation';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function PrivacyPage() {
  usePageTitle('Privacy policy');
  return (
    <PageContainer narrow>
      <PageHeader title="Privacy policy" description={`Last updated ${LEGAL_LAST_UPDATED}`} />
      <Prose>
        <h2>1. Who we are</h2>
        <p>
          Learn-To-Fly is an independent personal project. For any privacy question, open an issue
          on <ExternalLink href={`${GITHUB_URL}/issues`}>GitHub</ExternalLink> and we will reply
          there or arrange a private channel.
        </p>
        <h2>2. What we collect</h2>
        <ul>
          <li>Your email address and display name.</li>
          <li>Your password, stored only as a one-way hash (argon2id). We never see it.</li>
          <li>Your preferences, such as theme and controller type.</li>
          <li>Your learning progress, challenge attempts, notes and reflections.</li>
          <li>Server logs (IP address, browser user agent, request details) for security.</li>
        </ul>
        <p>
          You can read every lesson without an account; we collect nothing about visitors beyond
          server logs.
        </p>
        <h2>3. Why we collect it</h2>
        <ul>
          <li>To provide your account and save your progress.</li>
          <li>To keep the service secure (for example, rate limiting and investigating abuse).</li>
          <li>To produce aggregated, anonymous statistics that help us improve lessons.</li>
        </ul>
        <h2>4. Cookies</h2>
        <p>
          We use one essential session cookie to keep you signed in. There are no advertising or
          tracking cookies and no third-party analytics. Embedded YouTube videos load only if you
          click play, and then YouTube&apos;s privacy policy applies to that video.
        </p>
        <h2>5. Sharing</h2>
        <p>We never sell your data. We use these service providers to run the site:</p>
        <ul>
          <li>Render — hosting.</li>
          <li>MongoDB Atlas — database.</li>
        </ul>
        <p>If we add an email or error-monitoring provider, it will be listed here first.</p>
        <h2>6. Retention</h2>
        <p>
          Account data is kept until you delete your account. Server logs are kept for no more than
          30 days.
        </p>
        <h2>7. Your rights</h2>
        <p>
          From your account page you can export all your data as JSON and permanently delete your
          account, which removes your progress, attempts and sessions. Contact us for anything else.
        </p>
        <h2>8. Children</h2>
        <p>
          Learn-To-Fly is not directed at children under 13. If you are under 13, please do not
          create an account.
        </p>
        <h2>9. Changes to this policy</h2>
        <p>
          If this policy changes, we will update the date at the top of this page and describe
          significant changes on the site.
        </p>
      </Prose>
    </PageContainer>
  );
}
