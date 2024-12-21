'use client';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
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
    <div className='flex flex-col gap-1 sm:px-8'>
      <div>
        <h2 className='font-bold text-2xl'>
          {ticket?.id ? `Edit Ticket #${ticket.id} Form` : 'New Ticket Form'}
        </h2>
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
