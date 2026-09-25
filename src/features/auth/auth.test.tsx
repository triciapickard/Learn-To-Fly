import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { describe, expect, it, vi } from 'vitest';
import { hardNavigate } from '@/lib/navigation';
import { signedIn, testUser } from '@/test/handlers';
import { renderRoute } from '@/test/render';
import { server } from '@/test/server';

describe('ProtectedRoute', () => {
  it('redirects visitors to log in with a returnTo', async () => {
    const { router } = renderRoute('/dashboard');
    expect(await screen.findByRole('heading', { level: 1, name: 'Log in' })).toBeInTheDocument();
    expect(router.state.location.pathname).toBe('/login');
    expect(router.state.location.search).toBe('?returnTo=%2Fdashboard');
  });
});

describe('Sign up', () => {
  it('shows validation messages and focuses the error summary', async () => {
    renderRoute('/signup');
    await userEvent.click(await screen.findByRole('button', { name: 'Create account' }));
    const summary = await screen.findByRole('alert');
    await waitFor(() => expect(summary).toHaveFocus());
    expect(
      within(summary).getByRole('link', { name: 'Use at least 2 characters.' }),
    ).toHaveAttribute('href', '#signup-displayName');
    expect(screen.getByLabelText(/Email/)).toHaveAccessibleDescription(/Enter your email address/);
    expect(screen.getByRole('checkbox', { name: /simulation only/ })).toHaveAccessibleDescription(
      /agree to the Terms/,
    );
  });

  it('shows password strength', async () => {
    renderRoute('/signup');
    await userEvent.type(await screen.findByLabelText('Password'), 'correct horse battery staple');
    expect(screen.getByText('Strength: Good')).toBeInTheDocument();
  });

  it('creates the account and returns to the page the user came from', async () => {
    let body: unknown;
    server.use(
      http.post('/api/v1/auth/register', async ({ request }) => {
        body = await request.json();
        return HttpResponse.json({ user: testUser, csrfToken: 'new-token' }, { status: 201 });
      }),
    );
    const { router } = renderRoute('/signup?returnTo=%2Flearn');
    await userEvent.type(await screen.findByLabelText(/Display name/), 'Sam Simmer');
    await userEvent.type(screen.getByLabelText('Email'), 'Sam@Example.com');
    await userEvent.type(screen.getByLabelText('Password'), 'correct horse battery staple');
    await userEvent.click(screen.getByRole('checkbox', { name: /simulation only/ }));
    await userEvent.click(screen.getByRole('button', { name: 'Create account' }));
    await waitFor(() => expect(router.state.location.pathname).toBe('/learn'));
    expect(body).toEqual({
      displayName: 'Sam Simmer',
      email: 'sam@example.com',
      password: 'correct horse battery staple',
      acceptTerms: true,
    });
    expect(
      await screen.findByRole('button', { name: 'Account menu for Sam Simmer' }),
    ).toBeInTheDocument();
  });

  it('maps server field errors back onto the form', async () => {
    server.use(
      http.post('/api/v1/auth/register', () =>
        HttpResponse.json(
          {
            error: {
              code: 'VALIDATION_ERROR',
              message: 'Some fields are invalid.',
              details: [
                {
                  path: 'password',
                  message: 'This password is too common. Choose something harder to guess.',
                },
              ],
            },
          },
          { status: 400 },
        ),
      ),
    );
    renderRoute('/signup');
    await userEvent.type(await screen.findByLabelText(/Display name/), 'Sam');
    await userEvent.type(screen.getByLabelText('Email'), 'sam@example.com');
    await userEvent.type(screen.getByLabelText('Password'), 'unbelievable');
    await userEvent.click(screen.getByRole('checkbox', { name: /simulation only/ }));
    await userEvent.click(screen.getByRole('button', { name: 'Create account' }));
    expect(await screen.findByLabelText('Password')).toHaveAccessibleDescription(/too common/);
  });

  it('shows a conflict message from the server', async () => {
    server.use(
      http.post('/api/v1/auth/register', () =>
        HttpResponse.json(
          {
            error: {
              code: 'CONFLICT',
              message: 'An account with this email may already exist. Try logging in.',
            },
          },
          { status: 409 },
        ),
      ),
    );
    renderRoute('/signup');
    await userEvent.type(await screen.findByLabelText(/Display name/), 'Sam');
    await userEvent.type(screen.getByLabelText('Email'), 'sam@example.com');
    await userEvent.type(screen.getByLabelText('Password'), 'correct horse battery staple');
    await userEvent.click(screen.getByRole('checkbox', { name: /simulation only/ }));
    await userEvent.click(screen.getByRole('button', { name: 'Create account' }));
    expect(await screen.findByRole('alert')).toHaveTextContent('may already exist');
  });
});

