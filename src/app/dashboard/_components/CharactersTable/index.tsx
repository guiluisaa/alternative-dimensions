'use client';

import { ApolloError } from '@apollo/client';

import { TableHeaderCell } from '@ui/TableHeaderCell';

import { GetCharactersQuery } from '@/generated/graphql';

import { CharacterRow } from '../CharacterRow';

type CharactersTableProps = {
  data?: GetCharactersQuery;
  error?: ApolloError;
  loading?: boolean;
};

export function CharactersTable({
  data,
  error,
  loading
}: CharactersTableProps) {
  // TODO: add loading state
  if (loading) return <div>Loading...</div>;

  // TODO: add error state
  if (error) return <div>Error: {error.message}</div>;

  if (data?.characters?.results?.length === 0)
    return <div>No characters found</div>;

  if (!data) return null;

  return (
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
  );
}
