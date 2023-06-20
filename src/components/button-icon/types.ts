import { ReactNode } from 'react';

export interface IButtonIconProps {
  children: ReactNode;
  onClick: () => void;
  classNames?: string;
  isDisabled?: boolean;
}
