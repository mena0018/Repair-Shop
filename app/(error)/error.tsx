'use client';

import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

type ErrorProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className='grid h-screen place-content-center px-4'>
      <div className='pb-60 text-center'>
        <h1 className='text-primary text-9xl font-black'>404</h1>
        <p className='text-2xl font-bold tracking-tight sm:text-4xl'>Something went wrong!</p>
        <p className='text-primary/80 mt-8 max-w-xl'>{error.message || ''}</p>

        <button
          onClick={() => reset()}
          className='mt-6 inline-block rounded bg-indigo-800 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-900 focus:ring-3 focus:outline-hidden'>
          Try Again
        </button>
      </div>
    </div>
  );
}
