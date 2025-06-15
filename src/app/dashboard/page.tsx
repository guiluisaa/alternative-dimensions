import { CharactersSection } from './_components/CharactersSection';
import { LocationsChartSection } from './_components/LocationsChartSection';

export default async function Page() {
  return (
    <>
      <LocationsChartSection />
      <CharactersSection />
    </>
  );
}
