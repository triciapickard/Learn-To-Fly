import { Copy, ExternalLink } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Button } from '@/components/Button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/Dialog';
import { FormField } from '@/components/FormField';
import { RadioGroup } from '@/components/RadioGroup';
import { Textarea } from '@/components/Textarea';
import { useToast } from '@/components/Toast';
import {
  buildIssueUrl,
  formatDiagnostics,
  formatReportText,
  REPORT_KIND_LABELS,
  REPORT_KINDS,
  type ReportKind,
} from './report';
import { useReportContext } from './useReportContext';

export interface ReportProblemDialogProps {
  /** The element that opens the dialog (rendered with `asChild`). */
  trigger: ReactNode;
  /** Pre-selected kind, e.g. `bug` from the error page. */
  defaultKind?: ReportKind;
  /** The caught error, when opened from the error page. */
  error?: unknown;
}

/**
 * "Report a problem" (beta feedback). Reports become GitHub issues: the dialog collects the
 * kind and a description, then opens GitHub's issue form pre-filled with those and a block of
 * non-identifying diagnostics. People without a GitHub account can copy the report instead.
 */
export function ReportProblemDialog({
  trigger,
  defaultKind = 'bug',
  error,
}: ReportProblemDialogProps) {
  const [open, setOpen] = useState(false);
  const [kind, setKind] = useState<ReportKind>(defaultKind);
  const [description, setDescription] = useState('');
  const [touched, setTouched] = useState(false);
  const context = useReportContext(error);
  const { toast } = useToast();

  const missing = description.trim().length === 0;
  const fieldError = touched && missing ? 'Please describe the problem first.' : undefined;
  const report = { kind, description, context };

  const openOnGitHub = () => {
    setTouched(true);
    if (missing) return;
    window.open(buildIssueUrl(report), '_blank', 'noopener,noreferrer');
    setOpen(false);
    toast({
      title: 'GitHub opened in a new tab.',
      description: 'Check the pre-filled form, then press "Create" to send the report.',
      tone: 'success',
    });
  };

  const copy = async () => {
    setTouched(true);
    if (missing) return;
    try {
      await navigator.clipboard.writeText(formatReportText(report));
      toast('Report copied.', 'success');
    } catch {
      toast({
        title: 'Could not copy.',
        description: 'Select the text and copy it by hand.',
        tone: 'error',
      });
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) setTouched(false);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        title="Report a problem"
        description="Learn to Fly is in public beta. Reports are filed as public GitHub issues; please leave out passwords and personal details."
        className="max-w-[520px]"
      >
        <form
          className="flex flex-col gap-5"
          onSubmit={(event) => {
            event.preventDefault();
            openOnGitHub();
          }}
        >
          <RadioGroup
            label="What kind of problem?"
            variant="plain"
            value={kind}
            onValueChange={(value) => setKind(value as ReportKind)}
            options={REPORT_KINDS.map((value) => ({
              value,
              label: REPORT_KIND_LABELS[value].label,
            }))}
          />
          <FormField
            label="What happened?"
            hint="What you did, what you expected and what you saw instead."
            error={fieldError}
            required
          >
            <Textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={5}
              maxLength={4000}
              placeholder="I pressed Start on Challenge 2 and the page went blank."
            />
          </FormField>
          <details className="text-sm leading-5 text-ink-2">
            <summary className="cursor-pointer rounded-sm font-medium text-ink">
              Technical details included with the report
            </summary>
            <pre className="mt-2 overflow-x-auto rounded-md bg-surface-sunken p-3 text-xs leading-5 whitespace-pre-wrap">
              {formatDiagnostics(context)}
            </pre>
          </details>
          <div className="flex flex-wrap items-center justify-end gap-2">
            <Button type="button" variant="ghost" onClick={copy}>
              <Copy aria-hidden strokeWidth={1.75} />
              Copy report
            </Button>
            <Button type="submit">
              <ExternalLink aria-hidden strokeWidth={1.75} />
              Continue on GitHub
            </Button>
          </div>
          <p className="text-xs leading-5 text-ink-2">
            A GitHub account is needed to file an issue. Without one, copy the report and send it
            another way.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
