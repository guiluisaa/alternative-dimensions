import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.neutral.black};
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CharactersTableWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  flex: 1;

  & > div {
    flex: 1;
  }
`;
