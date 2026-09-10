import { CircleQuestionMark } from 'lucide-react';
import { InputText } from './InputText';
import { useState, type ComponentType, type SubmitEventHandler } from 'react';


interface InputEmailProps {
  active: boolean;
  prevIcon?: ComponentType<{ className: string }>;
  err?: boolean;
}

export const InputEmail = ({active, prevIcon, err}: InputEmailProps) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('This is a hint text');
  const [error, setError] = useState(err);
  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!email.length) {
      setMessage('Email is required');
      setError(true);
    } else if (!email.includes('@')) {
      setMessage('Invalid email');
      setError(true);
    } else {
      setMessage('');
      setError(false);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-1.5 justify-start items-start"
    >
      <InputText
        type="email"
        label="Email"
        prevIcon={prevIcon}
        icon={CircleQuestionMark}
        placeholder="jhonDoe@gmail.com"
        error={error}
        message={message}
        handleOnChange={handleOnChange}
        active={active}
      />
    </form>
  );
};
