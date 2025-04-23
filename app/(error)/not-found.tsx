import { errorMetadata } from '@/lib/site-config';
import Link from 'next/link';

export const metadata = errorMetadata;

export default function NotFoundPage() {
  return (
    <div className='grid h-screen place-content-center px-4'>
      <div className='pb-60 text-center'>
        <h1 className='font-black text-9xl text-primary'>404</h1>
        <p className='font-bold text-2xl tracking-tight sm:text-4xl'>Uh-oh!</p>
        <p className='mt-4'>We can't find that page.</p>
        <Link
          href='/home'
          className='mt-6 inline-block rounded bg-indigo-800 px-5 py-3 font-medium text-sm text-white hover:bg-indigo-900 focus:outline-hidden focus:ring-3 dark:text-foreground'
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
