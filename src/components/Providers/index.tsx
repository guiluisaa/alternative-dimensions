'use client';

import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import client from '@lib/apollo-client';
import { theme } from '@lib/theme';
import GlobalStyle from '@lib/theme/GlobalStyle';

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ApolloProvider>
  );
}
