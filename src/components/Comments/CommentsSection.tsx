'use client';

import styles from './commentForm.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { addCommentAction } from './addCommentAction';
import { Comment } from '../../types/types';
import { useOptimistic, useTransition } from 'react';
import CommentsList from './CommentsList';
import { CommentFormSchema, CommentFormSchemaType } from '@/validators/validators';

type AddCommentFormProps = {
  hotelName: string;
  comments: Comment[];
};

export default function CommentsSection({ hotelName, comments }: AddCommentFormProps) {
  const [optimisticComments, addOptimisticComment] = useOptimistic(comments, (state, newComment: Comment) => {
    return [...state, newComment];
  });
  const [, startTransition] = useTransition();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<CommentFormSchemaType>({ mode: 'onTouched', resolver: zodResolver(CommentFormSchema) });

  const onSubmit = handleSubmit(async (data) => {
    startTransition(() => {
      addOptimisticComment({
        id: crypto.randomUUID(),
        createdAt: new Date(),
        attribution: data.attribution,
        comment: data.comment,
      });
    });
    const response = await addCommentAction(data);
    if (response?.error) {
      alert(response.error);
    }
    reset();
  });

  return (
    <>
      <h3>Add Comment</h3>
      <form onSubmit={onSubmit}>
        <div className={styles.inputWrapper}>
          <input className="input" placeholder="username" {...register('attribution')} required />
          {errors?.attribution && <p className={styles.errorMsg}>{errors?.attribution?.message}</p>}
        </div>
        <div className={styles.inputWrapper}>
          <input className="input" placeholder="comment" {...register('comment')} required />
          {errors?.comment && <p className={styles.errorMsg}>{errors?.comment?.message}</p>}
        </div>
        <div className={styles.inputWrapper}>
          <input type="hidden" {...register('hotelName')} value={hotelName} />
        </div>
        <button type="submit" className={styles.buttonSend} disabled={isSubmitting || !isValid}>
          {isSubmitting ? 'Adding...' : 'Add'}
        </button>
      </form>
      <hr style={{ width: '100%' }} />
      <div className={styles.hotelComments}>
        {optimisticComments.length > 0 ? (
          <>
            <h3>Read Comments</h3>
            <CommentsList optimisticComments={optimisticComments} />
          </>
        ) : (
          <h3>No comments yet!</h3>
        )}
      </div>
    </>
  );
}
