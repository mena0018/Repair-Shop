import { redirect } from 'next/navigation';

import { SignInPayload, SignUpPayload } from '@/features/auth';
import { authClient } from '@/lib/auth-client';

export async function signUpClient(payload: SignUpPayload) {
  return await authClient.signUp.email(payload, {
    onRequest: (ctx) => {
      console.log('onRequest', ctx);
    },
    onSuccess: (ctx) => {
      console.log('onSuccess', ctx);
    },
    onError: (ctx) => {
      if (ctx.error.status === 403) {
        alert('Please verify your email address');
      }
      console.error('onError', ctx);
      alert(ctx.error.message);
    },
  });
}

export async function signInClient(payload: SignInPayload) {
  return await authClient.signIn.email(payload);
}

export async function signOutClient() {
  return await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        redirect('/sign-in');
      },
    },
  });
}
