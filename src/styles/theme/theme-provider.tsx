'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import * as React from 'react';

export function ThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <NextThemesProvider
      disableTransitionOnChange
      attribute='class'
      defaultTheme='dark'>
      {children}
    </NextThemesProvider>
  );
}
