import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { TestProviders } from '@/test/render';
import { Button } from './Button';
import { Dialog, DialogContent, DialogTrigger } from './Dialog';
import { Drawer, DrawerContent, DrawerTrigger } from './Drawer';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs';
import { Tooltip } from './Tooltip';

describe('Tabs', () => {
  it('follows the ARIA tabs pattern with arrow keys', async () => {
    render(
      <Tabs defaultValue="brief">
        <TabsList aria-label="Challenge">
          <TabsTrigger value="brief">Brief</TabsTrigger>
          <TabsTrigger value="fly">Fly</TabsTrigger>
        </TabsList>
        <TabsContent value="brief">Brief panel</TabsContent>
        <TabsContent value="fly">Fly panel</TabsContent>
      </Tabs>,
    );
    expect(screen.getByRole('tablist', { name: 'Challenge' })).toBeInTheDocument();
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Brief panel');
    screen.getByRole('tab', { name: 'Brief' }).focus();
    await userEvent.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Fly' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Fly panel');
  });
});

describe('Dialog', () => {
  it('opens as a modal, closes on Esc and returns focus', async () => {
    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Delete account</Button>
        </DialogTrigger>
        <DialogContent title="Delete account?" description="This cannot be undone.">
          <Button>Confirm</Button>
        </DialogContent>
      </Dialog>,
    );
    const trigger = screen.getByRole('button', { name: 'Delete account' });
    await userEvent.click(trigger);
    const dialog = screen.getByRole('dialog', { name: 'Delete account?' });
    expect(dialog).toHaveAccessibleDescription('This cannot be undone.');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(trigger).toHaveFocus();
  });
});

describe('Drawer', () => {
  it('opens with a title and a close button', async () => {
    render(
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Open menu</Button>
        </DrawerTrigger>
        <DrawerContent title="Menu">Links</DrawerContent>
      </Drawer>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    expect(screen.getByRole('dialog', { name: 'Menu' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Close' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });
});

describe('Popover and Tooltip', () => {
  it('shows popover content on click', async () => {
    render(
      <Popover>
        <PopoverTrigger>Vy</PopoverTrigger>
        <PopoverContent>Best rate of climb</PopoverContent>
      </Popover>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Vy' }));
    expect(screen.getByRole('dialog')).toHaveTextContent('Best rate of climb');
  });

  it('shows a tooltip on keyboard focus', async () => {
    render(
      <TestProviders>
        <Tooltip content="Best rate of climb">
          <button type="button">Vy</button>
        </Tooltip>
      </TestProviders>,
    );
    await userEvent.tab();
    expect(await screen.findByRole('tooltip')).toHaveTextContent('Best rate of climb');
  });
});
