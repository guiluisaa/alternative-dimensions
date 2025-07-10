'use client';

import { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-bold transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-sm',
  {
    variants: {
      variant: {
        primary:
          'bg-neutral-black text-neutral-white hover:bg-neutral-deepGray',
        secondary:
          'bg-neutral-white text-neutral-black border border-neutral-lightGray hover:bg-neutral-lightGray'
      },
      size: {
        sm: 'px-4 py-1 text-sm',
        md: 'px-6 py-2 text-base'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> { }

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
