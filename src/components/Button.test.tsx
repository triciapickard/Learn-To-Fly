import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { renderWithProviders } from '@/test/render';
import { Button } from './Button';
import { ExternalLink, Link } from './Link';

describe('Button', () => {
  it('is a button with an accessible name that handles clicks', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Save</Button>);
    const button = screen.getByRole('button', { name: 'Save' });
    expect(button).toHaveAttribute('type', 'button');
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('is disabled and busy while loading', async () => {
    const onClick = vi.fn();
    render(
      <Button loading onClick={onClick}>
        Saving
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Saving' });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('applies variant classes', () => {
    render(<Button variant="danger">Delete</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-danger');
  });

  it('renders its child with button styles when asChild', () => {
    renderWithProviders(
      <Button asChild>
        <Link unstyled to="/learn">
          Start
        </Link>
      </Button>,
    );
    const link = screen.getByRole('link', { name: 'Start' });
    expect(link).toHaveAttribute('href', '/learn');
    expect(link).toHaveClass('bg-primary');
  });
});

describe('ExternalLink', () => {
  it('opens safely in a new tab and tells screen readers', () => {
    render(<ExternalLink href="https://www.faa.gov">FAA</ExternalLink>);
    const link = screen.getByRole('link', { name: 'FAA (opens in a new tab)' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
