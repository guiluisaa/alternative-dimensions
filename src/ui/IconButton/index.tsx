'use client';

import { ButtonHTMLAttributes } from 'react';

import { Icon } from '@ui/Icon';

import { cn } from '@/lib/cn';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number;
  name: 'close';
}

export function IconButton({ size = 20, name, className, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center text-neutral-darkGray hover:text-neutral-deepGray transition-colors',
        className
      )}
      style={{ width: size, height: size, fontSize: size }}
      {...props}
    >
      <Icon size={size} name={name} />
    </button>
  );
}
