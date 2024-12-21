import { ErrorDisplay } from '@/components/error-display';
import { CustomerForm } from '@/features/customer/components/customer-form';
import { getCustomer } from '@/features/customer/services/customer.query';

type Props = {
  searchParams: Promise<Record<string, string | undefined>>;
};

export default async function CustomersFormPage({ searchParams }: Props) {
  const { customerId } = await searchParams;

  if (!customerId) {
    return <CustomerForm />;
  }

  const customer = await getCustomer(parseInt(customerId));

  if (!customer) {
    return <ErrorDisplay label='Customer not found' id={customerId} />;
  }

  return <CustomerForm customer={customer} />;
}
