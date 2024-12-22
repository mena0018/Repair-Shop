'use client';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';

type SelectData = {
  id: string;
  description: string;
};

type Props<TSchema> = {
  title: string;
  name: keyof TSchema & string;
  data: Array<SelectData>;
  required?: boolean;
  className?: string;
};

export function SelectWithLabel<TSchema>({
  name,
  title,
  data,
  className,
  required,
}: Props<TSchema>) {
  const form = useFormContext();

  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <FormLabel htmlFor={name}>
            <span>{title}</span>
            {required && <span className='ml-1 text-destructive'>*</span>}
          </FormLabel>

          <Select {...field} onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger id={name} className={cn({ 'border-destructive': error }, className)}>
                <SelectValue placeholder='Select' />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {data.map((item) => (
                <SelectItem key={`${name}_${item.id}`} value={item.id}>
                  {item.description}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
