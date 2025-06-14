'use client';

import { useState } from 'react';

import { useGetCharactersQuery } from '@/generated/graphql';

import { CharactersTable } from '../CharactersTable';
import { SearchInput } from '../SearchInput';

export function CharactersSection() {
  const [search, setSearch] = useState('');

  // TODO: add thantstack query to graphql code generator
  const { data, loading, error } = useGetCharactersQuery({
    variables: { filter: { name: search } }
  });

  return (
    <div>
      <div
        // TODO: move to a styled component
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px'
        }}
      >
        <SearchInput onSearch={setSearch} loading={loading} />
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Characters</h2>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CharactersTable data={data} error={error} loading={loading} />
      </div>
    </div>
  );
}
