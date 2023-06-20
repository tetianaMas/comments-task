import React from 'react';
import { IButtonIconProps } from './types';
import './button-icon.css';

export const ButtonIcon: React.FC<IButtonIconProps> = ({
  children,
  onClick,
  classNames = '',
  isDisabled = false,
}: IButtonIconProps) => {
  return (
    <button onClick={onClick} className={`button-icon ${classNames}`} disabled={isDisabled}>
      {children}
    </button>
  );
};
