'use client';

import { ApolloError } from '@apollo/client';

import { useInfiniteScroll } from '@lib/hooks/useInfiniteScroll';
import { Alert } from '@ui/Alert';
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

  if (loading)
    return (
      <S.SpinnerWrapper>
        <Spinner data-testid="spinner" />
      </S.SpinnerWrapper>
    );

  if (error) return <Alert title="Error" description={error.message} />;

  if (data?.characters?.results?.length === 0)
    return <div>No characters found</div>;

  if (!data) return null;

  return (
    <S.Wrapper>
      <S.Table>
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
      </S.Table>

      {isLoadingMore && (
        <div
          style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}
        >
          <Spinner data-testid="loading-more-spinner" />
        </div>
      )}
    </S.Wrapper>
  );
}
