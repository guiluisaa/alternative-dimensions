import styled, { css } from 'styled-components';

type WrapperProps = {
  align?: 'left' | 'center' | 'right';
  isHeader?: boolean;
};

export const Wrapper = styled.td.withConfig({
  shouldForwardProp: prop => prop !== 'isHeader'
})<WrapperProps>`
  padding: 0.5rem 1.5rem;
  text-align: ${({ align = 'left' }) => align};
  border: 1px solid ${({ theme }) => theme.color.neutral.lightGray};

  ${({ isHeader }) =>
    // TODO: create TableHeaderCell component
    isHeader &&
    css`
      font-weight: ${({ theme }) => theme.font.weight.bold};
    `}
`;
