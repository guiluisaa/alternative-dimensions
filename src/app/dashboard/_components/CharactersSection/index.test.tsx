import { MockedResponse } from '@apollo/client/testing';
import { GraphQLError } from 'graphql';

import {
  renderWithProviders,
  screen,
  fireEvent,
  waitFor,
  act,
  within
} from '@/__tests__/renderWithProviders';
import { GetCharactersDocument, GetCharactersQuery } from '@/generated/graphql';

import { CharactersSection } from './index';

jest.useFakeTimers();

const mockCharactersData: GetCharactersQuery = {
  characters: {
    __typename: 'Characters',
    info: {
      __typename: 'Info',
      count: 826,
      pages: 42,
      next: 2,
      prev: null
    },
    results: [
      {
        __typename: 'Character',
        id: '1',
        name: 'Rick Sanchez',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        location: {
          __typename: 'Location',
          id: '20',
          name: 'Citadel of Ricks'
        }
      },
      {
        __typename: 'Character',
        id: '2',
        name: 'Morty Smith',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        location: {
          __typename: 'Location',
          id: '20',
          name: 'Citadel of Ricks'
        }
      }
    ]
  }
};

const mockSearchResultsData: GetCharactersQuery = {
  characters: {
    __typename: 'Characters',
    info: {
      __typename: 'Info',
      count: 1,
      pages: 1,
      next: null,
      prev: null
    },
    results: [
      {
        __typename: 'Character',
        id: '1',
        name: 'Rick Sanchez',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        location: {
          __typename: 'Location',
          id: '20',
          name: 'Citadel of Ricks'
        }
      }
    ]
  }
};

const mockPage2Data: GetCharactersQuery = {
  characters: {
    __typename: 'Characters',
    info: {
      __typename: 'Info',
      count: 826,
      pages: 42,
      next: 3,
      prev: 1
    },
    results: [
      {
        __typename: 'Character',
        id: '3',
        name: 'Summer Smith',
        image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
        location: {
          __typename: 'Location',
          id: '20',
          name: 'Citadel of Ricks'
        }
      }
    ]
  }
};

const mockEmptyData: GetCharactersQuery = {
  characters: {
    __typename: 'Characters',
    info: {
      __typename: 'Info',
      count: 0,
      pages: 0,
      next: null,
      prev: null
    },
    results: []
  }
};

