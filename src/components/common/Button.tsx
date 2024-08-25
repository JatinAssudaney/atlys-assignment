import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

function Button(props: ButtonProps) {
  const { type, className = '', ...restProps } = props;
  return (
    <button
      {...restProps}
      type={type}
      className={twMerge(
        'bg-primary text-white p-3 rounded-[4px] font-medium transition-colors duration-200 hover:bg-custom-button-hover',
        className
      )}
    />
  );
}

export default Button;
