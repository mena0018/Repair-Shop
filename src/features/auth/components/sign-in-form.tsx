'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

import { InputWithLabel } from '@/components/rhf/input-with-label';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { SignInFormFields, SignInFormSchema, signInClient } from '@/features/auth';

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

  const onSubmit: SubmitHandler<SignInFormFields> = async (data) => {
    await signInClient({ ...data });
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
          className='w-full'>
          Login
        </Button>
        <div className='space-x-1 text-center text-sm'>
          <span>Don't have an account ?</span>
          <Link
            href='/sign-up'
            className='underline underline-offset-4'>
            Sign up
          </Link>
        </div>
      </form>
    </Form>
  );
}
