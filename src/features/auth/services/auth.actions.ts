'use server';

import { redirect } from 'next/navigation';
import { flattenValidationErrors } from 'next-safe-action';

import { SignInFormSchema, signInClient } from '@/features/auth';
import { actionClient } from '@/lib/safe-action';

export const signInAction = actionClient
  .metadata({ actionName: 'signInAction' })
  .schema(SignInFormSchema, {
    handleValidationErrorsShape: async (error) => flattenValidationErrors(error).fieldErrors,
  })
  .action(async ({ parsedInput }) => {
    const { error } = await signInClient(parsedInput);

    if (error) {
      return { error: true, message: 'Incorrect credentials' };
    }

    redirect('/home');
  });
