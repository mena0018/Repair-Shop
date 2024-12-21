'use client';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { CustomerFields, CustomerSchema } from '@/features/customer/types/customer.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Customer } from '@prisma/client';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
  customer?: Customer;
};

export const CustomerForm = ({ customer }: Props) => {
  const defaultValues: CustomerFields = {
    firstName: customer?.firstName ?? '',
    lastName: customer?.lastName ?? '',
    address1: customer?.address1 ?? '',
    address2: customer?.address2 ?? '',
    city: customer?.city ?? '',
    state: customer?.state ?? '',
    email: customer?.email ?? '',
    zip: customer?.zip ?? '',
    phone: customer?.phone ?? '',
    notes: customer?.notes ?? '',
  };

  const form = useForm<CustomerFields>({
    mode: 'onBlur',
    resolver: zodResolver(CustomerSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<CustomerFields> = async (data) => {
    alert(data);
  };

  return (
    <div className='flex flex-col gap-1 sm:px-8'>
      <div>
        <h2 className='font-bold text-2xl'>{customer?.id ? 'Edit' : 'New'} Customer Form</h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-4 sm:flex-row sm:gap-8'
        >
          <p>{JSON.stringify(form.getValues())}</p>

          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </div>
  );
};
