'use client';

import { ButtonHTMLAttributes } from 'react';

import { clsx } from 'clsx';

import * as styles from './styles.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
  children: React.ReactNode;
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        styles.button,
        styles.variants[variant],
        styles.sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
