import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 24px;
  background-color: ${({ theme }) => theme.color.neutral.black};
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral.lightGray};
`;
