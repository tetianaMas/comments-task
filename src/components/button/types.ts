export interface IButtonProps {
  text: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  classNames?: string;
  isDisabled?: boolean;
}
