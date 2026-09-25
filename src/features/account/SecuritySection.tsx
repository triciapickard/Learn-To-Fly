import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/Button';
import { Card, CardBody, CardHeader } from '@/components/Card';
import { ErrorSummary } from '@/components/ErrorSummary';
import { FormField } from '@/components/FormField';
import { PasswordInput } from '@/components/PasswordInput';
import { useToast } from '@/components/Toast';
import { useChangePassword } from '@/features/auth/api';
import { applyServerErrors } from '@/features/auth/formErrors';
import { ChangePasswordSchema, type ChangePasswordInput } from '@shared/schemas/auth';

export function SecuritySection() {
  const changePassword = useChangePassword();
  const { toast } = useToast();
  const [formError, setFormError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<ChangePasswordInput>({ resolver: zodResolver(ChangePasswordSchema) });

  const onSubmit = handleSubmit(async (values) => {
    setFormError(null);
    try {
      await changePassword.mutateAsync(values);
      reset({ currentPassword: '', newPassword: '' });
      toast('Password changed. You have been signed out on your other devices.', 'success');
    } catch (error) {
      setFormError(applyServerErrors(error, setError, ['currentPassword', 'newPassword']));
    }
  });

  return (
    <Card>
      <CardHeader>
        <h2 id="security-heading" className="text-xl font-semibold">
          Security
        </h2>
      </CardHeader>
      <CardBody>
        <form
          onSubmit={onSubmit}
          noValidate
          aria-labelledby="security-heading"
          className="flex flex-col gap-4"
        >
          <ErrorSummary errors={formError ? [{ message: formError }] : []} />
          <FormField
            id="account-currentPassword"
            label="Current password"
            error={errors.currentPassword?.message}
          >
            <PasswordInput autoComplete="current-password" {...register('currentPassword')} />
          </FormField>
          <FormField
            id="account-newPassword"
            label="New password"
            hint="At least 12 characters."
            error={errors.newPassword?.message}
          >
            <PasswordInput autoComplete="new-password" {...register('newPassword')} />
          </FormField>
          <div>
            <Button type="submit" loading={changePassword.isPending}>
              Change password
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
