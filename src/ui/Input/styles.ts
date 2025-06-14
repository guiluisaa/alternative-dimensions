import styled from 'styled-components';

export const Wrapper = styled.input`
  padding: 0.5rem 1.5rem;
  border-radius: ${({ theme }) => theme.border.radius.sm};
  border: 1px solid ${({ theme }) => theme.color.neutral.lightGray};
`;
