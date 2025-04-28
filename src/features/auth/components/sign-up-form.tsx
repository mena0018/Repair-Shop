'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

import { InputWithLabel } from '@/components/rhf/input-with-label';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { SignUpFormFields, SignUpFormSchema, signInAction } from '@/features/auth';

export function SignUpForm() {
  const defaultValues: SignUpFormFields = {
    email: '',
    password: '',
    name: '',
  };

  const form = useForm<SignUpFormFields>({
    mode: 'onBlur',
    resolver: zodResolver(SignUpFormSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<SignUpFormFields> = async (data) => {
    await signInAction(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-6'>
        <InputWithLabel<SignUpFormFields>
          required
          name='name'
          title='Name'
          placeholder='John Doe'
        />
        <InputWithLabel<SignUpFormFields>
          required
          name='email'
          title='Email'
          placeholder='m@example.com'
        />
        <InputWithLabel<SignUpFormFields>
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
          <span>Already have an account ?</span>
          <Link
            href='/sign-in'
            className='underline underline-offset-4'>
            Sign in
          </Link>
        </div>
      </form>
    </Form>
  );
}
