'use client';

import { ThemeProvider } from '@/styles/theme/theme-provider';
import { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <Toaster richColors closeButton position='top-right' />
      {children}
    </ThemeProvider>
  );
};
