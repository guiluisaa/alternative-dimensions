import { HTMLAttributes } from 'react';

import { clsx } from 'clsx';

import * as styles from './styles.css';

type TableHeaderCellProps = HTMLAttributes<HTMLTableHeaderCellElement>;

export function TableHeaderCell({ className, ...props }: TableHeaderCellProps) {
  return <th className={clsx(styles.wrapper, className)} {...props} />;
}
