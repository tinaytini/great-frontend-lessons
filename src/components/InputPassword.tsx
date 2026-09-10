import { Eye, EyeClosed } from 'lucide-react';
import { InputText } from './InputText';
import { useState, type SubmitEventHandler } from 'react';

export const InputPassword = () => {
  const [showPassword, setShowPassword] = useState('password');
  const [closedEye, setClosedEye] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  const chars = Array.from(password);
  const hasUpperCase = chars.some((char) => /[A-Z]/.test(char));

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!password.length) {
      setErrorMessage('Password is required');
      setError(true);
    } else if (password.length < 6) {
      setErrorMessage('Password length should be at least 6');
      setError(true);
    } else if (!hasUpperCase) {
      setErrorMessage('Password should contain upper case letters');
      setError(true);
    } else {
      setErrorMessage('');
      setError(false);
    }
  };

  const handleShowPassword = () => {
    if (showPassword === 'password') {
      setShowPassword('text');
      setClosedEye(true);
    } else {
      setShowPassword('password');
      setClosedEye(false);
    }
  };

  const eyeOpen = closedEye ? Eye : EyeClosed;
  const placeholder = showPassword === 'password' ? '**********' : '123123123';

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-1.5 justify-start items-start"
    >
      <InputText
        type={showPassword}
        label="Password"
        icon={eyeOpen}
        placeholder={placeholder}
        error={error}
        handleIcon={handleShowPassword}
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
