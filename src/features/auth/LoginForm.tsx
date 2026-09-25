import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { ErrorSummary, type SummaryError } from '@/components/ErrorSummary';
import { FormField } from '@/components/FormField';
import { Input } from '@/components/Input';
import { Link } from '@/components/Link';
import { PasswordInput } from '@/components/PasswordInput';
import { safeReturnTo } from '@/lib/safeRedirect';
import { LoginSchema, type LoginInput } from '@shared/schemas/auth';
import { useLogin } from './api';
import { applyServerErrors, summaryFromFieldErrors } from './formErrors';

const FIELDS = ['email', 'password'] as const;

export function LoginForm() {
  const [params] = useSearchParams();
  const returnTo = safeReturnTo(params.get('returnTo'));
  const navigate = useNavigate();
  const login = useLogin();
  const [formError, setFormError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitted },
  } = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { remember: false },
  });

  const onSubmit = handleSubmit(
    async (values) => {
      setFormError(null);
      try {
        await login.mutateAsync(values);
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
    ...(isSubmitted ? summaryFromFieldErrors(errors, [...FIELDS], 'login') : []),
  ];

  const signupHref = params.get('returnTo')
    ? `/signup?returnTo=${encodeURIComponent(returnTo)}`
    : '/signup';

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <ErrorSummary errors={summary} focusKey={attempt} />
      <FormField id="login-email" label="Email" error={errors.email?.message}>
        <Input type="email" autoComplete="email" {...register('email')} />
      </FormField>
      <FormField id="login-password" label="Password" error={errors.password?.message}>
        <PasswordInput autoComplete="current-password" {...register('password')} />
      </FormField>
      <Checkbox
        label="Remember me for 30 days"
        hint="Don't tick this on a shared computer."
        {...register('remember')}
      />
      <Button type="submit" size="lg" loading={login.isPending}>
        Log in
      </Button>
      <p className="text-center text-muted">
        New here? <Link to={signupHref}>Create a free account</Link>
      </p>
    </form>
  );
}
