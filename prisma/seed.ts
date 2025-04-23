import { generateCustomers } from "@/prisma/data/customers"
import { generateTickets } from "@/prisma/data/tickets"
import prisma from "@/prisma/singleton"

const seed = async () => {
  const customers = generateCustomers()
  const tickets = generateTickets()

  await prisma.customer.createMany({ data: customers, skipDuplicates: true })
  await prisma.ticket.createMany({ data: tickets, skipDuplicates: true })
}

seed()
  .then(() => {
    prisma.$disconnect()
    console.warn("✅ Seeding completed successfully!")
  })
  .catch((e) => {
    console.error("❌ Error during seeding:", e)
    prisma.$disconnect().finally(() => process.exit(1))
  })
