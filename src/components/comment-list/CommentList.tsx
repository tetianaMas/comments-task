import { CommentModel } from '../../models';
import { ICommentListProps } from './types';
import { Comment } from '../comment/Comment';
import './comment-list.css';

export const CommentList: React.FC<ICommentListProps> = ({ comments, onDeleteComment }: ICommentListProps) => {
  const commentNodes = comments?.map((commentItem: CommentModel) => (
    <Comment key={commentItem.id} comment={commentItem} onDeleteComment={onDeleteComment} />
  ));

  return <div className="comment-list">{commentNodes}</div>;
};
