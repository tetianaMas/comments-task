import { UserName } from '../user-name/UserName';
import { ICommentProps } from './types';
import './comment.css';

export const Comment: React.FC<ICommentProps> = ({ comment }: ICommentProps) => {
  return (
    <div className="comment">
      <UserName userName={comment?.user?.username} classNames="comment__class-name" />
      <p className="comment__body text-no-wrap">{comment?.body}</p>
    </div>
  );
};
