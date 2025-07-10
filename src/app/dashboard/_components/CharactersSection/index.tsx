'use client';

import { useInfiniteCharactersQuery } from '../../hooks/useInfiniteCharactersQuery';

import { CharactersTable } from './components/CharactersTable';
import { SearchInput } from './components/SearchInput';

export function CharactersSection() {
  const { data, loading, error, handleLoadMore, isLoadingMore, setSearch } =
    useInfiniteCharactersQuery();

  return (
    <div className="flex flex-col justify-center gap-8">
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-neutral-black">Characters</h2>
      </div>

      <div className="flex justify-center">
        <SearchInput onSearch={setSearch} loading={loading} />
      </div>

      <div className="flex justify-center mb-5 flex-1">
        <div className="flex-1">
          <CharactersTable
            data={data}
            error={error}
            loading={loading}
            isLoadingMore={isLoadingMore}
            onLoadMore={handleLoadMore}
          />
        </div>
      </div>
    </div>
  );
}
