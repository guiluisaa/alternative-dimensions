import { useEffect, useState } from 'react';

import { IconButton } from '@ui/IconButton';
import { Input } from '@ui/Input';
import { Spinner } from '@ui/Spinner';

import * as styles from './styles.css';

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
    <div className={styles.wrapper}>
      <Input
        className={styles.input}
        type="text"
        placeholder="Search for a character"
        value={search}
        onChange={handleChange}
      />
      {canClear && (
        <IconButton
          className={styles.closeButton}
          data-testid="SearchInput_clearButton"
          onClick={handleClear}
          name="close"
        />
      )}
      {loading && <Spinner className={styles.spinner} size="md" />}
    </div>
  );
}
