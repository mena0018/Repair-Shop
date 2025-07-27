"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { CustomerInfos } from "@/components/customer"
import {
  InputWithLabel,
  SelectWithLabel,
  SwitchWithLabel,
  TextAreaWithLabel
} from "@/components/form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Customer, Ticket } from "@/generated/prisma"
import { DEFAULT_TECH_ID, DEFAULT_TECH_TICKET, TicketFields, TicketSchema } from "@/modules/ticket"

type Props = {
  ticket?: Ticket
  customer: Customer
  isEditable?: boolean
  techs?: Array<{ id: string; description: string }>
}

export const TicketForm = ({ customer, ticket, isEditable = true, techs }: Props) => {
  const isManager = Array.isArray(techs)

  const defaultValues: TicketFields = {
    id: ticket?.id ?? DEFAULT_TECH_ID,
    customerId: ticket?.customerId ?? customer.id,
    title: ticket?.title ?? "",
    description: ticket?.description ?? "",
    completed: ticket?.completed ?? false,
    tech: ticket?.tech ?? DEFAULT_TECH_TICKET
  }

  const form = useForm<TicketFields>({
    mode: "onBlur",
    resolver: zodResolver(TicketSchema),
    defaultValues
  })

  const onSubmit: SubmitHandler<TicketFields> = async (data) => {
    alert(data)
  }

  return (
    <div className="mt-4 flex flex-col gap-6 sm:px-8">
      <h2 className="text-2xl font-bold">
        {ticket?.id && isEditable
          ? `Edit Ticket #${ticket.id}`
          : ticket?.id
            ? `View Ticket #${ticket.id}`
            : "New Ticket Form"}
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 md:flex-row md:gap-8"
        >
          <div className="flex w-full max-w-xs flex-col gap-4">
            <InputWithLabel<TicketFields>
              required
              name="title"
              title="Title"
              disabled={!isEditable}
            />

            {isManager ? (
              <SelectWithLabel<TicketFields>
                name="tech"
                title="Tech ID"
                data={[{ id: DEFAULT_TECH_TICKET, description: DEFAULT_TECH_TICKET }, ...techs]}
              />
            ) : (
              <InputWithLabel<TicketFields> name="tech" title="Tech" disabled />
            )}

            {ticket?.id ? (
              <SwitchWithLabel<TicketFields>
                name="completed"
                title="Completed"
                disabled={!isEditable}
              />
            ) : null}

            <CustomerInfos customer={customer} />
          </div>

          <div className="flex w-full max-w-xs flex-col gap-4">
            <TextAreaWithLabel<TicketFields>
              required
              name="description"
              title="Description"
              className="h-80"
              disabled={!isEditable}
            />

            {isEditable ? (
              <div className="flex gap-2">
                <Button type="submit" title="Save" className="w-3/4">
                  Submit
                </Button>
                <Button type="reset" variant="secondary" title="Reset" onClick={() => form.reset()}>
                  Reset
                </Button>
              </div>
            ) : null}
          </div>
        </form>
      </Form>
    </div>
  )
}
