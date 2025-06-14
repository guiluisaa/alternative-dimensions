import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const DEFAULT_SIZE = 20;

type WrapperProps = {
  size?: number;
};

export const Wrapper = styled.div<WrapperProps>`
  display: inline-block;
  width: ${({ size }) => size ?? DEFAULT_SIZE}px;
  height: ${({ size }) => size ?? DEFAULT_SIZE}px;
  border: 4px solid ${({ theme }) => theme.color.neutral.lightGray};
  border-top: 4px solid ${({ theme }) => theme.color.neutral.black};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
