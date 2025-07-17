import { fetcherWithToastError } from "@/lib/fetcher"
import prisma from "@/lib/prisma"

export const getTicket = (id: number) => {
  return fetcherWithToastError(() => prisma.ticket.findUnique({ where: { id } }))
}
