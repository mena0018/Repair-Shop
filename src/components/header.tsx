import { NavButton } from '@/components/nav-button';
import { ThemeToggle } from '@/styles/theme/theme-toggle';
import { File, HomeIcon, UsersRound } from 'lucide-react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20'>
      <div className='w-full h-8 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <NavButton label='Home' href='/' icon={HomeIcon} />
          <Link href='/home' title='Home' className='flex justify-center items-center gap-2 ml-0'>
            <h1 className='hidden sm:block text-xl font-bold m-0 mt-1'>Computer Repair Shop</h1>
          </Link>
        </div>

        <div className='flex items-center'>
          <NavButton label='Tickets' href='/tickets' icon={File} />
          <NavButton label='Customers' href='/customers' icon={UsersRound} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
