import { createHash } from 'node:crypto';

/** Emails in audit logs are hashed so logs never contain them in plain text (Section 34.3). */
export function hashEmail(email: string): string {
  return createHash('sha256').update(email.trim().toLowerCase()).digest('hex').slice(0, 16);
}