describe('CharactersSection Integration Tests', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should match snapshot', () => {
    const mocks: MockedResponse[] = [
      {
        request: {
          query: GetCharactersDocument,
          variables: { filter: { name: '' } }
        },
        result: { data: mockCharactersData }
      }
    ];

    const { container } = renderWithProviders(<CharactersSection />, {
      apolloMocks: mocks
    });
    expect(container).toMatchSnapshot();
  });

  it('should render the title and search input', () => {
    const mocks: MockedResponse[] = [
      {
        request: {
          query: GetCharactersDocument,
          variables: { filter: { name: '' } }
        },
        result: { data: mockCharactersData }
      }
    ];

    renderWithProviders(<CharactersSection />, { apolloMocks: mocks });

    expect(screen.getByText('Characters')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Search for a character')
    ).toBeInTheDocument();
  });

  it('should fetch and render character data on initial load', async () => {
    const mocks: MockedResponse[] = [
      {
        request: {
          query: GetCharactersDocument,
          variables: { filter: { name: '' } }
        },
        result: { data: mockCharactersData }
      }
    ];

    renderWithProviders(<CharactersSection />, { apolloMocks: mocks });

    expect(screen.getByTestId('spinner')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    });

    expect(screen.getByText('Avatar')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Morty Smith')).toBeInTheDocument();
    expect(screen.getAllByText('Citadel of Ricks')).toHaveLength(2);

    const rickAvatar = screen.getByAltText('Rick Sanchez');
    const mortyAvatar = screen.getByAltText('Morty Smith');
    expect(rickAvatar).toBeInTheDocument();
    expect(mortyAvatar).toBeInTheDocument();
    expect(rickAvatar).toHaveAttribute('src');
    expect(mortyAvatar).toHaveAttribute('src');
    expect(decodeURIComponent(rickAvatar.getAttribute('src') || '')).toContain(
      'rickandmortyapi.com/api/character/avatar/1.jpeg'
    );
    expect(decodeURIComponent(mortyAvatar.getAttribute('src') || '')).toContain(
      'rickandmortyapi.com/api/character/avatar/2.jpeg'
    );
  });

  it('should handle search functionality', async () => {
    const initialMock: MockedResponse = {
      request: {
        query: GetCharactersDocument,
        variables: { filter: { name: '' } }
      },
      result: { data: mockCharactersData }
    };

    const searchMock: MockedResponse = {
      request: {
        query: GetCharactersDocument,
        variables: { filter: { name: 'rick' } }
      },
      result: { data: mockSearchResultsData }
    };

    const mocks = [initialMock, searchMock];

    renderWithProviders(<CharactersSection />, { apolloMocks: mocks });

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
      expect(screen.getByText('Morty Smith')).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText('Search for a character');
    fireEvent.change(searchInput, { target: { value: 'rick' } });

    act(() => {
      jest.advanceTimersByTime(300);
    });

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
      expect(screen.queryByText('Morty Smith')).not.toBeInTheDocument();
    });
  });

  it('should handle infinite scroll and load more functionality', async () => {
    const initialMock: MockedResponse = {
      request: {
        query: GetCharactersDocument,
        variables: { filter: { name: '' } }
      },
      result: { data: mockCharactersData }
    };

    const loadMoreMock: MockedResponse = {
      request: {
        query: GetCharactersDocument,
        variables: { page: 2 }
      },
      result: { data: mockPage2Data }
    };

    const mocks = [initialMock, loadMoreMock];

    renderWithProviders(<CharactersSection />, { apolloMocks: mocks });

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
      expect(screen.getByText('Morty Smith')).toBeInTheDocument();
    });

    const characterRows = screen.getAllByRole('row');
    const lastRow = characterRows[characterRows.length - 1];

    const table = screen.getByRole('table');
    fireEvent.scroll(table);

    expect(lastRow).toBeInTheDocument();
  });

  it('should display error state when GraphQL query fails', async () => {
    const errorMock: MockedResponse = {
      request: {
        query: GetCharactersDocument,
        variables: { filter: { name: '' } }
      },
      error: new Error('Network error occurred')
    };

    const mocks = [errorMock];

    renderWithProviders(<CharactersSection />, { apolloMocks: mocks });

    await waitFor(() => {
      expect(screen.getByText('Error')).toBeInTheDocument();
      expect(screen.getByText('Network error occurred')).toBeInTheDocument();
    });

    expect(screen.queryByText('Avatar')).not.toBeInTheDocument();
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });

  it('should display GraphQL error state', async () => {
    const graphqlErrorMock: MockedResponse = {
      request: {
        query: GetCharactersDocument,
        variables: { filter: { name: '' } }
      },
      result: {
        errors: [new GraphQLError('GraphQL error: Character not found')]
      }
    };

    const mocks = [graphqlErrorMock];

    renderWithProviders(<CharactersSection />, { apolloMocks: mocks });

    await waitFor(() => {
      expect(screen.getByText('Error')).toBeInTheDocument();
      expect(
        screen.getByText('GraphQL error: Character not found')
      ).toBeInTheDocument();
    });
  });

  it('should display empty state when no characters are found', async () => {
    const emptyMock: MockedResponse = {
      request: {
        query: GetCharactersDocument,
        variables: { filter: { name: '' } }
      },
      result: { data: mockEmptyData }
    };

    const mocks = [emptyMock];

    renderWithProviders(<CharactersSection />, { apolloMocks: mocks });

    await waitFor(() => {
      expect(screen.getByText('No characters found')).toBeInTheDocument();
    });

    expect(screen.queryByText('Avatar')).not.toBeInTheDocument();
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });

  it('should handle search with no results', async () => {
    const initialMock: MockedResponse = {
      request: {
        query: GetCharactersDocument,
        variables: { filter: { name: '' } }
      },
      result: { data: mockCharactersData }
    };

    const emptySearchMock: MockedResponse = {
      request: {
        query: GetCharactersDocument,
        variables: { filter: { name: 'nonexistent' } }
      },
      result: { data: mockEmptyData }
    };

    const mocks = [initialMock, emptySearchMock];

    renderWithProviders(<CharactersSection />, { apolloMocks: mocks });

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText('Search for a character');
    fireEvent.change(searchInput, { target: { value: 'nonexistent' } });

    act(() => {
      jest.advanceTimersByTime(300);
    });

    await waitFor(() => {
      expect(screen.getByText('No characters found')).toBeInTheDocument();
      expect(screen.queryByText('Rick Sanchez')).not.toBeInTheDocument();
    });
  });

  it('should show loading more spinner when fetching additional pages', async () => {
    const initialMock: MockedResponse = {
      request: {
        query: GetCharactersDocument,
        variables: { filter: { name: '' } }
      },
      result: { data: mockCharactersData }
    };

    const loadMoreMock: MockedResponse = {
      request: {
        query: GetCharactersDocument,
        variables: { page: 2 }
      },
      result: { data: mockPage2Data },
      delay: 1000
    };

    const mocks = [initialMock, loadMoreMock];

    renderWithProviders(<CharactersSection />, { apolloMocks: mocks });

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    });
  });

  it('should render character data in correct table structure', async () => {
    const mocks: MockedResponse[] = [
      {
        request: {
          query: GetCharactersDocument,
          variables: { filter: { name: '' } }
        },
        result: { data: mockCharactersData }
      }
    ];

    renderWithProviders(<CharactersSection />, { apolloMocks: mocks });

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    });

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();

    const headerRow = within(table).getAllByRole('columnheader');
    expect(headerRow).toHaveLength(3);
    expect(headerRow[0]).toHaveTextContent('Avatar');
    expect(headerRow[1]).toHaveTextContent('Name');
    expect(headerRow[2]).toHaveTextContent('Location');

    const dataRows = within(table).getAllByRole('row');

    expect(dataRows).toHaveLength(3);

    const rickRow = screen.getByText('Rick Sanchez').closest('tr');
    const mortyRow = screen.getByText('Morty Smith').closest('tr');

    expect(rickRow).toBeInTheDocument();
    expect(mortyRow).toBeInTheDocument();

    expect(within(rickRow!).getByAltText('Rick Sanchez')).toBeInTheDocument();
    expect(within(rickRow!).getByText('Citadel of Ricks')).toBeInTheDocument();

    expect(within(mortyRow!).getByAltText('Morty Smith')).toBeInTheDocument();
    expect(within(mortyRow!).getByText('Citadel of Ricks')).toBeInTheDocument();
  });

  it('should clear search results when search input is cleared', async () => {
    const initialMock: MockedResponse = {
      request: {
        query: GetCharactersDocument,
        variables: { filter: { name: '' } }
      },
      result: { data: mockCharactersData }
    };

    const searchMock: MockedResponse = {
      request: {
        query: GetCharactersDocument,
        variables: { filter: { name: 'rick' } }
      },
      result: { data: mockSearchResultsData }
    };

    const clearSearchMock: MockedResponse = {
      request: {
        query: GetCharactersDocument,
        variables: { filter: { name: '' } }
      },
      result: { data: mockCharactersData }
    };

    const mocks = [initialMock, searchMock, clearSearchMock];

    renderWithProviders(<CharactersSection />, { apolloMocks: mocks });

    await waitFor(() => {
      expect(screen.getByText('Morty Smith')).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText('Search for a character');
    fireEvent.change(searchInput, { target: { value: 'rick' } });

    act(() => {
      jest.advanceTimersByTime(300);
    });

    await waitFor(() => {
      expect(screen.queryByText('Morty Smith')).not.toBeInTheDocument();
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    });

    fireEvent.change(searchInput, { target: { value: '' } });

    act(() => {
      jest.advanceTimersByTime(300);
    });

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
      expect(screen.getByText('Morty Smith')).toBeInTheDocument();
    });
  });
});
