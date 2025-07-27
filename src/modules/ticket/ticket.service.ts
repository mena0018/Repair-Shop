import { fetcherWithToastError } from "@/libs/fetcher"
import prisma from "@/libs/prisma"

export const getTicket = (id: number) => {
  return fetcherWithToastError(() => prisma.ticket.findUnique({ where: { id } }))
}
