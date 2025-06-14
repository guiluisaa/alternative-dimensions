import { ReactElement } from 'react';

import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/lib/theme';
import GlobalStyle from '@/lib/theme/GlobalStyle';

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  apolloMocks?: MockedResponse[];
  customTheme?: typeof theme;
}

interface AllProvidersProps {
  children?: React.ReactNode;
  apolloMocks?: MockedResponse[];
  customTheme?: typeof theme;
}

function AllProviders({
  children,
  apolloMocks = [],
  customTheme = theme
}: AllProvidersProps) {
  if (apolloMocks.length > 0) {
    return (
      <MockedProvider mocks={apolloMocks} addTypename={false}>
        <ThemeProvider theme={customTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </MockedProvider>
    );
  }

  return (
    <ThemeProvider theme={customTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export function renderWithProviders(
  ui: ReactElement,
  options: CustomRenderOptions = {}
) {
  const { apolloMocks, customTheme, ...renderOptions } = options;

  const Wrapper = ({ children }: { children?: React.ReactNode }) => (
    <AllProviders apolloMocks={apolloMocks} customTheme={customTheme}>
      {children}
    </AllProviders>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

// Re-export everything from React Testing Library
export * from '@testing-library/react';

// Override render method with our custom implementation
export { renderWithProviders as render };
