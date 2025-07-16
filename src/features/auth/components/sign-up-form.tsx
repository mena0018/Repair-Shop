'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { InputWithLabel } from '@/components/rhf/input-with-label';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { SignUpFormFields, SignUpFormSchema } from '@/features/auth';
import { signUp } from '@/lib/auth-client';

export function SignUpForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

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
    startTransition(async () => {
      await signUp.email(data, {
        onSuccess: () => {
          router.push('/home');
        },
        onError: (response) => {
          console.error('SignUp Error', response);
          toast.error(response.error.message || 'Error signing up, please try again.');
        },
      });
    });
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
          type='email'
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
          {isPending ? <LoaderCircle className='animate-spin' /> : 'Sign Up'}
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
