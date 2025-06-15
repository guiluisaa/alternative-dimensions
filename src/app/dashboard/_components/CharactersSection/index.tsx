'use client';

import { useInfiniteCharactersQuery } from '../../hooks/useInfiniteCharactersQuery';
import { CharactersTable } from '../CharactersTable';
import { SearchInput } from '../SearchInput';

export function CharactersSection() {
  const { data, loading, error, handleLoadMore, isLoadingMore, setSearch } =
    useInfiniteCharactersQuery();

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Characters</h2>
      <div
        // TODO: move to a styled component
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px'
        }}
      >
        <SearchInput onSearch={setSearch} loading={loading} />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto'
        }}
      >
        <CharactersTable
          data={data}
          error={error}
          loading={loading}
          isLoadingMore={isLoadingMore}
          onLoadMore={handleLoadMore}
        />
      </div>
    </div>
  );
}
