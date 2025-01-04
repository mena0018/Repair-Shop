import { z } from 'zod';

export const DEFAULT_TECH_ID = '(New)';
export const DEFAULT_TECH_TICKET = 'new-ticket-tech@gmail.com';

export const TicketSchema = z.object({
  id: z.union([z.number(), z.literal(DEFAULT_TECH_ID)]),
  customerId: z.number().int().positive(),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  completed: z.boolean(),
  tech: z.string().email('Invalid email address'),
});

export type TicketFields = z.infer<typeof TicketSchema>;
