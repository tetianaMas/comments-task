import { CommentModel } from '../../models';

export interface ICommentListProps {
  comments: CommentModel[];
  onDeleteComment: (id: number) => void;
}
