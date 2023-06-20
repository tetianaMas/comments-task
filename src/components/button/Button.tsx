import React from 'react';
import { IButtonProps } from './types';
import './button.css';

export const Button: React.FC<IButtonProps> = ({
  text,
  onClick,
  type = 'button',
  classNames = '',
  isDisabled = false,
}: IButtonProps) => {
  return (
    <button className={`button ${classNames}`} onClick={onClick} type={type} disabled={isDisabled}>
      {text}
    </button>
  );
};
