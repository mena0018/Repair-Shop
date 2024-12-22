'use client';

import { InputWithLabel } from '@/components/rhf/input-with-label';
import { SwitchWithLabel } from '@/components/rhf/switch-with-label';
import { TextAreaWithLabel } from '@/components/rhf/textarea-with-label';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { CustomerInfos } from '@/features/customer/components/customer-infos';
import { TicketFields, TicketSchema } from '@/features/ticket/types/ticket.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Customer, Ticket } from '@prisma/client';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
  customer: Customer;
  ticket?: Ticket;
};

export const TicketForm = ({ customer, ticket }: Props) => {
  const defaultValues: TicketFields = {
    id: ticket?.id ?? '(New)',
    customerId: ticket?.customerId ?? customer.id,
    title: ticket?.title ?? '',
    description: ticket?.description ?? '',
    completed: ticket?.completed ?? false,
    tech: ticket?.tech ?? 'ticket-tech@gmail.com',
  };

  const form = useForm<TicketFields>({
    mode: 'onBlur',
    resolver: zodResolver(TicketSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<TicketFields> = async (data) => {
    alert(data);
  };

  return (
    <div className='flex flex-col gap-6 mt-4 sm:px-8'>
      <h2 className='font-bold text-2xl'>
        {ticket?.id ? `Edit Ticket #${ticket.id} Form` : 'New Ticket Form'}
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-4 md:flex-row md:gap-8'
        >
          <div className='flex flex-col gap-4 w-full max-w-xs'>
            <InputWithLabel<TicketFields> required name='title' title='Title' />
            <InputWithLabel<TicketFields> disabled name='tech' title='Tech' />
            <SwitchWithLabel<TicketFields> name='completed' title='Completed' />
            <CustomerInfos customer={customer} />
          </div>

          <div className='flex flex-col gap-4 w-full max-w-xs'>
            <TextAreaWithLabel<TicketFields>
              required
              name='description'
              title='Description'
              className='h-80'
            />
            <div className='flex gap-2'>
              <Button type='submit' title='Save' className='w-3/4'>
                Submit
              </Button>
              <Button type='reset' variant='secondary' title='Reset' onClick={() => form.reset()}>
                Reset
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
