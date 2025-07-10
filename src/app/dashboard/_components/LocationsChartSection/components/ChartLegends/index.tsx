'use client';

import { HTMLAttributes } from 'react';

import { ChartLegendItem } from '../ChartLegendItem';

import { cn } from '@/lib/cn';

type ChartLegendsProps = HTMLAttributes<HTMLDivElement> & {
  chartData: { name: string; value: number }[];
};

export function ChartLegends({ chartData, ...props }: ChartLegendsProps) {
  return (
    <div
      {...props}
      className={cn('flex flex-col items-center justify-center', props.className)}
    >
      <h3>Legend</h3>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {chartData.map((entry, index) => (
          <div key={entry.name} className="flex items-center justify-center">
            <ChartLegendItem index={index} {...entry} />
          </div>
        ))}
      </div>
    </div>
  );
}
