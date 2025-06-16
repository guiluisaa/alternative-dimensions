'use client';

import { ApolloProvider } from '@apollo/client';

import client from '@lib/apollo-client';
import { themeClass } from '@lib/theme';

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <ApolloProvider client={client}>
      <div className={themeClass}>{children}</div>
    </ApolloProvider>
  );
}
