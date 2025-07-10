'use client';

import { Button as ShadcnButton } from "@/components/ui/button";
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <ShadcnButton variant={variant} size={size} {...props}>
      {children}
    </ShadcnButton>
  );
}
