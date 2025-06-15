'use client';

import { HTMLAttributes } from 'react';

import { ChartLegendItem } from '../ChartLegendItem';

import * as S from './styles';

type ChartLegendsProps = HTMLAttributes<HTMLDivElement> & {
  chartData: { name: string; value: number }[];
};

export function ChartLegends({ chartData, ...props }: ChartLegendsProps) {
  return (
    <S.Wrapper {...props}>
      <h3>Legend</h3>

      <S.List>
        {chartData.map((entry, index) => (
          <S.ListItem key={entry.name}>
            <ChartLegendItem index={index} {...entry} />
          </S.ListItem>
        ))}
      </S.List>
    </S.Wrapper>
  );
}
