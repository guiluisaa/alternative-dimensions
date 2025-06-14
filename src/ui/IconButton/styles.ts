import styled from 'styled-components';

const DEFAULT_SIZE = 20;

type WrapperProps = {
  size?: number;
};

export const Wrapper = styled.button<WrapperProps>`
  color: ${({ theme }) => theme.color.neutral.darkGray};
  background: none;
  background-color: transparent;
  border: none;

  width: ${({ size }) => size ?? DEFAULT_SIZE}px;
  height: ${({ size }) => size ?? DEFAULT_SIZE}px;
  font-size: ${({ size }) => size ?? DEFAULT_SIZE}px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: color 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.neutral.deepGray};
  }
`;
