import { Eye, EyeClosed } from 'lucide-react';
import { InputText } from './InputText';
import type { InputErrorPassword } from './inputErrors';
import { useState, type SubmitEventHandler } from 'react';

export const InputPassword = () => {
  const [showPassword, setShowPassword] = useState<'password' | 'text'>('password');
  const [closedEye, setClosedEye] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState<InputErrorPassword>();

  const chars = Array.from(password);
  const hasUpperCase = chars.some((char) => /[A-Z]/.test(char));

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!password.length) {
      setError({ errorType: 'password', errorMessage: 'Password is required' });
    } else if (password.length < 6) {
      setError({ errorType: 'password', errorMessage: 'Password length should be at least 6' });
    } else if (!hasUpperCase) {
      setError({ errorType: 'password', errorMessage: 'Password should contain upper case letters' });
    } else {
      setError(undefined);
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
      noValidate
      className="flex flex-col gap-1.5 justify-start items-start"
    >
      <InputText
        type={showPassword}
        label="Password"
        icon={eyeOpen}
        placeholder={placeholder}
        error={error}
        handleIcon={handleShowPassword}
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
