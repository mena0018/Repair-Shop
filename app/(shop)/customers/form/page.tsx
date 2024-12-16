import { ErrorDisplay } from '@/components/error-display';
import { getCustomer } from '@/services/customer';

type Props = {
  searchParams: Promise<Record<string, string | undefined>>;
};

export default async function CustomersFormPage({ searchParams }: Props) {
  const { customerId } = await searchParams;

  if (!customerId) {
    return <div>NEW CUSTOMER FORM</div>;
  }

  const customer = await getCustomer(parseInt(customerId));

  if (!customer) {
    return <ErrorDisplay label='Customer not found' id={customerId} />;
  }

  return (
    <div className='flex flex-col items-center justify-center gap-2 p-10'>
      <h2 className='mb-2 text-2xl'>Customer {customer.id}</h2>
    </div>
  );
}
