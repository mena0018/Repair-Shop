import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SignUpForm } from '@/features/auth';

export default function SignUpPage() {
  return (
    <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
      <div className='w-full max-w-md'>
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl'>Sign Up</CardTitle>
            <CardDescription>Enter your email below to create a new account</CardDescription>
          </CardHeader>
          <CardContent>
            <SignUpForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
