import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: Readonly<PropsWithChildren>) {
  return <main className='flex h-screen flex-col items-center justify-center'>{children}</main>;
}
