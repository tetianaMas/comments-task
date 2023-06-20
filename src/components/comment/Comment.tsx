import { UserName } from '../user-name/UserName';
import { ICommentProps } from './types';

export const Comment: React.FC<ICommentProps> = ({ comment }: ICommentProps) => {
  return (
    <div>
      <UserName userName={comment.user.username} />
      <p>{comment?.body}</p>
    </div>
  );
};
