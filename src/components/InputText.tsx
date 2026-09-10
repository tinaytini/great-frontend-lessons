import {
  type ChangeEvent,
  type ComponentType,
} from 'react';

interface InputProps {
  type?: string;
  label: string;
  icon?: ComponentType<{ className: string }>;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  handleIcon?: () => void;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({
  type,
  label,
  icon: Icon,
  placeholder,
  error,
  errorMessage,
  handleIcon,
  handleOnChange,
}: InputProps) => {
  return (
    <div className="w-80 flex flex-col gap-1.5 justify-start items-start relative">
      <label className="flex flex-col gap-1.5 self-stretch justify-start">
        <span className="font-medium text-sm text-left text-neutral-700">
          {label}
        </span>
        <input
          className={`
            focus:outline-none 
            focus-visible:outline-none
            text-neutral-900 self-stretch bg-neutral-50 px-3.5 py-2.5 rounded border border-solid border-neutral-200 text-sm 
            placeholder:text-neutral-500
            active:border-neutral-200 
            focus:border-indigo-700
            focus:ring-2
            focus:ring-indigo-100
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : ''}
            `}
          type={type}
          placeholder={placeholder}
          name={label.toLowerCase()}
          onChange={handleOnChange}
          required
        />
        <div className="text-left text-red-600 text-xs">{errorMessage}</div>
      </label>
      {Icon && (
        <div
          onClick={handleIcon}
          className="absolute right-3 top-9.5 text-neutral-800 ease-in-out"
        >
          <Icon className="h-4 w-4 cursor-pointer" />
        </div>
      )}
    </div>
  );
};
