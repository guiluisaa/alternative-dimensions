import { HTMLAttributes } from 'react';

import { clsx } from 'clsx';

import * as styles from './styles.css';

type TableCellProps = HTMLAttributes<HTMLTableCellElement>;

export function TableCell({ className, ...props }: TableCellProps) {
  return <td className={clsx(styles.wrapper, className)} {...props} />;
}
