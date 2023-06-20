import React from 'react';
import { IButtonIconProps } from './types';

export const ButtonIcon: React.FC<IButtonIconProps> = ({ children, onClick }: IButtonIconProps) => {
  return <button onClick={onClick}>{children}</button>;
};
