'use client';

import { gql, useQuery } from '@apollo/client';

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      info {
        count
        next
        pages
        prev
      }

      results {
        id
        name
        gender
        species
        image
      }
    }
  }
`;

// TODO: remove after auto-generated types are added
export type Character = {
  id: string;
  name: string;
  gender: string;
  species: string;
  image: string;
};

export function CharactersTable() {
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  // TODO: add loading state
  if (loading) return <div>Loading...</div>;

  // TODO: add error state
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Characters</h2>

      {data.characters.results.map((character: Character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
        </div>
      ))}
    </div>
  );
}
