import { COLORS } from '../..';

import * as S from './styles';

type ChartLegendItemProps = {
  index: number;
  name: string;
  value: number;
};

export function ChartLegendItem({ index, name, value }: ChartLegendItemProps) {
  return (
    <S.Wrapper key={name}>
      <S.Color color={COLORS[index % COLORS.length]} />
      <S.Label>
        {name} ({value})
      </S.Label>
    </S.Wrapper>
  );
}
