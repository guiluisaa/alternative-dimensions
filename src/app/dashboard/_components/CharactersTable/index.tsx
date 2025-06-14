'use client';

import { TableHeaderCell } from '@ui/TableHeaderCell';

import { useGetCharactersQuery } from '@/generated/graphql';

import { CharacterRow } from '../CharacterRow';

type CharactersTableProps = {
  search: string;
};

export function CharactersTable({ search }: CharactersTableProps) {
  // TODO: add thantstack query to graphql code generator
  const { data, loading, error } = useGetCharactersQuery({
    variables: { filter: { name: search } }
  });

  // TODO: add loading state
  if (loading && !data) return <div>Loading...</div>;

  // TODO: add error state
  if (error) return <div>Error: {error.message}</div>;

  if (data?.characters?.results?.length === 0)
    return <div>No characters found</div>;

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
