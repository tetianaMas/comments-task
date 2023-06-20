import { IUserNameProps } from './types';

export const UserName: React.FC<IUserNameProps> = ({ userName }: IUserNameProps) => {
  const [name = '', surname = ''] = userName.split(' ');
  const firstLetterUppercase = (name: string): string => {
    if (!name) {
      return '';
    }

    return name[0].toUpperCase();
  };

  const shortName = `${firstLetterUppercase(name)}${firstLetterUppercase(surname)}`;

  return (
    <div>
      <div>{shortName || name}</div>
      <p>{userName}</p>
    </div>
  );
};
