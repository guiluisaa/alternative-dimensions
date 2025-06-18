import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 1024px) {
    position: sticky;
    top: 0;
    z-index: 100;
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
  width: 100%;
`;
