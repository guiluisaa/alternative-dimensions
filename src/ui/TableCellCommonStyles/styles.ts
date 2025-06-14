import { css } from 'styled-components';

export const TableCellCommonStyles = css`
  padding: 0.5rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.color.neutral.lightGray};
`;
