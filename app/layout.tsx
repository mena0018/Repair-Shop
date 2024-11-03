import '@/styles/globals.css';
import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { Providers } from '@/app/providers';
import { baseMetadata } from '@/lib/site-config';
import { cn } from '@/lib/utils';

const fontSans = FontSans({ subsets: ['latin'] });
export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html suppressHydrationWarning lang="en" className="h-full">
      <body suppressHydrationWarning className={cn(fontSans.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
