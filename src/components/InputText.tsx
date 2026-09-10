import {
  type ChangeEvent,
  type ComponentType,
} from 'react';

interface InputProps {
  type?: string;
  label: string;
  prevIcon?: ComponentType<{ className: string }>;
  icon?: ComponentType<{ className: string }>;
  placeholder?: string;
  error?: boolean;
  message?: string;
  active?: boolean;
  handleIcon?: () => void;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({
  type,
  label,
  prevIcon: LeadingIcon,
  icon: Icon,
  placeholder,
  error,
  message,
  active,
  handleIcon,
  handleOnChange,
}: InputProps) => {
  return (
    <div className="w-80 flex flex-col gap-1.5 justify-start items-start relative">
      <label className="flex flex-col gap-1.5 self-stretch justify-start relative">
        <span className="font-medium text-sm text-left text-neutral-700">
          {label}
        </span>
        {LeadingIcon && (
        <div
          className="absolute left-3 top-9.5 text-neutral-400 ease-in-out"
        >
          <LeadingIcon className="h-4 w-4 cursor-pointer" />
        </div>
      )}
        <input
          className={`
            focus:outline-none 
            focus-visible:outline-none
            text-neutral-900 self-stretch bg-neutral-100 py-2.5 rounded border border-solid text-sm 
            active:border-neutral-200 
            focus:border-indigo-700
            focus:ring-2
            focus:ring-indigo-100
            ${LeadingIcon ? 'px-8.5' : 'px-3.5'}
            ${active ? 'border-neutral-300 placeholder:text-neutral-400' : 'border-neutral-200 outline-neutral-100 text-neutral-100 placeholder:text-neutral-300'}
            `}
            
          type={type}
          placeholder={placeholder}
          name={label.toLowerCase()}
          onChange={handleOnChange}
          required
        />
        <div className={`text-left ${error ? 'text-red-600' : 'text-neutral-500'} text-xs `}>{message}</div>
      </label>
      {Icon && (
        <div
          onClick={handleIcon}
          className="absolute right-3 top-9.5 text-neutral-400 ease-in-out"
        >
          <Icon className={`${error ? 'text-red-600' : 'text-neutral-400'} h-4 w-4 cursor-pointer`} />
        </div>
      )}
    </div>
  );
};
