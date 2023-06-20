import { useEffect, useState } from 'react';
import { Button } from '../button/Button';
import './form.css';
import { IFormProps } from './types';
import { ButtonEvent } from '../button/types';

export const Form: React.FC<IFormProps> = ({ onSubmitClick }: IFormProps) => {
  const [textareaValue, setTextareaValue] = useState(() => {
    const prevComment = localStorage.getItem('comments-app-comment');
    return prevComment || '';
  });

  useEffect(() => {
    localStorage.setItem('comments-app-comment', textareaValue);
  }, [textareaValue]);

  return (
    <form className="form">
      <textarea
        className="form__textarea"
        name="textarea-input"
        id="1"
        cols={30}
        rows={10}
        placeholder="Lorem Ipsum"
        value={textareaValue}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextareaValue(e.target.value || '')}
      ></textarea>
      <Button
        onClick={(e: ButtonEvent) => {
          e.preventDefault();
          if (textareaValue) {
            onSubmitClick(textareaValue || '');
            setTextareaValue('');
          }
        }}
        text="Send"
        type="submit"
        classNames="form__button"
      ></Button>
    </form>
  );
};
