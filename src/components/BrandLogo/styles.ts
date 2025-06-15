import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const Logo = styled(Image).attrs({
  width: 40,
  height: 40,
  priority: true
})``;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.neutral.white};
`;
