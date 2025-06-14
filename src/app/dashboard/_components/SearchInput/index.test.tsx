import {
  renderWithProviders,
  screen,
  fireEvent,
  waitFor,
  act
} from '@/__tests__/renderWithProviders';

import { SearchInput } from './index';

jest.useFakeTimers();

describe('SearchInput', () => {
  const mockOnSearch = jest.fn();

  beforeEach(() => {
    mockOnSearch.mockClear();
    jest.clearAllTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should render the search input with correct placeholder', () => {
    renderWithProviders(<SearchInput onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search for a character');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('should call onSearch with empty string on initial render', async () => {
    renderWithProviders(<SearchInput onSearch={mockOnSearch} />);

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => {
      expect(mockOnSearch).toHaveBeenCalledWith('');
    });
  });

  it('should update input value when user types', () => {
    renderWithProviders(<SearchInput onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search for a character');
    fireEvent.change(input, { target: { value: 'rick' } });

    expect(input).toHaveValue('rick');
  });

  it('should debounce search calls with default delay (300ms)', async () => {
    renderWithProviders(<SearchInput onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search for a character');

    act(() => {
      jest.runAllTimers();
    });
    mockOnSearch.mockClear();

    fireEvent.change(input, { target: { value: 'rick' } });

    expect(mockOnSearch).not.toHaveBeenCalledWith('rick');

    act(() => {
      jest.advanceTimersByTime(299);
    });
    expect(mockOnSearch).not.toHaveBeenCalledWith('rick');

    act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(mockOnSearch).toHaveBeenCalledWith('rick');
  });

  it('should debounce multiple rapid changes', async () => {
    renderWithProviders(<SearchInput onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search for a character');

    act(() => {
      jest.runAllTimers();
    });
    mockOnSearch.mockClear();

    fireEvent.change(input, { target: { value: 'r' } });
    fireEvent.change(input, { target: { value: 'ri' } });
    fireEvent.change(input, { target: { value: 'ric' } });
    fireEvent.change(input, { target: { value: 'rick' } });

    expect(mockOnSearch).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith('rick');
  });

  it('should use custom delay when provided', async () => {
    const customDelay = 500;
    renderWithProviders(
      <SearchInput onSearch={mockOnSearch} delay={customDelay} />
    );

    const input = screen.getByPlaceholderText('Search for a character');

    act(() => {
      jest.runAllTimers();
    });
    mockOnSearch.mockClear();

    fireEvent.change(input, { target: { value: 'morty' } });

    act(() => {
      jest.advanceTimersByTime(499);
    });
    expect(mockOnSearch).not.toHaveBeenCalledWith('morty');

    act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(mockOnSearch).toHaveBeenCalledWith('morty');
  });

  it('should cancel previous timer when new input is provided', async () => {
    renderWithProviders(<SearchInput onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search for a character');

    act(() => {
      jest.runAllTimers();
    });
    mockOnSearch.mockClear();

    fireEvent.change(input, { target: { value: 'rick' } });

    act(() => {
      jest.advanceTimersByTime(250);
    });

    fireEvent.change(input, { target: { value: 'morty' } });

    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(mockOnSearch).not.toHaveBeenCalledWith('rick');
    expect(mockOnSearch).not.toHaveBeenCalledWith('morty');

    act(() => {
      jest.advanceTimersByTime(250);
    });

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith('morty');
  });

  it('should handle empty search input', async () => {
    renderWithProviders(<SearchInput onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search for a character');

    act(() => {
      jest.runAllTimers();
    });
    mockOnSearch.mockClear();

    fireEvent.change(input, { target: { value: 'rick' } });
    act(() => {
      jest.advanceTimersByTime(300);
    });

    fireEvent.change(input, { target: { value: '' } });
    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(mockOnSearch).toHaveBeenLastCalledWith('');
  });

  it('should not show clear button when input is empty', () => {
    renderWithProviders(<SearchInput onSearch={mockOnSearch} />);

    const clearButton = screen.queryByTestId('SearchInput_clearButton');
    expect(clearButton).not.toBeInTheDocument();
  });

  it('should show clear button when input has value and not loading', () => {
    renderWithProviders(<SearchInput onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search for a character');
    act(() => {
      fireEvent.change(input, { target: { value: 'rick' } });
    });

    const clearButton = screen.getByTestId('SearchInput_clearButton');
    expect(clearButton).toBeInTheDocument();
  });

  it('should not show clear button when loading even with input value', () => {
    renderWithProviders(<SearchInput onSearch={mockOnSearch} loading={true} />);

    const input = screen.getByPlaceholderText('Search for a character');
    act(() => {
      fireEvent.change(input, { target: { value: 'rick' } });
    });

    const clearButton = screen.queryByTestId('SearchInput_clearButton');
    expect(clearButton).not.toBeInTheDocument();
  });

  it('should clear input value when clear button is clicked', () => {
    renderWithProviders(<SearchInput onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search for a character');
    act(() => {
      fireEvent.change(input, { target: { value: 'rick' } });
    });

    const clearButton = screen.getByTestId('SearchInput_clearButton');
    act(() => {
      fireEvent.click(clearButton);
    });

    expect(input).toHaveValue('');
  });

  it('should hide clear button after clearing input', () => {
    renderWithProviders(<SearchInput onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search for a character');
    act(() => {
      fireEvent.change(input, { target: { value: 'rick' } });
    });

    const clearButton = screen.getByTestId('SearchInput_clearButton');
    act(() => {
      fireEvent.click(clearButton);
    });

    expect(
      screen.queryByTestId('SearchInput_clearButton')
    ).not.toBeInTheDocument();
  });

  it('should immediately call onSearch with empty string when clear button is clicked', async () => {
    renderWithProviders(<SearchInput onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search for a character');

    act(() => {
      jest.runAllTimers();
    });
    mockOnSearch.mockClear();

    act(() => {
      fireEvent.change(input, { target: { value: 'rick' } });
    });

    const clearButton = screen.getByTestId('SearchInput_clearButton');
    act(() => {
      fireEvent.click(clearButton);
    });

    await waitFor(() => {
      expect(mockOnSearch).toHaveBeenCalledWith('');
    });
  });

  it('should cancel pending debounced search when clear button is clicked', async () => {
    renderWithProviders(<SearchInput onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search for a character');

    act(() => {
      jest.runAllTimers();
    });
    mockOnSearch.mockClear();

    act(() => {
      fireEvent.change(input, { target: { value: 'rick' } });
    });

    // Wait some time but not the full debounce delay
    act(() => {
      jest.advanceTimersByTime(200);
    });

    const clearButton = screen.getByTestId('SearchInput_clearButton');
    act(() => {
      fireEvent.click(clearButton);
    });

    // Advance the remaining time to see if the original search would have been called
    act(() => {
      jest.advanceTimersByTime(100);
    });

    await waitFor(() => {
      // Should only have been called once with empty string (from clear), not with 'rick'
      expect(mockOnSearch).toHaveBeenCalledTimes(1);
      expect(mockOnSearch).toHaveBeenCalledWith('');
      expect(mockOnSearch).not.toHaveBeenCalledWith('rick');
    });
  });

  it('should work correctly after clearing and typing again', async () => {
    renderWithProviders(<SearchInput onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search for a character');

    act(() => {
      jest.runAllTimers();
    });
    mockOnSearch.mockClear();

    // Type something
    act(() => {
      fireEvent.change(input, { target: { value: 'rick' } });
    });

    // Clear it
    const clearButton = screen.getByTestId('SearchInput_clearButton');
    act(() => {
      fireEvent.click(clearButton);
    });

    // Type something new
    act(() => {
      fireEvent.change(input, { target: { value: 'morty' } });
    });

    // Advance time for debounce
    act(() => {
      jest.advanceTimersByTime(300);
    });

    await waitFor(() => {
      expect(mockOnSearch).toHaveBeenCalledWith('');
      expect(mockOnSearch).toHaveBeenCalledWith('morty');
      expect(mockOnSearch).toHaveBeenCalledTimes(2);
    });
  });
});
