import { HTMLAttributes } from 'react';

import { clsx } from 'clsx';

import * as styles from './styles.css';

type SpinnerProps = HTMLAttributes<HTMLDivElement> & {
  size?: 'sm' | 'md' | 'lg';
};

export function Spinner({ size = 'md', className, ...props }: SpinnerProps) {
  return (
    <div
      className={clsx(styles.wrapper, styles.sizes[size], className)}
      {...props}
    />
  );
}
