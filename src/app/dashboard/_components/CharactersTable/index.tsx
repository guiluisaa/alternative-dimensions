'use client';

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
    <div>
      {data?.characters?.results?.map(character => (
        // TODO: add character table component
        <div key={character?.id}>
          <h3>{character?.name}</h3>
        </div>
      ))}
    </div>
  );
}
