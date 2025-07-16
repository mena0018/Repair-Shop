import { z } from 'zod';

const BaseAuthFormSchema = z.object({
  email: z.string().email().max(50),
  password: z.string().min(8).max(32),
});

export const SignUpFormSchema = BaseAuthFormSchema.extend({
  name: z.string().min(1).max(50),
  images: z.string().optional(),
});
export type SignUpFormFields = z.infer<typeof SignUpFormSchema>;

export const SignInFormSchema = BaseAuthFormSchema.extend({
  rememberMe: z.boolean().optional(),
});
export type SignInFormFields = z.infer<typeof SignInFormSchema>;
