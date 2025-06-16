'use client';

import { BrandLogo } from '@components/BrandLogo';
import { HeaderNav } from '@components/HeaderNav';

import * as styles from './styles.css';

export function Header() {
  return (
    <header className={styles.wrapper}>
      <BrandLogo />

      <HeaderNav />
    </header>
  );
}
