import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
type ColorProps = {
  color: string;
};

export const Color = styled.div<ColorProps>`
  width: 12px;
  height: 12px;
  background-color: ${({ color }) => color};
  border-radius: 2px;
`;

export const Label = styled.span`
  font-size: 12px;
`;
