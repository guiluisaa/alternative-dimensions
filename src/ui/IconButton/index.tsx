import { ButtonHTMLAttributes } from 'react';

import { clsx } from 'clsx';

import { Icon } from '@ui/Icon';

import * as styles from './styles.css';

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  name: 'close';
  size?: 'sm' | 'md' | 'lg';
};

const sizeMap = {
  sm: 16,
  md: 20,
  lg: 24
};

export function IconButton({
  size = 'md',
  name,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={clsx(styles.button, styles.sizes[size], className)}
      {...props}
    >
      <Icon size={sizeMap[size]} name={name} />
    </button>
  );
}
