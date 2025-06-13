'use client';

import { useGetCharactersQuery } from '@/generated/graphql';

export function CharactersTable() {
  const { data, loading, error } = useGetCharactersQuery();

  // TODO: add loading state
  if (loading) return <div>Loading...</div>;

  // TODO: add error state
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Characters</h2>

      {data?.characters?.results?.map(character => (
        <div key={character?.id}>
          <h3>{character?.name}</h3>
        </div>
      ))}
    </div>
  );
}
