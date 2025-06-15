'use client';

import { useInfiniteCharactersQuery } from '../../hooks/useInfiniteCharactersQuery';

import { CharactersTable } from './components/CharactersTable';
import { SearchInput } from './components/SearchInput';
import * as S from './styles';

export function CharactersSection() {
  const { data, loading, error, handleLoadMore, isLoadingMore, setSearch } =
    useInfiniteCharactersQuery();

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>Characters</S.Title>
      </S.TitleWrapper>

      <S.SearchWrapper>
        <SearchInput onSearch={setSearch} loading={loading} />
      </S.SearchWrapper>

      <S.CharactersTableWrapper>
        <CharactersTable
          data={data}
          error={error}
          loading={loading}
          isLoadingMore={isLoadingMore}
          onLoadMore={handleLoadMore}
        />
      </S.CharactersTableWrapper>
    </S.Wrapper>
  );
}
