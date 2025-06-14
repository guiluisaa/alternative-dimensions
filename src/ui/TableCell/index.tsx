import { ComponentProps } from 'react';

import * as S from './styles';

type TableCellProps = ComponentProps<typeof S.Wrapper>;

// TODO: create TableHeaderCell component
export function TableCell({ children, isHeader, ...props }: TableCellProps) {
  return (
    <S.Wrapper isHeader={isHeader} {...props}>
      {children}
    </S.Wrapper>
  );
}
