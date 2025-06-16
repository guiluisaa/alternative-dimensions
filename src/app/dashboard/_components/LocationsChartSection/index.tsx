'use client';

import { HTMLAttributes, useMemo } from 'react';

import { useInfiniteCharactersQuery } from '@app/dashboard/hooks/useInfiniteCharactersQuery';
import { Alert } from '@ui/Alert';
import { Spinner } from '@ui/Spinner';

import { ChartLegends } from './components/ChartLegends';
import { LocationsChart } from './components/LocationsChart';
import * as styles from './styles.css';

export const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#8884D8',
  '#82CA9D',
  '#FFC658',
  '#FF7C7C'
];

type LocationsChartSectionProps = HTMLAttributes<HTMLDivElement>;

export function LocationsChartSection({
  ...props
}: LocationsChartSectionProps) {
  const { data, loading, error } = useInfiniteCharactersQuery();

  const chartData = useMemo(() => {
    if (!data?.characters?.results) return [];

    const locationCounts = data.characters.results.reduce(
      (acc, character) => {
        const locationName = character?.location?.name || 'unknown';
        acc[locationName] = (acc[locationName] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    const locationEntries = Object.entries(locationCounts);

    const multipleCharacterLocations = locationEntries
      .filter(([, value]) => value > 1)
      .map(([name, value]) => ({ name, value }));

    const othersCount = locationEntries
      .filter(([, value]) => value === 1)
      .reduce((sum, [, value]) => sum + value, 0);

    const result =
      othersCount > 0
        ? [
            ...multipleCharacterLocations,
            { name: 'Others', value: othersCount }
          ]
        : multipleCharacterLocations;

    return result.sort((a, b) => b.value - a.value);
  }, [data]);

  if (loading)
    return (
      <div className={styles.wrapper} {...props}>
        <h2>Characters by Location</h2>

        <div className={styles.chartWrapper}>
          <Spinner />
        </div>
      </div>
    );

  if (error)
    return (
      <div className={styles.wrapper} {...props}>
        <h2>Characters by Location</h2>
        <div className={styles.chartWrapper}>
          <Alert title="Error" description={error.message} />
        </div>
      </div>
    );

  return (
    <div className={styles.wrapper} {...props}>
      <h2>Characters by Location</h2>

      <div className={styles.chartWrapper}>
        <LocationsChart chartData={chartData} />

        <ChartLegends chartData={chartData} />
      </div>
    </div>
  );
}
