import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.palette.red};
`;

export const Title = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.palette.red};
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.palette.red};
`;
