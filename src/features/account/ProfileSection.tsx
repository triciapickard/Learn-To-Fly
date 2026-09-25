import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/Button';
import { Card, CardBody, CardHeader } from '@/components/Card';
import { FormField } from '@/components/FormField';
import { Input } from '@/components/Input';
import { useToast } from '@/components/Toast';
import { useUpdateMe } from '@/features/auth/api';
import { applyServerErrors } from '@/features/auth/formErrors';
import { DisplayNameSchema, type UserDto } from '@shared/schemas/auth';

const ProfileSchema = z.object({ displayName: DisplayNameSchema });
type ProfileInput = z.input<typeof ProfileSchema>;

export function ProfileSection({ user }: { user: UserDto }) {
  const updateMe = useUpdateMe();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isDirty },
    reset,
  } = useForm<ProfileInput>({
    resolver: zodResolver(ProfileSchema),
    values: { displayName: user.displayName },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      const { user: updated } = await updateMe.mutateAsync(values);
      reset({ displayName: updated.displayName });
      toast('Profile saved.', 'success');
    } catch (error) {
      const message = applyServerErrors(error, setError, ['displayName']);
      if (message) toast(message, 'error');
    }
  });

  return (
    <Card>
      <CardHeader>
        <h2 id="profile-heading" className="text-xl font-semibold">
          Profile
        </h2>
      </CardHeader>
      <CardBody>
        <form
          onSubmit={onSubmit}
          noValidate
          aria-labelledby="profile-heading"
          className="flex flex-col gap-4"
        >
          <FormField
            id="account-displayName"
            label="Display name"
            error={errors.displayName?.message}
          >
            <Input autoComplete="nickname" {...register('displayName')} />
          </FormField>
          <FormField id="account-email" label="Email" hint="Email changes aren't available yet.">
            <Input type="email" value={user.email} readOnly />
          </FormField>
          <div>
            <Button type="submit" loading={updateMe.isPending} disabled={!isDirty}>
              Save profile
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
