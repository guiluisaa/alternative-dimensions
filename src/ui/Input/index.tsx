import { InputHTMLAttributes, forwardRef } from 'react';

import { clsx } from 'clsx';

import * as styles from './styles.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={clsx(styles.wrapper, className)} {...props} />
  )
);

Input.displayName = 'Input';
