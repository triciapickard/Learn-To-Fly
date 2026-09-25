import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { api, setCsrfToken } from '@/lib/apiClient';
import type {
  AuthResponse,
  ChangePasswordInput,
  CsrfResponse,
  DeleteAccountInput,
  LoginInput,
  MeResponse,
  RegisterInput,
  UpdateMeInput,
  UserDto,
} from '@shared/schemas/auth';

export const authKeys = {
  me: ['me'] as const,
  csrf: ['csrf'] as const,
};

/** The signed-in user (or null). Fetched on app start (Section 30.9). */
export function useMe() {
  return useQuery({
    queryKey: authKeys.me,
    queryFn: () => api.get<MeResponse>('/auth/me'),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
}

export function useAuth() {
  const { data, isPending, isError } = useMe();
  const user = data?.user ?? null;
  return { user, isLoading: isPending && !isError, isAuthenticated: user !== null };
}

/** Fetches a CSRF token and hands it to the API client. */
export function useCsrf() {
  const query = useQuery({
    queryKey: authKeys.csrf,
    queryFn: () => api.get<CsrfResponse>('/auth/csrf'),
    staleTime: Infinity,
    gcTime: Infinity,
  });
  useEffect(() => {
    if (query.data) setCsrfToken(query.data.csrfToken);
  }, [query.data]);
  return query;
}

function useOnAuthenticated() {
  const queryClient = useQueryClient();
  return (response: AuthResponse) => {
    setCsrfToken(response.csrfToken);
    queryClient.setQueryData(authKeys.csrf, { csrfToken: response.csrfToken });
    queryClient.setQueryData<MeResponse>(authKeys.me, { user: response.user });
  };
}

export function useLogin() {
  const onAuthenticated = useOnAuthenticated();
  return useMutation({
    mutationFn: (input: LoginInput) => api.post<AuthResponse>('/auth/login', input),
    onSuccess: onAuthenticated,
  });
}

export function useRegister() {
  const onAuthenticated = useOnAuthenticated();
  return useMutation({
    mutationFn: (input: RegisterInput) => api.post<AuthResponse>('/auth/register', input),
    onSuccess: onAuthenticated,
  });
}

/** Logout and account deletion are followed by a full page load (`hardNavigate`). */
export function useLogout() {
  return useMutation({ mutationFn: () => api.post<void>('/auth/logout') });
}

export function useChangePassword() {
  return useMutation({
    mutationFn: (input: ChangePasswordInput) => api.post<void>('/auth/change-password', input),
  });
}

export function useUpdateMe() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: UpdateMeInput) => api.patch<{ user: UserDto }>('/me', input),
    onSuccess: ({ user }) => queryClient.setQueryData<MeResponse>(authKeys.me, { user }),
  });
}

export function useDeleteAccount() {
  return useMutation({
    mutationFn: (input: DeleteAccountInput) => api.delete<void>('/me', input),
  });
}
