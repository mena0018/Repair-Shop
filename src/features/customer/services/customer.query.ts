import { fetcherWithToastError } from "@/libs/fetcher"
import prisma from "@/libs/prisma"

export const getCustomer = async (id: number) => {
  return fetcherWithToastError(() =>
    prisma.customer.findUnique({
      where: {
        id
      }
    })
  )
}
