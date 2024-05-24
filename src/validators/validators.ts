import { z } from 'zod';

export const CommentFormSchema = z.object({
  id: z.string({ required_error: 'Wymagane' }).optional(),
  attribution: z.string().min(2).max(50),
  comment: z.string().min(2).max(50),
  hotelName: z.string(),
});
export type CommentFormSchemaType = z.infer<typeof CommentFormSchema>;

export const ContactUsFormSchema = z.object({
  phoneNumber: z
    .string()
    .regex(
      /^\+?[1-9]\d{1,14}$|^\+?[1-9]\d{0,2} \d{3} \d{3} \d{3}$|^\d{3} \d{3} \d{3}$/,
      'Phone number must be in a valid format, e.g., +48123456789, +48 123 123 123, 123456789, or 123 123 123'
    ),
  message: z.string().min(1, 'Message required').max(500, 'The message must not exceed 500 characters'),
  hotelName: z.string(),
});
export type ContactUsFormSchemaType = z.infer<typeof ContactUsFormSchema>;
