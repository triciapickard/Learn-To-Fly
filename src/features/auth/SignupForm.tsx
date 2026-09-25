import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { ErrorSummary, type SummaryError } from '@/components/ErrorSummary';
import { FormField } from '@/components/FormField';
import { Input } from '@/components/Input';
import { Link } from '@/components/Link';
import { PasswordInput } from '@/components/PasswordInput';
import { safeReturnTo } from '@/lib/safeRedirect';
import { RegisterSchema, type RegisterInput } from '@shared/schemas/auth';
import { useRegister } from './api';
import { applyServerErrors, summaryFromFieldErrors } from './formErrors';
import { PasswordStrengthMeter } from './PasswordStrengthMeter';

const FIELDS = ['displayName', 'email', 'password', 'acceptTerms'] as const;

export function SignupForm() {
  const [params] = useSearchParams();
  const returnTo = safeReturnTo(params.get('returnTo'));
  const navigate = useNavigate();
  const registerUser = useRegister();
  const [formError, setFormError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors, isSubmitted },
  } = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { displayName: '', email: '', password: '' },
  });
  const password = useWatch({ control, name: 'password' }) ?? '';

  const onSubmit = handleSubmit(
    async (values) => {
      setFormError(null);
      try {
        await registerUser.mutateAsync(values);
        navigate(returnTo, { replace: true });
      } catch (error) {
        setFormError(applyServerErrors(error, setError, [...FIELDS]));
        setAttempt((n) => n + 1);
      }
    },
    () => setAttempt((n) => n + 1),
  );

  const summary: SummaryError[] = [
    ...(formError ? [{ message: formError }] : []),
    ...(isSubmitted ? summaryFromFieldErrors(errors, [...FIELDS], 'signup') : []),
  ];

  const loginHref = params.get('returnTo')
    ? `/login?returnTo=${encodeURIComponent(returnTo)}`
    : '/login';

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <ErrorSummary errors={summary} focusKey={attempt} />
      <FormField
        id="signup-displayName"
        label="Display name"
        hint="Shown on your dashboard. 2–40 characters."
        error={errors.displayName?.message}
      >
        <Input autoComplete="nickname" {...register('displayName')} />
      </FormField>
      <FormField id="signup-email" label="Email" error={errors.email?.message}>
        <Input type="email" autoComplete="email" {...register('email')} />
      </FormField>
      <FormField
        id="signup-password"
        label="Password"
        hint="At least 12 characters. A few random words make a strong, memorable password."
        error={errors.password?.message}
      >
        <PasswordInput autoComplete="new-password" {...register('password')} />
      </FormField>
      <PasswordStrengthMeter password={password} id="signup-password-strength" />
      <Checkbox
        id="signup-acceptTerms"
        label={
          <>
            I understand this is for simulation only and agree to the{' '}
            <Link to="/terms" target="_blank">
              Terms
            </Link>
            .
          </>
        }
        error={errors.acceptTerms?.message}
        {...register('acceptTerms')}
      />
      <Button type="submit" size="lg" loading={registerUser.isPending}>
        Create account
      </Button>
      <p className="text-center text-muted">
        Already have an account? <Link to={loginHref}>Log in</Link>
      </p>
    </form>
  );
}
