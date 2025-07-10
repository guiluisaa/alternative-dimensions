import { useEffect, useState } from 'react';

import { Input } from '@ui/Input';
import { IconButton } from '@ui/IconButton';
import { Spinner } from '@ui/Spinner';
import { cn } from '@/lib/cn';

interface SearchInputProps {
  onSearch: (search: string) => void;
  delay?: number;
  loading?: boolean;
}

export function SearchInput({
  onSearch,
  delay = 300,
  loading = false
}: SearchInputProps) {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, delay);

    return () => clearTimeout(handler);
  }, [search, delay]);

  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch, onSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const canClear = search.length > 0 && !loading;

  const handleClear = () => {
    setSearch('');
    setDebouncedSearch('');
    onSearch('');
  };

  return (
    <div
      className={cn(
        'relative flex min-w-[400px] items-center',
        loading ? 'opacity-80' : ''
      )}
    >
      <Input
        type="text"
        placeholder="Search for a character"
        value={search}
        onChange={handleChange}
        className="flex-1 pr-10"
      />

      {canClear && (
        <IconButton
          data-testid="SearchInput_clearButton"
          onClick={handleClear}
          name="close"
          className="absolute right-3 top-3"
          size={20}
        />
      )}

      {loading && <Spinner size={20} className="absolute right-3 top-3" />}
    </div>
  );
}
