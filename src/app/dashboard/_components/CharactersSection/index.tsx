'use client';

import { useState } from 'react';

import { CharactersTable } from '../CharactersTable';
import { SearchInput } from '../SearchInput';

export function CharactersSection() {
  const [search, setSearch] = useState('');

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
        <SearchInput onSearch={setSearch} />
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Characters</h2>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CharactersTable search={search} />
      </div>
    </div>
  );
}
