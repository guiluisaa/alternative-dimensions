'use client';

import Image from 'next/image';

import { TableCell } from '@ui/TableCell';

import { useGetCharactersQuery } from '@/generated/graphql';

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
          <TableCell isHeader />
          <TableCell isHeader>Name</TableCell>
          <TableCell isHeader>Location</TableCell>
        </tr>
      </thead>
      <tbody>
        {data?.characters?.results?.map(character => (
          <tr key={character?.id}>
            <TableCell>
              <Image
                src={character?.image ?? ''}
                alt={character?.name ?? ''}
                width={50}
                height={50}
                style={{ borderRadius: '50%' }}
              />
            </TableCell>
            <TableCell>{character?.name}</TableCell>
            <TableCell>{character?.location?.name}</TableCell>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
