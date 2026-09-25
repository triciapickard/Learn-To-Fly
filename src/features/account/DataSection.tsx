import { Download } from 'lucide-react';
import { useState } from 'react';
import { Button, buttonClasses } from '@/components/Button';
import { Card, CardBody, CardHeader } from '@/components/Card';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/Dialog';
import { ErrorSummary } from '@/components/ErrorSummary';
import { FormField } from '@/components/FormField';
import { Input } from '@/components/Input';
import { PasswordInput } from '@/components/PasswordInput';
import { useDeleteAccount } from '@/features/auth/api';
import { ApiError } from '@/lib/apiClient';
import { hardNavigate } from '@/lib/navigation';
import { API_BASE_PATH } from '@shared/constants';

/** Export my data and delete my account (US-21, Section 20.10). */
export function DataSection() {
  const deleteAccount = useDeleteAccount();
  const [confirm, setConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const ready = confirm === 'DELETE' && password.length > 0;

  const onDelete = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    try {
      await deleteAccount.mutateAsync({ confirm: 'DELETE', password });
      hardNavigate.to('/account-deleted');
    } catch (e) {
      setError(
        e instanceof ApiError && e.details[0]
          ? e.details[0].message
          : 'Could not delete your account. Please try again.',
      );
    }
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">Your data</h2>
      </CardHeader>
      <CardBody className="flex flex-col gap-6">
        <div>
          <h3 className="font-semibold">Export</h3>
          <p className="mt-1 text-muted">Download everything we store about you as a JSON file.</p>
          <a
            href={`${API_BASE_PATH}/me/export`}
            download
            className={buttonClasses({ variant: 'secondary', className: 'mt-3' })}
          >
            <Download aria-hidden className="size-4" /> Export my data
          </a>
        </div>
        <div>
          <h3 className="font-semibold">Delete account</h3>
          <p className="mt-1 text-muted">
            Permanently deletes your account, progress, challenge attempts and notes, and signs you
            out everywhere. This cannot be undone.
          </p>
          <Dialog
            onOpenChange={(open) => {
              if (!open) {
                setConfirm('');
                setPassword('');
                setError(null);
              }
            }}
          >
            <DialogTrigger asChild>
              <Button variant="danger" className="mt-3">
                Delete my account
              </Button>
            </DialogTrigger>
            <DialogContent
              title="Delete your account?"
              description="Everything will be permanently deleted. Type DELETE and enter your password to confirm."
            >
              <form onSubmit={onDelete} className="flex flex-col gap-4" noValidate>
                <ErrorSummary errors={error ? [{ message: error }] : []} />
                <FormField id="delete-confirm" label='Type "DELETE" to confirm'>
                  <Input
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    autoComplete="off"
                  />
                </FormField>
                <FormField id="delete-password" label="Password">
                  <PasswordInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                </FormField>
                <div className="flex flex-wrap justify-end gap-2">
                  <DialogClose asChild>
                    <Button variant="secondary">Cancel</Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    variant="danger"
                    disabled={!ready}
                    loading={deleteAccount.isPending}
                  >
                    Delete permanently
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardBody>
    </Card>
  );
}
