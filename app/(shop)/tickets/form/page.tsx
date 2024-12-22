import { ErrorDisplay } from '@/components/error-display';
import { getCustomer } from '@/features/customer/services/customer.query';
import { TicketForm } from '@/features/ticket/components/ticket-form';
import { getTicket } from '@/features/ticket/services/ticket.query';

type Props = {
  searchParams: Promise<Record<string, string | undefined>>;
};

export default async function TicketFormPage({ searchParams }: Props) {
  const { customerId, ticketId } = await searchParams;

  if (!customerId && !ticketId) {
    return <ErrorDisplay label='Ticket ID or Customer ID required to load ticket form' />;
  }

  if (customerId) {
    const customer = await getCustomer(parseInt(customerId));

    if (!customer) {
      return <ErrorDisplay label='Customer not found' id={customerId} />;
    }

    if (!customer.active) {
      return <ErrorDisplay label='Customer is not active' id={customerId} />;
    }

    return <TicketForm customer={customer} />;
  }

  if (ticketId) {
    const ticket = await getTicket(parseInt(ticketId));

    if (!ticket) {
      return <ErrorDisplay label='Ticket not found' id={ticketId} />;
    }

    const customer = await getCustomer(ticket.customerId);

    if (!customer) {
      return <ErrorDisplay label='Customer not found' id={customerId} />;
    }

    return <TicketForm customer={customer} ticket={ticket} />;
  }
}
