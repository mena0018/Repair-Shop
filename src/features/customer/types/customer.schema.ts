import { z } from 'zod';

export const CustomerSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  address1: z.string().min(1, 'Address is required'),
  address2: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  state: z.string().length(2, 'State must be exactly 2 characters'),
  email: z.string().email('Invalid email address'),
  zip: z
    .string()
    .regex(
      /^\d{5}(-\d{4})?$/,
      'Invalid Zip code. Use 5 digits or 5 digits followed by a hyphen and 4 digits',
    ),
  phone: z.string().regex(/^\d{3}-\d{3}-\d{4}$/, 'Invalid phone number format. Use XXX-XXX-XXXX'),
  notes: z.string().optional(),
});

export type CustomerFields = z.infer<typeof CustomerSchema>;
