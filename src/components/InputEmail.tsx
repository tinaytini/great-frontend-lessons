import { CircleQuestionMark } from 'lucide-react';
import { InputText } from './InputText';
import { useState, type SubmitEventHandler } from 'react';

export const InputEmail = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!email.length) {
      setErrorMessage('Email is required');
      setError(true);
    } else if (!email.includes('@')) {
      setErrorMessage('Invalid email');
      setError(true);
    } else {
      setErrorMessage('');
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
        icon={CircleQuestionMark}
        placeholder="jhonDoe@gmail.com"
        error={error}
        errorMessage={errorMessage}
        handleOnChange={handleOnChange}
      />
      <button
        className="border-2 rounded px-4 py-2 bg-cyan-900 text-amber-50"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
