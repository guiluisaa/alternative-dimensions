import Image from 'next/image';
import styled from 'styled-components';

import { TableCell } from '@ui/TableCell';

export const Avatar = styled(Image).attrs({
  width: 50,
  height: 50
})`
  border-radius: 50%;
`;

export const NameCell = styled(TableCell)`
  width: 250px;
`;
