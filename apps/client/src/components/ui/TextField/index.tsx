import { InputHTMLAttributes, forwardRef } from 'react';
import './TextField.scss';
import Image from 'next/image';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
  roundedFull?: boolean;
  sizes?: 'sm' | 'md';
}
const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    className,
    label,
    id,
    error,
    helperText,
    value,
    roundedFull,
    sizes = 'sm',
    ...rest
  } = props;

  let textfieldClassName = 'textfield';
  if (error && helperText !== '') {
    textfieldClassName += ` error`;
  }

  if (error === false && helperText == undefined && value !== '') {
    textfieldClassName += ` success`;
  }
  if (className) {
    textfieldClassName += ` ${className}`;
  }

  if (roundedFull) {
    textfieldClassName += ` rounded-full`;
  }

  if (sizes !== 'sm') {
    textfieldClassName += ` textfield--${sizes}`;
  }

  return (
    <fieldset className={textfieldClassName}>
      {label && <label htmlFor={id}>{label}:</label>}
      <input ref={ref} id={id} type='text' value={value} {...rest} />
      {error && helperText && (
        <small className='textfield__error'>
          <Image src='/icons/error.svg' alt='error-icon' width={18} height={18} />
          {helperText}
        </small>
      )}
    </fieldset>
  );
});

export default TextField;
