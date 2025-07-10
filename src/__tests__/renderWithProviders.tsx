import { ReactElement } from 'react';

import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { render, RenderOptions } from '@testing-library/react';

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  apolloMocks?: MockedResponse[];
}

interface AllProvidersProps {
  children?: React.ReactNode;
  apolloMocks?: MockedResponse[];
}

function AllProviders({
  children,
  apolloMocks = []
}: AllProvidersProps) {
  if (apolloMocks.length > 0) {
    return (
      <MockedProvider mocks={apolloMocks} addTypename={false}>
        {children}
      </MockedProvider>
    );
  }

  return <>{children}</>;
}

export function renderWithProviders(
  ui: ReactElement,
  options: CustomRenderOptions = {}
) {
  const { apolloMocks, ...renderOptions } = options;

  const Wrapper = ({ children }: { children?: React.ReactNode }) => (
    <AllProviders apolloMocks={apolloMocks}>
      {children}
    </AllProviders>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

// Re-export everything from React Testing Library
export * from '@testing-library/react';

// Override render method with our custom implementation
export { renderWithProviders as render };
