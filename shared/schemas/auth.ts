import { z } from 'zod';

/** Auth and account schemas shared by the server (validation) and client (forms). */

export const PASSWORD_MIN = 12;
export const PASSWORD_MAX = 128;

export const EmailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(1, 'Enter your email address.')
  .max(254, 'Email addresses can be at most 254 characters.')
  .pipe(z.email('Enter a valid email address.'));

export const NewPasswordSchema = z
  .string()
  .min(PASSWORD_MIN, `Use at least ${PASSWORD_MIN} characters.`)
  .max(PASSWORD_MAX, `Use at most ${PASSWORD_MAX} characters.`);

export const DisplayNameSchema = z
  .string()
  .trim()
  .min(2, 'Use at least 2 characters.')
  .max(40, 'Use at most 40 characters.');

export const RegisterSchema = z
  .object({
    displayName: DisplayNameSchema,
    email: EmailSchema,
    password: NewPasswordSchema,
    acceptTerms: z.literal(true, {
      error: 'Please confirm you understand this is for simulation only and agree to the Terms.',
    }),
  })
  .refine((data) => data.password.toLowerCase() !== data.email, {
    path: ['password'],
    message: 'Your password must not be your email address.',
  });
export type RegisterInput = z.input<typeof RegisterSchema>;

export const LoginSchema = z.object({
  email: EmailSchema,
  password: z.string().min(1, 'Enter your password.').max(PASSWORD_MAX),
  remember: z.boolean().default(false),
});
export type LoginInput = z.input<typeof LoginSchema>;

export const ChangePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, 'Enter your current password.').max(PASSWORD_MAX),
    newPassword: NewPasswordSchema,
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    path: ['newPassword'],
    message: 'Choose a password different from your current one.',
  });
export type ChangePasswordInput = z.input<typeof ChangePasswordSchema>;

export const DeleteAccountSchema = z.object({
  confirm: z.literal('DELETE', { error: 'Type DELETE to confirm.' }),
  password: z.string().min(1, 'Enter your password.').max(PASSWORD_MAX),
});
export type DeleteAccountInput = z.input<typeof DeleteAccountSchema>;

export const THEMES = ['system', 'light', 'dark'] as const;
export const COCKPIT_VARIANTS = ['g1000', 'classic'] as const;
export const CONTROLLERS = ['gamepad', 'stick', 'yoke', 'unknown'] as const;

export const PreferencesSchema = z.object({
  theme: z.enum(THEMES),
  cockpitVariant: z.enum(COCKPIT_VARIANTS),
  controller: z.enum(CONTROLLERS),
  showBonus: z.boolean(),
});
export type Preferences = z.infer<typeof PreferencesSchema>;

export const UpdateMeSchema = z
  .object({
    displayName: DisplayNameSchema.optional(),
    preferences: PreferencesSchema.partial().strict().optional(),
  })
  .strict()
  .refine((data) => data.displayName !== undefined || data.preferences !== undefined, {
    message: 'Nothing to update.',
  });
export type UpdateMeInput = z.input<typeof UpdateMeSchema>;

/** The user as returned by the API. Never includes the password hash. */
export const UserDtoSchema = z.object({
  id: z.string(),
  email: z.string(),
  displayName: z.string(),
  role: z.enum(['learner', 'admin']),
  preferences: PreferencesSchema,
  createdAt: z.string(),
});
export type UserDto = z.infer<typeof UserDtoSchema>;

export interface MeResponse {
  user: UserDto | null;
}
export interface AuthResponse {
  user: UserDto;
  csrfToken: string;
}
export interface CsrfResponse {
  csrfToken: string;
}
