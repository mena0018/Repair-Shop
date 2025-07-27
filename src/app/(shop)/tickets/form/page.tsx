import { init as initKindeManagementApi, Users } from "@kinde/management-api-js"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

import { ErrorDisplay } from "@/components/error-display"
import { TicketForm } from "@/components/ticket"
import { getCustomer } from "@/modules/customer"
import { getTicket } from "@/modules/ticket"

type SearchParams = {
  searchParams: Promise<Record<string, string | undefined>>
}

export async function generateMetadata({ searchParams }: SearchParams) {
  const { customerId, ticketId } = await searchParams

  if (!customerId && !ticketId) {
    return { title: "Missing ticket ID or customer ID" }
  }
  if (customerId) {
    return { title: `New Ticket for Customer #${customerId}` }
  }

  return { title: `Edit Customer #${ticketId}` }
}

export default async function TicketFormPage({ searchParams }: SearchParams) {
  const { customerId, ticketId } = await searchParams

  if (!customerId && !ticketId) {
    return <ErrorDisplay label="Ticket ID or Customer ID required to load ticket form" />
  }

  const { getPermission, getUser } = getKindeServerSession()
  const [managerPermission, user] = await Promise.all([getPermission("manager"), getUser()])
  const isManager = managerPermission?.isGranted

  if (customerId) {
    const customer = await getCustomer(parseInt(customerId))

    if (!customer) {
      return <ErrorDisplay label="Customer not found" id={customerId} />
    }

    if (!customer.active) {
      return <ErrorDisplay label="Customer is not active" id={customerId} />
    }

    if (isManager) {
      initKindeManagementApi()
      const { users } = await Users.getUsers()

      const techs = users ? users.map(({ email }) => ({ id: email!, description: email! })) : []
      return <TicketForm customer={customer} techs={techs} />
    }

    return <TicketForm customer={customer} />
  }

  if (ticketId) {
    const ticket = await getTicket(parseInt(ticketId))

    if (!ticket) {
      return <ErrorDisplay label="Ticket not found" id={ticketId} />
    }

    const customer = await getCustomer(ticket.customerId)

    if (!customer) {
      return <ErrorDisplay label="Customer not found" id={customerId} />
    }

    if (isManager) {
      initKindeManagementApi()
      const { users } = await Users.getUsers()

      const techs = users ? users.map(({ email }) => ({ id: email!, description: email! })) : []
      return <TicketForm customer={customer} ticket={ticket} techs={techs} />
    }

    return (
      <TicketForm
        ticket={ticket}
        customer={customer}
        isEditable={user.email?.toLowerCase() === ticket.tech.toLowerCase()}
      />
    )
  }
}
