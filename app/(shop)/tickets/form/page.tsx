import { ErrorDisplay } from '@/components/error-display';
import { getCustomer } from '@/services/customer';
import { getTicket } from '@/services/ticket';

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
  }

  if (ticketId) {
    const ticket = await getTicket(parseInt(ticketId));

    if (!ticket) {
      return <ErrorDisplay label='Ticket not found' id={ticketId} />;
    }

    const customer = await getCustomer(ticket.customerId);

    return <div>TICKET FORM</div>;
  }
}
