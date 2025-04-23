import * as React from 'react';

import { cn } from '@/lib/utils';

const Card = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot='card'
    className={cn('rounded-xl border bg-card text-card-foreground shadow-sm', className)}
    {...props}
  />
);

const CardHeader = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot='card-header'
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
);

const CardTitle = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot='card-title'
    className={cn('font-semibold leading-none tracking-tight', className)}
    {...props}
  />
);

const CardDescription = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot='card-description'
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
);

const CardContent = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div data-slot='card-content' className={cn('p-6 pt-0', className)} {...props} />
);

const CardFooter = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div data-slot='card-footer' className={cn('flex items-center p-6 pt-0', className)} {...props} />
);

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
