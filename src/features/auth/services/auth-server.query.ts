'use server';

import { SignInPayload, SignUpPayload } from '@/features/auth';
import { auth } from '@/lib/auth';

export async function signUpServer(payload: SignUpPayload) {
  return await auth.api.signUpEmail({
    body: payload,
    asResponse: true,
  });
}

export async function signInServer(payload: SignInPayload) {
  return await auth.api.signInEmail({
    body: payload,
    asResponse: true,
  });
}
