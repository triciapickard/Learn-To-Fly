import { useState, type ReactNode } from 'react';
import { Badge, type BadgeVariant } from '@/components/Badge';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/Button';
import { Callout, type CalloutType } from '@/components/Callout';
import { Card, CardBody, CardFooter, CardHeader } from '@/components/Card';
import {
  CHALLENGE_TYPES,
  DifficultyDots,
  TierBadge,
  TypeIcon,
  type Tier,
} from '@/components/ChallengeMeta';
import { Checkbox } from '@/components/Checkbox';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/Dialog';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/Drawer';
import { FormField } from '@/components/FormField';
import { Input } from '@/components/Input';
import { KeyNumbers } from '@/components/KeyNumbers';
import { ExternalLink, Link } from '@/components/Link';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { PasswordInput } from '@/components/PasswordInput';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { ProgressBar, ProgressRing } from '@/components/Progress';
import { RadioGroup } from '@/components/RadioGroup';
import { Select } from '@/components/Select';
import { LoadingRegion, Skeleton } from '@/components/Skeleton';
import { EmptyState, ErrorState } from '@/components/States';
import { Stopwatch } from '@/components/Stopwatch';
import { Table } from '@/components/Table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/Tabs';
import { Textarea } from '@/components/Textarea';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useToast } from '@/components/Toast';
import { Tooltip } from '@/components/Tooltip';
import { usePageTitle } from '@/hooks/usePageTitle';

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={`dev-${title}`} className="border-t border-border py-8">
      <h2 id={`dev-${title}`} className="mb-4 text-2xl font-bold">
        {title}
      </h2>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}

const BADGES: BadgeVariant[] = [
  'neutral',
  'info',
  'complete',
  'in-progress',
  'warning',
  'danger',
  'gold',
  'silver',
  'bronze',
  'bonus',
];
const CALLOUTS: CalloutType[] = ['safety', 'sim', 'classic', 'tip', 'verify', 'note'];
const TIERS: Tier[] = ['gold', 'silver', 'bronze', 'none'];
const ATTEMPTS = [
  { id: '1', date: '20 May', tier: 'gold' as Tier, percent: 96 },
  { id: '2', date: '18 May', tier: 'silver' as Tier, percent: 81 },
];

