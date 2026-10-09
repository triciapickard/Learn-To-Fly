import { ArrowRight, Clock, Lock, Search } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Badge, type BadgeVariant } from '@/components/Badge';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/Button';
import { Callout, type CalloutType } from '@/components/Callout';
import { Card, CardBody, CardFooter, CardHeader } from '@/components/Card';
import {
  CHALLENGE_TYPES,
  ChallengeMeta,
  DifficultyDots,
  TierBadge,
  TypeIcon,
  type Tier,
} from '@/components/ChallengeMeta';
import { Checkbox } from '@/components/Checkbox';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/Dialog';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/Drawer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/DropdownMenu';
import { ErrorSummary } from '@/components/ErrorSummary';
import { FormField } from '@/components/FormField';
import { Input } from '@/components/Input';
import { KeyNumbers } from '@/components/KeyNumbers';
import { LessonPath } from '@/components/LessonPath';
import { ExternalLink, Link } from '@/components/Link';
import { Logo } from '@/components/Logo';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { PasswordInput } from '@/components/PasswordInput';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { ProgressBar, ProgressRing } from '@/components/Progress';
import { Prose } from '@/components/Prose';
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

function Section({ title, note, children }: { title: string; note?: string; children: ReactNode }) {
  const id = `dev-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  return (
    <section aria-labelledby={id} className="border-t border-line py-10">
      <h2 id={id} className="heading-lg">
        {title}
      </h2>
      {note && <p className="mt-1 text-sm leading-5 text-ink-2">{note}</p>}
      <div className="mt-6 flex flex-col gap-5">{children}</div>
    </section>
  );
}

function Row({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`flex flex-wrap items-center gap-3 ${className ?? ''}`}>{children}</div>;
}

const BUTTONS = ['primary', 'secondary', 'ghost', 'accent', 'danger'] as const;
const BADGES: BadgeVariant[] = ['neutral', 'accent', 'go', 'caution', 'warn', 'outline'];
const CALLOUTS: CalloutType[] = ['safety', 'sim', 'tip', 'classic', 'note', 'verify'];
const TIERS: Tier[] = ['gold', 'silver', 'bronze', 'none'];
const ATTEMPTS = [
  { id: '1', date: '20 May', tier: 'gold' as Tier, percent: 96 },
  { id: '2', date: '18 May', tier: 'silver' as Tier, percent: 81 },
];
const SPEEDS = [
  { id: 'vr', name: 'VR', meaning: 'Rotate', kias: 55, status: 'go' as BadgeVariant },
  { id: 'vy', name: 'VY', meaning: 'Best rate of climb', kias: 74, status: 'go' as BadgeVariant },
  { id: 'va', name: 'VA', meaning: 'Maneuvering', kias: 105, status: 'accent' as BadgeVariant },
  { id: 'vne', name: 'VNE', meaning: 'Never exceed', kias: 163, status: 'neutral' as BadgeVariant },
];

/** Development-only showcase of every component in every state (step 3.19). */
export default function DevComponentsPage() {
  usePageTitle('Components');
  const { toast } = useToast();
  const [radio, setRadio] = useState('gold');
  const [runway, setRunway] = useState('31');
  return (
    <PageContainer>
      <PageHeader
        crumbs={[{ label: 'Development', to: '/dev/components' }, { label: 'Components' }]}
        eyebrow="Design system 2026"
        title="Component library"
        description="Every core component in every state, on the new tokens. Development builds only."
        actions={
          <>
            <Button variant="secondary" asChild>
              <Link unstyled to="/dev/widgets">
                Widgets
              </Link>
            </Button>
            <Button>
              Fly it <ArrowRight aria-hidden />
            </Button>
          </>
        }
      >
        <Row>
          <span className="label">Theme</span>
          <ThemeToggle />
          <ThemeToggle compact />
        </Row>
      </PageHeader>

      <Section
        title="Logo"
        note="The fin mark in ink with the horizon line stripe, beside the wordmark; and the type-only lockup."
      >
        <Row className="gap-10">
          <Logo />
          <Logo variant="type" />
        </Row>
      </Section>

      <Section
        title="Buttons"
        note="Ink-inverted primary; accent only for forward progress on the lesson path."
      >
        {BUTTONS.map((variant) => (
          <Row key={variant}>
            <Button variant={variant} size="sm">
              {variant} sm
            </Button>
            <Button variant={variant}>{variant} md</Button>
            <Button variant={variant} size="lg">
              {variant} lg
            </Button>
            <Button variant={variant}>
              With icon <ArrowRight aria-hidden />
            </Button>
            <Button variant={variant} loading>
              Saving
            </Button>
            <Button variant={variant} disabled>
              Locked
            </Button>
          </Row>
        ))}
        <Button asChild variant="secondary">
          <Link unstyled to="/learn">
            Button as a link
          </Link>
        </Button>
      </Section>

      <Section title="Links">
        <p>
          Set the altimeter before taxi, then confirm it against{' '}
          <Link to="/reference">field elevation</Link> on the airport page. See the{' '}
          <ExternalLink href="https://www.faa.gov">FAA Airplane Flying Handbook</ExternalLink> for
          the full procedure.
        </p>
        <p className="text-sm leading-5 text-ink-2">
          Quiet links sit in navigation and metadata:{' '}
          <Link to="/learn" quiet>
            Module 3
          </Link>{' '}
          ·{' '}
          <Link to="/challenges" quiet>
            All challenges
          </Link>
        </p>
      </Section>

      <Section title="Cards" note="Default, done, current (one per view) and locked.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card interactive>
            <CardHeader>
              <span className="overline text-ink-2">Lesson 2.0</span>
            </CardHeader>
            <CardBody>
              <h3 className="heading-md">Interactive card</h3>
              <p className="mt-1 text-sm leading-5 text-ink-2">The border rises on hover.</p>
            </CardBody>
          </Card>
          <Card state="done">
            <CardHeader>
              <span className="overline text-ink-2">Lesson 2.1</span>
              <Badge variant="go">Done</Badge>
            </CardHeader>
            <CardBody>
              <h3 className="heading-md">Straight and level</h3>
              <p className="mt-1 text-sm leading-5 text-ink-2">
                Hold altitude and heading with pitch, power and trim.
              </p>
            </CardBody>
            <CardFooter className="text-sm leading-5 text-ink-2">
              <Clock aria-hidden className="size-4" strokeWidth={1.75} /> 20 min
              <Link to="/learn" quiet className="ml-auto">
                Review
              </Link>
            </CardFooter>
          </Card>
          <Card state="current">
            <CardHeader>
              <span className="overline text-accent">Lesson 2.2 · Up next</span>
            </CardHeader>
            <CardBody>
              <h3 className="heading-md">Climbs and descents</h3>
              <p className="mt-1 text-sm leading-5 text-ink-2">
                Pitch for airspeed, power for altitude. Yes, really.
              </p>
            </CardBody>
            <CardFooter className="border-accent-line">
              <Button variant="accent" size="sm">
                Start lesson
              </Button>
            </CardFooter>
          </Card>
          <Card state="locked">
            <CardHeader>
              <span className="overline">Lesson 2.3</span>
              <Lock aria-hidden className="size-4" strokeWidth={1.75} />
            </CardHeader>
            <CardBody>
              <h3 className="heading-md text-ink-2">Turns</h3>
              <p className="mt-1 text-sm leading-5">Unlocks after 2.2.</p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section
        title="Badges"
        note="Status badges carry a word and an icon; tier pills carry the word and a dot."
      >
        <Row>
          {BADGES.map((v) => (
            <Badge key={v} variant={v}>
              {v}
            </Badge>
          ))}
          <Badge variant="outline">P1</Badge>
        </Row>
        <Row>
          {TIERS.map((t) => (
            <TierBadge key={t} tier={t} />
          ))}
          <TierBadge tier="gold" pop />
        </Row>
      </Section>

      <Section title="Callouts">
        <div className="flex max-w-[640px] flex-col gap-3">
          {CALLOUTS.map((type) => (
            <Callout key={type} type={type}>
              <p>
                This is a {type} callout. Keep callouts short and use at most one of each per
                section.
              </p>
            </Callout>
          ))}
        </div>
      </Section>

      <Section title="Forms">
        <ErrorSummary
          errors={[
            { fieldId: 'dev-email', message: 'Enter a valid email address.' },
            { message: 'Check your connection and try again.' },
          ]}
        />
        <div className="grid max-w-3xl gap-5 sm:grid-cols-2">
          <FormField label="Display name" hint="2–40 characters." required>
            <Input placeholder="Sam" />
          </FormField>
          <FormField id="dev-email" label="Email" error="Enter a valid email address.">
            <Input type="email" defaultValue="not-an-email" />
          </FormField>
          <FormField label="Password" hint="At least 12 characters.">
            <PasswordInput autoComplete="new-password" defaultValue="correct horse battery" />
          </FormField>
          <FormField label="Home airport" hint="Set in the curriculum, not here.">
            <Input disabled value="KPAO" readOnly />
          </FormField>
          <FormField label="Aircraft variant">
            <Select defaultValue="g1000">
              <option value="g1000">Skyhawk G1000</option>
              <option value="classic">Skyhawk classic panel</option>
            </Select>
          </FormField>
          <FormField label="Difficulty" hint="Locked while filters are off.">
            <Select disabled defaultValue="any">
              <option value="any">Any</option>
            </Select>
          </FormField>
          <FormField
            label="Debrief notes"
            hint="Optional. Only you see this."
            className="sm:col-span-2"
          >
            <Textarea
              maxLength={500}
              defaultValue="Floated in the flare, touched down long. Next time: hold 65 knots on final."
            />
          </FormField>
        </div>
        <div className="flex max-w-xl flex-col gap-2.5">
          <Checkbox label="Mixture full rich" defaultChecked />
          <Checkbox label="Fuel selector on BOTH" />
          <Checkbox
            label={
              <>
                Flight controls free and correct{' '}
                <span className="text-sm text-ink-2">(2 of 3)</span>
              </>
            }
            indeterminate
          />
          <Checkbox label="Autopilot off (not fitted)" disabled defaultChecked />
          <Checkbox label="Required checkbox" error="You must accept the terms." />
        </div>
        <div className="grid max-w-3xl gap-6 sm:grid-cols-2">
          <RadioGroup
            label="Which runway are you using?"
            value={runway}
            onValueChange={setRunway}
            options={[
              { value: '31', label: 'Runway 31', description: 'Wind 300 at 8. Left traffic.' },
              {
                value: '13',
                label: 'Runway 13',
                description: 'Tailwind today. Pick this only if told to.',
              },
            ]}
          />
          <RadioGroup
            label="Final approach speed"
            value={radio}
            onValueChange={setRadio}
            variant="plain"
            options={[
              { value: 'gold', label: 'Gold, 65 KIAS −5/+10' },
              { value: 'silver', label: 'Silver, 65 KIAS ±10' },
              { value: 'bronze', label: 'Bronze, 65 KIAS ±15' },
              { value: 'na', label: 'Not flown', disabled: true },
            ]}
          />
          <RadioGroup
            label="Horizontal with error"
            orientation="horizontal"
            error="Choose one."
            options={[
              { value: 'met', label: 'Met' },
              { value: 'not_met', label: 'Not met' },
            ]}
          />
        </div>
      </Section>

      <Section title="Tabs" note="The active tab is marked by the 3px teal rule.">
        <Tabs defaultValue="brief">
          <TabsList aria-label="Challenge">
            <TabsTrigger value="brief">Briefing</TabsTrigger>
            <TabsTrigger value="setup">Setup</TabsTrigger>
            <TabsTrigger value="fly" meta="25 min">
              Fly
            </TabsTrigger>
            <TabsTrigger value="debrief" meta={3}>
              Debrief
            </TabsTrigger>
            <TabsTrigger value="history" disabled>
              History
            </TabsTrigger>
          </TabsList>
          <TabsContent value="brief">Briefing content.</TabsContent>
          <TabsContent value="setup">Setup content.</TabsContent>
          <TabsContent value="fly">Fly content.</TabsContent>
          <TabsContent value="debrief">Debrief content.</TabsContent>
        </Tabs>
      </Section>

      <Section title="Overlays">
        <Row>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Open dialog</Button>
            </DialogTrigger>
            <DialogContent
              title="Delete this attempt?"
              description="Pattern at KPAO, flown 2 October. Your best tier stays. This cannot be undone."
            >
              <div className="flex justify-end gap-2">
                <DialogClose asChild>
                  <Button variant="secondary">Keep it</Button>
                </DialogClose>
                <Button variant="danger">Delete attempt</Button>
              </div>
            </DialogContent>
          </Dialog>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="secondary">Open drawer</Button>
            </DrawerTrigger>
            <DrawerContent title="Menu">Drawer content.</DrawerContent>
          </Drawer>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">Open menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>Signed in as Sam</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Review lesson</DropdownMenuItem>
              <DropdownMenuItem>
                Preferences <DropdownMenuShortcut>⌘ ,</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem tone="warn">Delete attempt</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <p className="font-semibold">VY</p>
              <p className="text-ink-2">Best rate of climb speed.</p>
            </PopoverContent>
          </Popover>
          <Tooltip content="Hold Shift to trim faster">
            <Button variant="ghost">Tooltip</Button>
          </Tooltip>
          <Tooltip
            glossary
            content={
              <>
                <strong className="block">VY</strong>
                Best rate of climb speed. 74 KIAS in the Skyhawk.
              </>
            }
          >
            <Button variant="ghost">Glossary card</Button>
          </Tooltip>
        </Row>
        <Row>
          <Button
            variant="secondary"
            onClick={() =>
              toast({
                title: 'Attempt saved',
                description: 'Pattern at KPAO, Silver tier. Nice landing.',
                tone: 'success',
              })
            }
          >
            Success toast
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              toast({
                title: 'You are offline',
                description: 'Progress is kept on this device until you reconnect.',
                tone: 'warning',
              })
            }
          >
            Caution toast
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              toast({
                title: 'Could not save',
                description: 'The server did not answer. Try again in a moment.',
                tone: 'error',
                action: (
                  <Button variant="secondary" size="sm" onClick={() => toast('Retrying…')}>
                    Retry
                  </Button>
                ),
              })
            }
          >
            Error toast
          </Button>
          <Button variant="secondary" onClick={() => toast('Lesson marked complete.')}>
            Plain toast
          </Button>
        </Row>
      </Section>

      <Section title="Progress" note="Drawn with the horizon line; go at 100%.">
        <div className="grid max-w-3xl gap-6 sm:grid-cols-2">
          <ProgressBar
            value={3}
            max={6}
            label="Module 2 · Basic maneuvers"
            valueText="3 / 6"
            showLabel
            showValue
          />
          <ProgressBar
            value={6}
            max={6}
            label="Module 1 · First flight"
            valueText="Complete"
            showLabel
            showValue
          />
        </div>
        <Row className="gap-6">
          <ProgressRing value={0} label="Not started" />
          <ProgressRing value={62} label="In progress" />
          <ProgressRing value={100} label="Complete" />
        </Row>
      </Section>

      <Section
        title="Lesson path"
        note="Done, current, upcoming and locked stops on the horizon line."
      >
        <div className="max-w-[460px]">
          <LessonPath
            onStart={() => toast('Starting lesson 2.2')}
            stops={[
              {
                id: '1',
                title: 'First flight: what everything does',
                meta: 'Lesson 1.1 · Done',
                state: 'done',
              },
              { id: '2', title: 'Straight and level', meta: 'Lesson 2.1 · Done', state: 'done' },
              {
                id: '3',
                title: 'Climbs and descents',
                meta: 'Lesson 2.2 · Up next, 20 min',
                state: 'current',
              },
              { id: '4', title: 'Turns', meta: 'Lesson 2.3', state: 'upcoming', to: '/learn' },
              { id: '5', title: 'Slow flight and stalls', meta: 'Lesson 2.4', state: 'locked' },
            ]}
          />
        </div>
      </Section>

      <Section title="Loading, empty and error states">
        <LoadingRegion label="Loading lesson">
          <Card className="w-[300px] gap-3 p-6">
            <Skeleton className="h-3.5 w-[72px]" />
            <Skeleton className="h-[22px] w-[200px]" />
            <Skeleton className="h-3.5 w-full" />
            <Skeleton className="h-3.5 w-4/5" />
            <Skeleton className="mt-2 h-8 w-24 rounded-md" />
          </Card>
        </LoadingRegion>
        <Row className="items-stretch">
          <EmptyState
            icon={Search}
            title="No challenges match"
            message="Try clearing the difficulty filter, or pick a different airport."
            action={
              <Button variant="secondary" size="sm">
                Clear filters
              </Button>
            }
          />
          <ErrorState
            title="We lost the connection"
            message="Your progress on this device is safe. Reload when you are back online."
            onRetry={() => toast('Retrying…')}
          />
        </Row>
      </Section>

      <Section title="Table" note="Numbers right-aligned in readout; stacks into cards on phones.">
        <Table
          caption="Cessna 172S V-speeds at maximum gross weight."
          rows={SPEEDS}
          rowKey={(r) => r.id}
          className="max-w-3xl"
          columns={[
            {
              key: 'name',
              header: 'Speed',
              cell: (r) => <span className="readout-sm">{r.name}</span>,
            },
            { key: 'meaning', header: 'Meaning', cell: (r) => r.meaning },
            { key: 'kias', header: 'KIAS', numeric: true, cell: (r) => r.kias },
            {
              key: 'status',
              header: 'Status',
              cell: (r) => (
                <Badge variant={r.status}>
                  {r.status === 'go'
                    ? 'Learned'
                    : r.status === 'accent'
                      ? 'In progress'
                      : 'Not yet'}
                </Badge>
              ),
            },
          ]}
        />
        <Table
          caption="Attempt history"
          rows={ATTEMPTS}
          rowKey={(r) => r.id}
          className="max-w-xl"
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
            {
              label: 'Module 3 · Takeoffs and landings',
              to: '/learn/m4-takeoffs-patterns-landings',
            },
            { label: 'L3.2 Normal landing' },
          ]}
        />
      </Section>

      <Section title="Challenge metadata">
        <ChallengeMeta>
          <TypeIcon type="pattern" />
          <span className="inline-flex items-center gap-2">
            Difficulty <DifficultyDots value={3} />
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock aria-hidden className="size-4" strokeWidth={1.75} /> Est. 25 min
          </span>
          <span className="readout-sm">KPAO · Runway 31</span>
          <TierBadge tier="silver" />
        </ChallengeMeta>
        <Row>
          {[1, 3, 5].map((d) => (
            <DifficultyDots key={d} value={d} />
          ))}
        </Row>
        <Row className="gap-4">
          {CHALLENGE_TYPES.map((t) => (
            <TypeIcon key={t} type={t} />
          ))}
        </Row>
      </Section>

      <Section
        title="Stopwatch and key numbers"
        note="Page UI on ink and surface-sunken, never the instrument palette."
      >
        <Row className="gap-6">
          <Stopwatch />
          <Stopwatch large />
        </Row>
        <KeyNumbers
          className="max-w-[640px]"
          items={[
            { label: 'Rotate', value: '55', unit: 'KIAS' },
            { label: 'Best climb VY', value: '74', unit: 'KIAS', highlight: true },
            { label: 'Approach', value: '65', unit: 'KIAS' },
            { label: 'Tower', value: '118.6' },
          ]}
        />
      </Section>

      <Section title="Prose">
        <Prose>
          <h2>Pitch for airspeed, power for altitude</h2>
          <p>
            In a climb, the airplane does not care how hard you pull. Set full power, pitch to hold{' '}
            <span className="readout">74 KIAS</span>, and trim until the pressure goes away.
          </p>
          <p>
            Check the <a href="#dev-prose">vertical speed indicator</a> a few seconds later, never
            straight away. Press <code>Ctrl+Num 1</code> to adjust trim in the sim.
          </p>
        </Prose>
      </Section>
    </PageContainer>
  );
}
