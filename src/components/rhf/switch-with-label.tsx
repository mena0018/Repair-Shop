'use client';

import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { useFormContext } from 'react-hook-form';

type Props<TSchema> = {
  title: string;
  name: keyof TSchema & string;
};

export function SwitchWithLabel<TSchema>({ name, title }: Props<TSchema>) {
  const form = useFormContext();

  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem className='w-full flex items-center gap-2'>
          <FormLabel htmlFor={name} className='mt-2'>
            {title}
          </FormLabel>

          <FormControl>
            <Switch id={name} {...field} onCheckedChange={field.onChange} checked={field.value} />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
