import { Comment } from '@/types/types';
import { formatDate } from '@/lib/helpers';
import styles from './commentForm.module.css';

type CommentItemProps = {
  comment: Comment;
};

export default function CommentItem({ comment }: CommentItemProps) {
  return (
    comment.comment && (
      <li className={styles.commentItem}>
        <div className={styles.commentAuthorDate}>
          <span>{comment.attribution}</span>
          <span>{formatDate(comment.createdAt as string)}</span>
        </div>
        <p className={styles.commentContent}>{comment.comment}</p>
      </li>
    )
  );
}
