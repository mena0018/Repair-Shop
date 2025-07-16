'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle } from 'lucide-react';
import Link from 'next/link';
import { useAction } from 'next-safe-action/hooks';
import { SubmitHandler, useForm } from 'react-hook-form';

import { AlertServerResponse } from '@/components/alert-server-response';
import { InputWithLabel } from '@/components/rhf/input-with-label';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { SignInFormFields, SignInFormSchema, signInAction } from '@/features/auth';

export function SignInForm() {
  const defaultValues: SignInFormFields = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const form = useForm<SignInFormFields>({
    mode: 'onBlur',
    resolver: zodResolver(SignInFormSchema),
    defaultValues,
  });

  const { result, isPending, execute: signIn } = useAction(signInAction);
  const hasResult = Object.keys(result).length > 0;

  const onSubmit: SubmitHandler<SignInFormFields> = async (data) => {
    signIn(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-6'>
        <InputWithLabel<SignInFormFields>
          required
          name='email'
          title='Email'
          placeholder='m@example.com'
        />
        <InputWithLabel<SignInFormFields>
          required
          type='password'
          name='password'
          title='Password'
          placeholder='Enter your password'
        />

        <Button
          type='submit'
          className='w-full'
          disabled={isPending}>
          {isPending ? <LoaderCircle className='animate-spin' /> : 'Login'}
        </Button>
        <div className='space-x-1 text-center text-sm'>
          <span>Don't have an account ?</span>
          <Link
            href='/sign-up'
            className='underline underline-offset-4'>
            Sign up
          </Link>
        </div>

        {hasResult ? <AlertServerResponse result={result} /> : null}
      </form>
    </Form>
  );
}
