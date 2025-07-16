import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getUser } from '@/lib/auth-server';

export const metadata = {
  title: 'Home',
};

export default async function HomePage() {
  const user = await getUser();

  if (!user) {
    return (
      <div>
        <h1>Please log in to view your profile.</h1>
        <p>If you don't have an account, please sign up.</p>
        <p>
          <Link href='/login'>Login</Link> | <Link href='/signup'>Sign Up</Link>
        </p>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>

      <CardContent>
        <div>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
