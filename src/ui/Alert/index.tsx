import { ReactNode } from 'react';

import * as styles from './styles.css';

type AlertProps = {
  title?: string;
  description?: string | ReactNode;
};

export function Alert({ title, description }: AlertProps) {
  return (
    <div className={styles.wrapper}>
      {title && <h4 className={styles.title}>{title}</h4>}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
