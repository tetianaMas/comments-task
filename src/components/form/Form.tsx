import { Button } from '../button/Button';
import './form.css';

export const Form: React.FC = () => {
  const onSendClick = () => console.log('clclc');
  return (
    <form className="form">
      <textarea
        className="form__textarea"
        name="textarea-input"
        id="1"
        cols={30}
        rows={10}
        placeholder="Lorem Ipsum"
      ></textarea>
      <Button onClick={onSendClick} text="Send" type="submit" classNames="form__button"></Button>
    </form>
  );
};
