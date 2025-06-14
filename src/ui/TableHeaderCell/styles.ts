import styled from 'styled-components';

import { TableCellCommonStyles } from '@ui/TableCellCommonStyles';

export const Wrapper = styled.th`
  ${TableCellCommonStyles}
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;
