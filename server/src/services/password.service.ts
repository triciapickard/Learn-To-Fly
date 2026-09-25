import { readFileSync } from 'node:fs';
import path from 'node:path';
import argon2 from 'argon2';

/**
 * argon2id with library defaults (~200 ms per hash). Tests use a much cheaper setting so
 * the suite stays fast; production never does.
 */
const hashOptions: argon2.HashOptions & { raw?: false } =
  process.env.NODE_ENV === 'test'
    ? { type: argon2.argon2id, memoryCost: 1024, timeCost: 2, parallelism: 1 }
    : { type: argon2.argon2id };

export function hashPassword(password: string): Promise<string> {
  return argon2.hash(password, hashOptions);
}

export async function verifyPassword(hash: string, password: string): Promise<boolean> {
  try {
    return await argon2.verify(hash, password);
  } catch {
    return false;
  }
}

let dummyHash: Promise<string> | undefined;

/** Verify against a throwaway hash so unknown emails take about as long as real ones. */
export async function verifyDummy(password: string): Promise<false> {
  dummyHash ??= hashPassword('this-is-not-a-real-password-hash');
  await verifyPassword(await dummyHash, password);
  return false;
}

let commonPasswords: Set<string> | undefined;

function loadCommonPasswords(): Set<string> {
  const file = path.resolve(process.cwd(), 'server/src/data/common-passwords.txt');
  const lines = readFileSync(file, 'utf8').split('\n');
  return new Set(
    lines.map((l) => l.trim().toLowerCase()).filter((l) => l.length > 0 && !l.startsWith('#')),
  );
}

/** True if the password appears in the top-10k common password list (case-insensitive). */
export function isCommonPassword(password: string): boolean {
  commonPasswords ??= loadCommonPasswords();
  return commonPasswords.has(password.trim().toLowerCase());
}
