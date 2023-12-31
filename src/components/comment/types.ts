import { CommentModel } from '../../models';

export interface ICommentProps {
  comment: CommentModel;
  onDeleteComment: (id: number) => void;
}
