'use client';

import { ApolloError } from '@apollo/client';

import { Button } from '@ui/Button';
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
          {data?.characters?.results?.map(character => (
            <CharacterRow key={character?.id} character={character} />
          ))}
        </tbody>
      </table>

      {isLoadingMore && <Spinner />}

      {!!data?.characters?.info?.next && (
        // TODO: add infinite scroll
        <Button onClick={onLoadMore} disabled={isLoadingMore}>
          Load more
        </Button>
      )}
    </S.Wrapper>
  );
}
