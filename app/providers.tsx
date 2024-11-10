'use client';

import { ThemeProvider } from '@/styles/theme/theme-provider';
import { ThemeToggle } from '@/styles/theme/theme-toggle';
import { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Toaster richColors closeButton position="top-right" />
      {children}
    </ThemeProvider>
  );
};