describe('Log in', () => {
  it('shows the generic error on failure', async () => {
    server.use(
      http.post('/api/v1/auth/login', () =>
        HttpResponse.json(
          { error: { code: 'UNAUTHENTICATED', message: 'Email or password is incorrect.' } },
          { status: 401 },
        ),
      ),
    );
    renderRoute('/login');
    await userEvent.type(await screen.findByLabelText('Email'), 'sam@example.com');
    await userEvent.type(screen.getByLabelText('Password'), 'wrong');
    await userEvent.click(screen.getByRole('button', { name: 'Log in' }));
    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent('Email or password is incorrect.');
    await waitFor(() => expect(alert).toHaveFocus());
  });

  it('sends remember me and goes to a safe returnTo', async () => {
    let body: unknown;
    server.use(
      http.post('/api/v1/auth/login', async ({ request }) => {
        body = await request.json();
        return HttpResponse.json({ user: testUser, csrfToken: 't' });
      }),
    );
    const { router } = renderRoute('/login?returnTo=%2Fabout');
    await userEvent.type(await screen.findByLabelText('Email'), 'sam@example.com');
    await userEvent.type(screen.getByLabelText('Password'), 'correct horse battery staple');
    await userEvent.click(screen.getByRole('checkbox', { name: /Remember me/ }));
    await userEvent.click(screen.getByRole('button', { name: 'Log in' }));
    await waitFor(() => expect(router.state.location.pathname).toBe('/about'));
    expect(body).toMatchObject({ remember: true });
  });

  it('ignores an off-site returnTo', async () => {
    server.use(
      http.post('/api/v1/auth/login', () => HttpResponse.json({ user: testUser, csrfToken: 't' })),
    );
    const { router } = renderRoute('/login?returnTo=https%3A%2F%2Fevil.example');
    await userEvent.type(await screen.findByLabelText('Email'), 'sam@example.com');
    await userEvent.type(screen.getByLabelText('Password'), 'x');
    await userEvent.click(screen.getByRole('button', { name: 'Log in' }));
    await waitFor(() => expect(router.state.location.pathname).toBe('/dashboard'));
  });
});

describe('Header and account', () => {
  it('logs out from the avatar menu with a full page load to the home page', async () => {
    const go = vi.spyOn(hardNavigate, 'to').mockImplementation(() => undefined);
    let loggedOut = false;
    server.use(
      signedIn(),
      http.post('/api/v1/auth/logout', () => {
        loggedOut = true;
        return new HttpResponse(null, { status: 204 });
      }),
    );
    renderRoute('/account');
    await userEvent.click(
      await screen.findByRole('button', { name: 'Account menu for Sam Simmer' }),
    );
    await userEvent.click(await screen.findByRole('menuitem', { name: 'Log out' }));
    await waitFor(() => expect(go).toHaveBeenCalledWith('/'));
    expect(loggedOut).toBe(true);
  });

  it('requires typing DELETE before deleting the account', async () => {
    let deleted: unknown;
    server.use(
      signedIn(),
      http.delete('/api/v1/me', async ({ request }) => {
        deleted = await request.json();
        return new HttpResponse(null, { status: 204 });
      }),
    );
    const go = vi.spyOn(hardNavigate, 'to').mockImplementation(() => undefined);
    renderRoute('/account');
    await userEvent.click(await screen.findByRole('button', { name: 'Delete my account' }));
    const dialog = await screen.findByRole('dialog', { name: 'Delete your account?' });
    const submit = within(dialog).getByRole('button', { name: 'Delete permanently' });
    await userEvent.type(within(dialog).getByLabelText(/Type "DELETE"/), 'delete');
    await userEvent.type(within(dialog).getByLabelText('Password'), 'correct horse battery staple');
    expect(submit).toBeDisabled();
    await userEvent.clear(within(dialog).getByLabelText(/Type "DELETE"/));
    await userEvent.type(within(dialog).getByLabelText(/Type "DELETE"/), 'DELETE');
    expect(submit).toBeEnabled();
    await userEvent.click(submit);
    await waitFor(() => expect(go).toHaveBeenCalledWith('/account-deleted'));
    expect(deleted).toEqual({ confirm: 'DELETE', password: 'correct horse battery staple' });
  });

  it('saves the theme to the account when signed in', async () => {
    let patched: unknown;
    server.use(
      signedIn(),
      http.patch('/api/v1/me', async ({ request }) => {
        patched = await request.json();
        return HttpResponse.json({
          user: { ...testUser, preferences: { ...testUser.preferences, theme: 'dark' } },
        });
      }),
    );
    renderRoute('/account');
    await screen.findByRole('heading', { level: 1, name: 'Account' });
    const group = screen.getByRole('radiogroup', { name: 'Theme' });
    await userEvent.click(within(group).getByRole('radio', { name: 'Dark' }));
    await waitFor(() => expect(patched).toEqual({ preferences: { theme: 'dark' } }));
    expect(document.documentElement.dataset.theme).toBe('dark');
  });
});
