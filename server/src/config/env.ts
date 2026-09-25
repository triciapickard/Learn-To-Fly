import dotenv from 'dotenv';
import { z } from 'zod';

const booleanString = z
  .enum(['true', 'false', '1', '0'])
  .transform((value) => value === 'true' || value === '1');

export const EnvSchema = z
  .object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    PORT: z.coerce.number().int().min(1).max(65535).default(3000),
    MONGODB_URI: z
      .string({ error: 'MONGODB_URI is required (e.g. mongodb://localhost:27017/learntofly)' })
      .regex(/^mongodb(\+srv)?:\/\//, 'MONGODB_URI must start with mongodb:// or mongodb+srv://'),
    SESSION_SECRET: z
      .string({ error: 'SESSION_SECRET is required (at least 32 characters)' })
      .min(32, 'SESSION_SECRET must be at least 32 characters'),
    SESSION_NAME: z.string().min(1).default('ltf.sid'),
    PUBLIC_SITE_URL: z.url().optional(),
    TRUST_PROXY: z.coerce.number().int().min(0).default(0),
    LOG_LEVEL: z
      .enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent'])
      .default('info'),
    RATE_LIMIT_ENABLED: booleanString.default(true),
    GIT_SHA: z.string().optional(),
    SENTRY_DSN: z.string().optional(),
    EMAIL_PROVIDER_API_KEY: z.string().optional(),
    EMAIL_FROM: z.string().optional(),
  })
  .superRefine((env, ctx) => {
    if (env.NODE_ENV === 'production' && !env.PUBLIC_SITE_URL) {
      ctx.addIssue({
        code: 'custom',
        path: ['PUBLIC_SITE_URL'],
        message: 'PUBLIC_SITE_URL is required in production',
      });
    }
  });

export type Env = z.infer<typeof EnvSchema>;

export class EnvError extends Error {
  constructor(public readonly issues: string[]) {
    super(`Invalid environment configuration:\n${issues.map((i) => `  - ${i}`).join('\n')}`);
    this.name = 'EnvError';
  }
}

/** Treat empty strings (common in .env files) as "not set". */
function withoutEmpty(source: NodeJS.ProcessEnv): Record<string, string> {
  return Object.fromEntries(
    Object.entries(source).filter((entry): entry is [string, string] => entry[1] !== ''),
  );
}

/** Parses and validates environment variables. Throws `EnvError` with readable issues. */
export function parseEnv(source: NodeJS.ProcessEnv = process.env): Env {
  const input = withoutEmpty(source);
  // Render exposes the deployed commit as RENDER_GIT_COMMIT.
  input.GIT_SHA ??= input.RENDER_GIT_COMMIT as string;
  if (input.GIT_SHA === undefined) delete input.GIT_SHA;
  const result = EnvSchema.safeParse(input);
  if (!result.success) {
    throw new EnvError(
      result.error.issues.map((issue) => {
        const key = issue.path.join('.');
        return key && !issue.message.startsWith(key) ? `${key}: ${issue.message}` : issue.message;
      }),
    );
  }
  return result.data;
}

/** Loads `.env` outside production, then validates. Exits the process on invalid config. */
export function loadEnv(): Env {
  if (process.env.NODE_ENV !== 'production') dotenv.config({ quiet: true });
  try {
    return parseEnv();
  } catch (error) {
    if (error instanceof EnvError) {
      console.error(error.message);
      process.exit(1);
    }
    throw error;
  }
}
