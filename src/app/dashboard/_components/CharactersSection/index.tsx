'use client';

import { useInfiniteCharactersQuery } from '../../hooks/useInfiniteCharactersQuery';

import { CharactersTable } from './components/CharactersTable';
import { SearchInput } from './components/SearchInput';
import * as styles from './styles.css';

export function CharactersSection() {
  const { data, loading, error, handleLoadMore, isLoadingMore, setSearch } =
    useInfiniteCharactersQuery();

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Characters</h2>
      </div>

      <div className={styles.searchWrapper}>
        <SearchInput onSearch={setSearch} loading={loading} />
      </div>

      <div className={styles.charactersTableWrapper}>
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
