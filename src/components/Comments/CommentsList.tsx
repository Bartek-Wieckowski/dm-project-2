import { Comment } from '@/types/types';
import { formatDate } from '@/lib/helpers';
import CommentItem from './CommentItem';

type CommentsListProps = {
  optimisticComments: Comment[];
};

export default function CommentsList({ optimisticComments }: CommentsListProps) {
  return (
    <ul>
      {optimisticComments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}
