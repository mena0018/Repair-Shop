"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"

import { InputWithLabel } from "@/components/rhf/input-with-label"
import { SelectWithLabel } from "@/components/rhf/select-with-label"
import { SwitchWithLabel } from "@/components/rhf/switch-with-label"
import { TextAreaWithLabel } from "@/components/rhf/textarea-with-label"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { CustomerFields, CustomerSchema, states } from "@/features/customer"
import { Customer } from "@/generated/prisma"

type Props = {
  customer?: Customer
}

export const CustomerForm = ({ customer }: Props) => {
  const isEditForm = customer?.id
  const { getPermission, isLoading } = useKindeBrowserClient()
  const isManager = !isLoading && getPermission("manager")?.isGranted

  const defaultValues: CustomerFields = {
    firstName: customer?.firstName ?? "",
    lastName: customer?.lastName ?? "",
    address1: customer?.address1 ?? "",
    address2: customer?.address2 ?? "",
    city: customer?.city ?? "",
    state: customer?.state ?? "",
    email: customer?.email ?? "",
    zip: customer?.zip ?? "",
    phone: customer?.phone ?? "",
    notes: customer?.notes ?? "",
    active: customer?.active ?? true
  }

  const form = useForm<CustomerFields>({
    mode: "onBlur",
    resolver: zodResolver(CustomerSchema),
    defaultValues
  })

  const onSubmit: SubmitHandler<CustomerFields> = async (data) => {
    alert(data)
  }

  return (
    <div className="mt-4 flex flex-col gap-6 sm:px-8">
      <h2 className="text-2xl font-bold">
        {isEditForm ? `Edit Customer #${customer.id}` : "New Customer Form"}
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 md:flex-row md:gap-8"
        >
          <div className="flex w-full max-w-xs flex-col gap-4">
            <InputWithLabel<CustomerFields> required name="firstName" title="First name" />
            <InputWithLabel<CustomerFields> required name="lastName" title="Last name" />
            <InputWithLabel<CustomerFields> required name="address1" title="Address 1" />
            <InputWithLabel<CustomerFields> name="address2" title="Address 2" />
            <InputWithLabel<CustomerFields> required name="city" title="City" />
          </div>

          <div className="flex w-full max-w-xs flex-col gap-4">
            <InputWithLabel<CustomerFields> required name="email" title="Email" />
            <InputWithLabel<CustomerFields> required name="zip" title="Zip code" />
            <InputWithLabel<CustomerFields> required name="phone" title="Phone" />
            <TextAreaWithLabel<CustomerFields> name="notes" title="Notes" className="h-40" />
            <SelectWithLabel<CustomerFields> required name="state" title="State" data={states} />

            {isManager && isEditForm ? (
              <SwitchWithLabel<CustomerFields> name="active" title="Active" />
            ) : null}

            <div className="flex gap-2">
              <Button type="submit" title="Save" className="w-3/4">
                Submit
              </Button>
              <Button type="reset" variant="secondary" title="Reset" onClick={() => form.reset()}>
                Reset
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}
