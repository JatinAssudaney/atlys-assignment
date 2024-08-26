import { error } from 'console';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  suffix?: React.ReactNode;
  secondaryLabel?: React.LabelHTMLAttributes<HTMLLabelElement>;
  isInvalid?: boolean;
  errorMessage?: string[];
}

function Input(props: InputProps) {
  const {
    suffix = null,
    type = 'text',
    className = '',
    isInvalid = false,
    errorMessage = [],
    id,
    label,
    secondaryLabel,
    ...restProps
  } = props;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-primary-text font-medium text-sm">
        <label className="cursor-pointer" htmlFor={id}>
          {label}
        </label>
        {secondaryLabel ? (
          <label
            {...secondaryLabel}
            className={twMerge(
              'text-xs cursor-pointer',
              secondaryLabel.className
            )}
          />
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <div
          className={twMerge(
            'flex rounded-[0.25rem] p-3 border-[1.5px] border-primary-border focus-within:border-primary',
            isInvalid ? 'border-red-500' : ''
          )}
        >
          <input
            type={type}
            id={id}
            className={twMerge(
              'bg-transparent text-custom-ph border-none text-secondary-text w-full pr-10 outline-none',
              className
            )}
            {...restProps}
          />
          {suffix}
        </div>
        {errorMessage.length ? (
          <div className="text-xs text-red-500 flex flex-col">
            <span>{errorMessage[0]}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Input;
