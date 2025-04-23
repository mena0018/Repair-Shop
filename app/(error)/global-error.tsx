'use client';

import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

type GlobalErrorProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className='grid h-screen place-content-center px-4'>
          <div className='pb-60 text-center'>
            <h1 className='font-black text-9xl text-primary'>404</h1>
            <p className='font-bold text-2xl tracking-tight sm:text-4xl'>Something went wrong!</p>
            <p className='mt-8 max-w-xl text-primary/80'>{error.message || ''}</p>

            <button
              onClick={() => reset()}
              className='mt-6 inline-block rounded bg-indigo-800 px-5 py-3 font-medium text-sm hover:bg-indigo-900 focus:outline-hidden focus:ring-3'
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
