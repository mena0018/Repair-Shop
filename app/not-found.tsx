import { errorMetadata } from '@/lib/site-config';
import Link from 'next/link';

export const metadata = errorMetadata;

export default function NotFoundPage() {
  return (
    <div className='grid h-screen place-content-center px-4'>
      <div className='text-center pb-60'>
        <h1 className='text-9xl font-black text-primary'>404</h1>
        <p className='text-2xl font-bold tracking-tight sm:text-4xl'>Uh-oh!</p>
        <p className='mt-4'>We can't find that page.</p>
        <Link
          href='/home'
          className='mt-6 text-white dark:text-foreground inline-block rounded bg-indigo-800 px-5 py-3 text-sm font-medium hover:bg-indigo-900 focus:outline-none focus:ring'
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
