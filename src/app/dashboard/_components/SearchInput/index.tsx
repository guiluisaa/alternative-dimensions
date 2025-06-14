import { useEffect, useState } from 'react';

import * as S from './styles';

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
  };

  // TODO: add clear button
  return (
    <S.Wrapper>
      <S.Input
        type="text"
        placeholder="Search for a character"
        value={search}
        onChange={handleChange}
      />
      {canClear && <S.CloseButton onClick={handleClear} name="close" />}
      {loading && <S.Spinner />}
    </S.Wrapper>
  );
}
