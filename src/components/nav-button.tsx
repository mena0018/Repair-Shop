import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

type NavButtonProps = {
  icon: LucideIcon;
  label: string;
  href?: string;
};

export const NavButton = ({ icon: Icon, label, href }: NavButtonProps) => {
  return (
    <Button
      size='icon'
      variant='ghost'
      className='rounded-full'
      title={label}
      aria-label={label}
      asChild>
      {href ? (
        <Link href={href}>
          <Icon />
        </Link>
      ) : (
        <Icon />
      )}
    </Button>
  );
};
