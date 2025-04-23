import { ErrorDisplay } from '@/components/error-display';
import { CustomerForm, getCustomer } from '@/features/customer';

type SearchParams = {
  searchParams: Promise<Record<string, string | undefined>>;
};

export async function generateMetadata({ searchParams }: SearchParams) {
  const { customerId } = await searchParams;

  if (!customerId) {
    return { title: 'New customer' };
  }

  return { title: `Edit Customer #${customerId}` };
}

export default async function CustomersFormPage({ searchParams }: SearchParams) {
  const { customerId } = await searchParams;

  if (!customerId) {
    return <CustomerForm />;
  }

  const customer = await getCustomer(parseInt(customerId));

  if (!customer) {
    return (
      <ErrorDisplay
        label='Customer not found'
        id={customerId}
      />
    );
  }

  return <CustomerForm customer={customer} />;
}
