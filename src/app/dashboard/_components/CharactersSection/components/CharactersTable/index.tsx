'use client';

import { ApolloError } from '@apollo/client';

import { useInfiniteScroll } from '@lib/hooks/useInfiniteScroll';
import { Alert } from '@ui/Alert';
import { Spinner } from '@ui/Spinner';
import { TableHeaderCell } from '@ui/TableHeaderCell';

import { GetCharactersQuery } from '@/generated/graphql';

import { CharacterRow } from '../CharacterRow';

import * as styles from './styles.css';

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
      <div className={styles.spinnerWrapper}>
        <Spinner data-testid="spinner" />
      </div>
    );

  if (error) return <Alert title="Error" description={error.message} />;

  if (data?.characters?.results?.length === 0)
    return <div>No characters found</div>;

  if (!data) return null;

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
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
        <div className={styles.spinnerWrapper}>
          <Spinner data-testid="loading-more-spinner" />
        </div>
      )}
    </div>
  );
}
