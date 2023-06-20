export interface IButtonProps {
  text: string;
  onClick: (e: ButtonEvent) => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  classNames?: string;
  isDisabled?: boolean;
}

export type ButtonEvent = React.MouseEvent<HTMLButtonElement>;
