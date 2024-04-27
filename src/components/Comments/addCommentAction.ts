'use server';

import { createComment, updateStatusComment } from '@/graphql/mutations';
import { revalidatePath } from 'next/cache';
import { CommentFormSchemaType, CommentFormSchema } from '@/validators/validators';

export const addCommentAction = async (data: CommentFormSchemaType) => {
  const result = CommentFormSchema.safeParse(data);

  if (!result.success) {
    const errorMessages = result.error.issues.reduce((prev, issue) => {
      return (prev += issue.message);
    }, '');
    return {
      error: errorMessages,
    };
  }

  try {
    const { attribution, comment, hotelName } = result.data;
    const createdComment = await createComment(attribution, comment, hotelName);

    const commentId = createdComment?.createReview?.id;

    if (commentId) {
      await updateStatusComment(commentId);
    }
  } catch (error) {
    return {
      error: 'Something went wrong....',
    };
  } finally {
    revalidatePath('/hotels/[slug]', 'page');
  }
};
