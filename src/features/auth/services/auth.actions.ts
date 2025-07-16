'use server';

import { redirect } from 'next/navigation';

import { SignInFormSchema } from '@/features/auth';
import { signIn } from '@/lib/auth-client';
import { actionClient } from '@/lib/safe-action';

export const signInAction = actionClient
  .metadata({ actionName: 'signInAction' })
  .schema(SignInFormSchema)
  .action(async ({ parsedInput }) => {
    const { error } = await signIn.email(parsedInput);

    if (error) {
      return { error: true, message: 'Incorrect credentials' };
    }

    redirect('/home');
  });
