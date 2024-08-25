import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  suffix?: React.ReactNode;
  secondaryLabel?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

function Input(props: InputProps) {
  const {
    suffix = null,
    type = 'text',
    className = '',
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
      <div className="flex rounded-[0.25rem] p-3 border-[1.5px] border-primary-border focus-within:border-primary">
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
    </div>
  );
}

export default Input;
