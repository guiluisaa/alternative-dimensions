'use client';

import { ReactNode } from 'react';

import * as styles from './styles.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h2>Dashboard</h2>
      </div>

      <div className={styles.content}>{children}</div>
    </main>
  );
}