/** Development-only showcase of every component and state (step 3.19). */
export default function DevComponentsPage() {
  usePageTitle('Components');
  const { toast } = useToast();
  const [radio, setRadio] = useState('gold');
  return (
    <PageContainer>
      <PageHeader
        title="Component library"
        description="Every core component in every state. Development builds only."
      >
        <div className="flex items-center gap-2">
          Theme: <ThemeToggle />
        </div>
      </PageHeader>

      <Section title="Buttons">
        {(['primary', 'secondary', 'ghost', 'danger'] as const).map((variant) => (
          <div key={variant} className="flex flex-wrap items-center gap-3">
            <Button variant={variant} size="sm">
              {variant} sm
            </Button>
            <Button variant={variant}>{variant} md</Button>
            <Button variant={variant} size="lg">
              {variant} lg
            </Button>
            <Button variant={variant} loading>
              Saving
            </Button>
            <Button variant={variant} disabled>
              Disabled
            </Button>
          </div>
        ))}
        <Button asChild variant="secondary">
          <Link unstyled to="/learn">
            Button as a link
          </Link>
        </Button>
      </Section>

      <Section title="Links">
        <p>
          <Link to="/learn">Internal link</Link> and{' '}
          <ExternalLink href="https://www.faa.gov">external link</ExternalLink>.
        </p>
      </Section>

      <Section title="Cards">
        <Card className="max-w-md">
          <CardHeader>
            <h3 className="font-semibold">Card header</h3>
          </CardHeader>
          <CardBody>Card body content.</CardBody>
          <CardFooter>
            <Button size="sm">Action</Button>
          </CardFooter>
        </Card>
      </Section>

      <Section title="Badges">
        <div className="flex flex-wrap gap-2">
          {BADGES.map((v) => (
            <Badge key={v} variant={v}>
              {v}
            </Badge>
          ))}
        </div>
      </Section>

      <Section title="Callouts">
        {CALLOUTS.map((type) => (
          <Callout key={type} type={type}>
            <p>
              This is a {type} callout. Keep callouts short and use at most one of each per section.
            </p>
          </Callout>
        ))}
      </Section>

      <Section title="Form controls">
        <div className="grid max-w-xl gap-4">
          <FormField label="Display name" hint="2–40 characters." required>
            <Input placeholder="Sam" />
          </FormField>
          <FormField label="Email" error="Enter a valid email address.">
            <Input type="email" defaultValue="not-an-email" />
          </FormField>
          <FormField label="Password" hint="At least 12 characters.">
            <PasswordInput autoComplete="new-password" />
          </FormField>
          <FormField label="Notes">
            <Textarea placeholder="What went well?" />
          </FormField>
          <FormField label="Controller">
            <Select defaultValue="gamepad">
              <option value="gamepad">Gamepad</option>
              <option value="stick">Joystick</option>
              <option value="yoke">Yoke</option>
            </Select>
          </FormField>
          <FormField label="Disabled">
            <Input disabled value="Read only" />
          </FormField>
          <Checkbox label="I understand this is for simulation only and agree to the Terms." />
          <Checkbox label="Required checkbox" error="You must accept the terms." />
          <RadioGroup
            label="Final approach speed"
            value={radio}
            onValueChange={setRadio}
            options={[
              { value: 'gold', label: 'Gold', description: '65 KIAS −5/+10' },
              { value: 'silver', label: 'Silver', description: '65 KIAS ±10' },
              { value: 'bronze', label: 'Bronze', description: '65 KIAS ±15' },
              { value: 'not_met', label: 'Not met' },
            ]}
          />
          <RadioGroup
            label="Horizontal with error"
            orientation="horizontal"
            error="Choose one."
            options={[
              { value: 'met', label: 'Met' },
              { value: 'not_met', label: 'Not met' },
              { value: 'na', label: 'Disabled', disabled: true },
            ]}
          />
        </div>
      </Section>

      <Section title="Tabs">
        <Tabs defaultValue="brief">
          <TabsList aria-label="Challenge">
            <TabsTrigger value="brief">Brief</TabsTrigger>
            <TabsTrigger value="fly">Fly</TabsTrigger>
            <TabsTrigger value="debrief">Debrief</TabsTrigger>
            <TabsTrigger value="history" disabled>
              History
            </TabsTrigger>
          </TabsList>
          <TabsContent value="brief">Brief content.</TabsContent>
          <TabsContent value="fly">Fly content.</TabsContent>
          <TabsContent value="debrief">Debrief content.</TabsContent>
        </Tabs>
      </Section>

      <Section title="Overlays">
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Open dialog</Button>
            </DialogTrigger>
            <DialogContent title="Delete account?" description="This cannot be undone.">
              <div className="flex justify-end gap-2">
                <DialogClose asChild>
                  <Button variant="secondary">Cancel</Button>
                </DialogClose>
                <Button variant="danger">Delete</Button>
              </div>
            </DialogContent>
          </Dialog>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="secondary">Open drawer</Button>
            </DrawerTrigger>
            <DrawerContent title="Drawer">Drawer content.</DrawerContent>
          </Drawer>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <p className="font-semibold">Vy</p>
              <p className="text-muted">Best rate of climb speed.</p>
            </PopoverContent>
          </Popover>
          <Tooltip content="Best rate of climb">
            <Button variant="ghost">Hover or focus for tooltip</Button>
          </Tooltip>
          <Button variant="secondary" onClick={() => toast('Lesson marked complete.', 'success')}>
            Show toast
          </Button>
          <Button variant="secondary" onClick={() => toast('Could not save. Try again.', 'error')}>
            Show error toast
          </Button>
        </div>
      </Section>

      <Section title="Progress">
        <ProgressBar
          value={3}
          max={5}
          label="Module 2 progress"
          valueText="3 of 5 lessons"
          showValue
        />
        <div className="flex gap-4">
          <ProgressRing value={0} label="Not started" />
          <ProgressRing value={45} label="In progress" />
          <ProgressRing value={100} label="Complete" />
        </div>
      </Section>

      <Section title="Loading, empty and error states">
        <LoadingRegion label="Loading lessons" className="flex max-w-md flex-col gap-2">
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </LoadingRegion>
        <EmptyState
          title="No challenges match these filters"
          action={<Button variant="secondary">Clear filters</Button>}
        />
        <ErrorState onRetry={() => toast('Retrying…')} />
      </Section>

      <Section title="Table">
        <Table
          caption="Attempt history"
          rows={ATTEMPTS}
          rowKey={(r) => r.id}
          columns={[
            { key: 'date', header: 'Date', cell: (r) => r.date },
            { key: 'tier', header: 'Tier', cell: (r) => <TierBadge tier={r.tier} /> },
            { key: 'percent', header: 'Score', numeric: true, cell: (r) => `${r.percent}%` },
          ]}
        />
      </Section>

      <Section title="Breadcrumbs">
        <Breadcrumbs
          items={[
            { label: 'Learn', to: '/learn' },
            { label: 'Module 4', to: '/learn/m4-takeoffs-patterns-landings' },
            { label: 'Normal approach and landing' },
          ]}
        />
      </Section>

      <Section title="Challenge metadata">
        <div className="flex flex-wrap items-center gap-4">
          {[1, 3, 5].map((d) => (
            <DifficultyDots key={d} value={d} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {TIERS.map((t) => (
            <TierBadge key={t} tier={t} />
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {CHALLENGE_TYPES.map((t) => (
            <TypeIcon key={t} type={t} />
          ))}
        </div>
      </Section>

      <Section title="Stopwatch and key numbers">
        <Stopwatch />
        <KeyNumbers
          className="max-w-md"
          items={[
            { label: 'Vr', value: '55', unit: 'KIAS' },
            { label: 'Vx', value: '62', unit: 'KIAS' },
            { label: 'Vy', value: '74', unit: 'KIAS' },
            { label: 'Approach', value: '65', unit: 'KIAS' },
          ]}
        />
      </Section>
    </PageContainer>
  );
}
