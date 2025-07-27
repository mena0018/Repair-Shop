import { z } from "zod"

export const CustomerSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address1: z.string().min(1, "Address is required"),
  address2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().length(3, "State must be exactly 3 characters"),
  email: z.string().email("Invalid email address"),
  zip: z.string().regex(/^\d{5}$/, "Invalid Zip code. Use 5 digits"),
  phone: z.string().regex(/^\d{10}$/, "Invalid phone number. Use 10 digits"),
  notes: z.string().optional(),
  active: z.boolean().default(true)
})

export type CustomerFields = z.infer<typeof CustomerSchema>
