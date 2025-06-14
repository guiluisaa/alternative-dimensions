'use client';

import { ButtonHTMLAttributes, ComponentProps } from 'react';

import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentProps<typeof S.Wrapper>;

export function Button({
  children,
  variant = 'secondary',
  size = 'sm',
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper variant={variant} size={size} {...props}>
      {children}
    </S.Wrapper>
  );
}
