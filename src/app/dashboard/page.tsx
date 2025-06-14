import { Button } from '@ui/Button';

import { CharactersSection } from './_components/CharactersSection';

export default async function Page() {
  return (
    <main>
      <h1>Dashboard</h1>
      <Button>Click me</Button>

      <CharactersSection />
    </main>
  );
}
