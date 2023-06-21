import { UserName } from '../user-name/UserName';
import { ICommentProps } from './types';
import { ButtonIcon } from '../button-icon/ButtonIcon';
import './comment.css';

export const Comment: React.FC<ICommentProps> = ({ comment, onDeleteComment }: ICommentProps) => {
  return (
    <div className="comment">
      <UserName userName={comment?.user?.username} classNames="comment__user-name" />
      <p className="comment__body text-no-wrap">{comment?.body}</p>
      <ButtonIcon onClick={() => onDeleteComment(comment.id)} classNames="comment__delete-button">
        <span className="comment__delete-symbol">X</span>
      </ButtonIcon>
    </div>
  );
};
