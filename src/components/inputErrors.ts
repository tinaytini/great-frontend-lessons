export type InputErrorEmail = {
  errorType: 'email';
  errorMessage: 'Invalid email';
};

export type InputErrorPassword = {
  errorType: 'password';
  errorMessage:
    | 'Password is required'
    | 'Password length should be at least 6'
    | 'Password should contain upper case letters';
};

export type InputError = InputErrorEmail | InputErrorPassword;

export const isEmailError = (
  error: InputError | undefined,
): error is InputErrorEmail => error?.errorType === 'email';



export const isPasswordError = (
  error: InputError | undefined,
): error is InputErrorPassword => error?.errorType === 'password';
