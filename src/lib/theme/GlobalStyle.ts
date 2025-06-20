import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    transition: 0.2s;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.color.neutral.white};
    color: ${({ theme }) => theme.font.color.primary};
    font-family:${({ theme }) => theme.font.family};
  }
`;

export default GlobalStyle;
