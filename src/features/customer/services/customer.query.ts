import { fetcherWithToastError } from '@/lib/fetcher';
import prisma from '@/lib/prisma';

export const getCustomer = async (id: number) => {
  return fetcherWithToastError(() =>
    prisma.customer.findUnique({
      where: {
        id,
      },
    }),
  );
};
