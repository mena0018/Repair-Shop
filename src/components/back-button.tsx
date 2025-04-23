'use client';

import { useRouter } from 'next/navigation';
import { ButtonHTMLAttributes } from 'react';

import { Button } from '@/components/ui/button';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: string;
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'secondary' | 'link';
};

export const BackButton = ({ title = 'Go Back', className, variant, size }: Props) => {
  const router = useRouter();

  return (
    <Button
      size={size}
      title={title}
      variant={variant}
      className={className}
      onClick={() => router.back()}>
      {title}
    </Button>
  );
};
