import { IUserNameProps } from './types';
import './userName.css';

export const UserName: React.FC<IUserNameProps> = ({ userName, classNames }: IUserNameProps) => {
  const [name = '', surname = ''] = userName.split(' ');
  const firstLetterUppercase = (name: string): string => (name ? name[0].toUpperCase() : '');
  const shortName = `${firstLetterUppercase(name)}${firstLetterUppercase(surname)}`;

  return (
    <div className={`username ${classNames}`}>
      <div className="username__avatar">{shortName || name}</div>
      <p className="username__text text-no-wrap">{userName}</p>
    </div>
  );
};
