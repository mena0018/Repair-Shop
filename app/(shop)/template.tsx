import { PropsWithChildren } from 'react';

export default function ShopTemplate({ children }: Readonly<PropsWithChildren>) {
  return <div className='animate-appear'>{children}</div>;
}
