import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0px 24px;

  & > * {
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 48px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    & > * {
      flex: 1;
    }
  }

  gap: 20px;
`;
