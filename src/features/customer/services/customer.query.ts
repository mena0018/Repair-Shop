import { CustomerFields } from '@/features/customer/helpers/customer.type';
import { fetcherWithToastError } from '@/lib/fetcher';
import prisma from '@/prisma/singleton';

export const getCustomer = async (id: number) => {
  return fetcherWithToastError(() =>
    prisma.customer.findUnique({
      where: {
        id,
      },
    }),
  );
};
