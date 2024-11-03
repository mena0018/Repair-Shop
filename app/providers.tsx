'use client';

import { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/styles/theme/theme-provider';
import { ThemeToggle } from '@/styles/theme/theme-toggle';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
      <ThemeToggle />
      <Toaster richColors closeButton position="top-right" />
      {children}
    </ThemeProvider>
  );
};
