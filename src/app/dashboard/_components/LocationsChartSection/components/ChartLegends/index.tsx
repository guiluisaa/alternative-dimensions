'use client';

import { HTMLAttributes } from 'react';

import { ChartLegendItem } from '../ChartLegendItem';

type ChartLegendsProps = HTMLAttributes<HTMLDivElement> & {
  chartData: { name: string; value: number }[];
};

export function ChartLegends({ chartData, ...props }: ChartLegendsProps) {
  return (
    <div className="flex flex-col items-center justify-center" {...props}>
      <h3>Legend</h3>

      <div className="flex flex-wrap gap-2.5 justify-center items-center">
        {chartData.map((entry, index) => (
          <div key={entry.name} className="flex items-center justify-center">
            <ChartLegendItem index={index} {...entry} />
          </div>
        ))}
      </div>
    </div>
  );
}
