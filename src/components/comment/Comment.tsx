import { UserName } from '../user-name/UserName';
import { ICommentProps } from './types';
import './comment.css';
import { ButtonIcon } from '../button-icon/ButtonIcon';

export const Comment: React.FC<ICommentProps> = ({ comment }: ICommentProps) => {
  const onClick = () => console.log();
  return (
    <div className="comment">
      <UserName userName={comment?.user?.username} classNames="comment__class-name" />
      <p className="comment__body text-no-wrap">{comment?.body}</p>
      <ButtonIcon onClick={onClick} classNames="comment__delete-button">
        <span className="comment__delete-symbol">X</span>
      </ButtonIcon>
    </div>
  );
};
