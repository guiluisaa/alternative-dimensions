import styled, { css } from 'styled-components';

type WrapperProps = {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
};

const getButtonStyles = (variant: WrapperProps['variant'] = 'primary') => css`
  color: ${({ theme }) =>
    variant === 'primary'
      ? theme.color.neutral.white
      : theme.color.neutral.black};

  background-color: ${({ theme }) =>
    variant === 'primary'
      ? theme.color.neutral.black
      : theme.color.neutral.white};

  &:hover {
    background-color: ${({ theme }) =>
      variant === 'primary'
        ? theme.color.neutral.deepGray
        : theme.color.neutral.lightGray};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const getButtonSize = (size: WrapperProps['size'] = 'md') => css`
  padding: ${size === 'sm' ? '0.25rem 1rem' : '0.5rem 1.5rem'};
  font-size: ${size === 'sm' ? '0.875rem' : '1rem'};
`;

export const Wrapper = styled.button<WrapperProps>`
  font-weight: ${({ theme }) => theme.font.weight.bold};

  ${({ variant }) => getButtonStyles(variant)}
  ${({ size }) => getButtonSize(size)}

  border-radius: ${({ theme }) => theme.border.radius.sm};

  cursor: pointer;
`;
