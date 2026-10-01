import { CircleQuestionMark } from 'lucide-react';
import { InputText } from './InputText';
import type { InputErrorEmail } from './inputErrors';
import { useState, type ComponentType, type SubmitEventHandler } from 'react';

interface InputEmailProps {
  active: boolean;
  prevIcon?: ComponentType<{ className: string }>;
}

export const InputEmail = ({ active, prevIcon }: InputEmailProps) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<InputErrorEmail>();

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!email.length || !email.includes('@')) { 
      setError({ errorType: 'email', errorMessage: 'Invalid email' });
    } else {
      setError(undefined);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value); 
  };

  console.log("hello")


  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-1.5 justify-start items-start"
    >
      <InputText
        type="email"
        label="Email"
        prevIcon={prevIcon}
        icon={CircleQuestionMark}
        placeholder="jhonDoe@gmail.com"
        error={error}
        handleOnChange={handleOnChange}
        active={active}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
