import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'contained';
  size?: 'sm' | 'md';
}

export default function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'sm', className = '', ...rest } = props;

  let buttonClassNames = `btn`;
  if (variant) {
    buttonClassNames += ' btn--' + variant;
  }
  if (size) {
    buttonClassNames += ' btn--' + size;
  }

  if (className) {
    buttonClassNames += ' ' + className;
  }

  return (
    <button className={buttonClassNames} {...rest}>
      {children}
    </button>
  );
}
