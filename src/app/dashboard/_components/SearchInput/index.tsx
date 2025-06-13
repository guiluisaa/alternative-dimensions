import { useEffect, useState } from 'react';

interface SearchInputProps {
  onSearch: (search: string) => void;
  delay?: number;
}

export function SearchInput({ onSearch, delay = 300 }: SearchInputProps) {
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

  // TODO: add clear button
  return (
    <input
      // TODO: move to a styled component
      style={{
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '300px'
      }}
      type="text"
      placeholder="Search for a character"
      value={search}
      onChange={handleChange}
    />
  );
}
