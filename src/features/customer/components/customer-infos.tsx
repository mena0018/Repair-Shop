import { Customer } from "@/generated/prisma"

export const CustomerInfos = ({ customer }: { customer: Customer }) => {
  return (
    <div className="mt-4 space-y-2">
      <h3 className="text-lg">Customer Info</h3>
      <hr className="w-4/5" />
      <p>
        {customer.firstName} {customer.lastName}
      </p>
      <p>{customer.address1}</p>
      {customer.address2 ? <p>{customer.address2}</p> : null}
      <p>
        {customer.city}, {customer.state} {customer.zip}
      </p>
      <hr className="w-4/5" />
      <p>{customer.phone}</p>
      <p>{customer.email}</p>
      <p>{customer.notes}</p>
    </div>
  )
}
