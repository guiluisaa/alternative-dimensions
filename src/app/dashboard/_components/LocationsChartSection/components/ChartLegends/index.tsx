'use client';

import { HTMLAttributes } from 'react';

import { ChartLegendItem } from '../ChartLegendItem';

import * as styles from './styles.css';

type ChartLegendsProps = HTMLAttributes<HTMLDivElement> & {
  chartData: { name: string; value: number }[];
};

export function ChartLegends({ chartData, ...props }: ChartLegendsProps) {
  return (
    <div className={styles.wrapper} {...props}>
      <h3>Legend</h3>

      <div className={styles.list}>
        {chartData.map((entry, index) => (
          <div className={styles.listItem} key={entry.name}>
            <ChartLegendItem index={index} {...entry} />
          </div>
        ))}
      </div>
    </div>
  );
}
