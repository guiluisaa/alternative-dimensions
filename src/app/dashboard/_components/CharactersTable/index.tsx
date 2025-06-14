'use client';

import { ApolloError } from '@apollo/client';

import { useInfiniteScroll } from '@lib/hooks/useInfiniteScroll';
import { Spinner } from '@ui/Spinner';
import { TableHeaderCell } from '@ui/TableHeaderCell';

import { GetCharactersQuery } from '@/generated/graphql';

import { CharacterRow } from '../CharacterRow';

import * as S from './styles';

type CharactersTableProps = {
  data?: GetCharactersQuery;
  error?: ApolloError;
  loading?: boolean;
  isLoadingMore?: boolean;
  onLoadMore?: () => void;
};

export function CharactersTable({
  data,
  error,
  loading,
  isLoadingMore,
  onLoadMore
}: CharactersTableProps) {
  const hasNextPage = !!data?.characters?.info?.next;

  const { lastElementRef } = useInfiniteScroll(
    onLoadMore || (() => {}),
    !!isLoadingMore,
    hasNextPage
  );

  // TODO: add loading state
  if (loading) return <div>Loading...</div>;

  // TODO: add error state
  if (error) return <div>Error: {error.message}</div>;

  if (data?.characters?.results?.length === 0)
    return <div>No characters found</div>;

  if (!data) return null;

  return (
    <S.Wrapper>
      <table>
        <thead>
          <tr>
            <TableHeaderCell>Avatar</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Location</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {data?.characters?.results?.map((character, index) => (
            <CharacterRow
              key={character?.id}
              character={character}
              ref={
                index === (data?.characters?.results?.length ?? 0) - 1
                  ? lastElementRef
                  : undefined
              }
            />
          ))}
        </tbody>
      </table>

      {isLoadingMore && (
        <div
          style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}
        >
          <Spinner />
        </div>
      )}
    </S.Wrapper>
  );
}
