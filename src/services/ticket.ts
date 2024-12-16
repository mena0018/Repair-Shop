import { fetcherWithToastError } from '@/lib/fetcher';
import prisma from '@/prisma/singleton';

export const getTicket = (id: number) => {
  return fetcherWithToastError(() => prisma.ticket.findUnique({ where: { id } }));
};
