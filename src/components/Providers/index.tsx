'use client';

import { ApolloProvider } from '@apollo/client';
import client from '@lib/apollo-client';

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
