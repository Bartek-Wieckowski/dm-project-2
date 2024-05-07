import { z } from 'zod';

export const CommentFormSchema = z.object({
  id: z.string({required_error: "Wymagane"}).optional(),
  attribution: z.string().min(2).max(50),
  comment: z.string().min(2).max(50),
  hotelName: z.string(),
});
export type CommentFormSchemaType = z.infer<typeof CommentFormSchema>;
