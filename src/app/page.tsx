'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@ui/Button';

import * as styles from './styles.css';

export default function Page() {
  return (
    <main className={styles.wrapper}>
      <Image
        alt="Alternative Dimensions Logo"
        src="/rick-and-morty-logo.png"
        width={250}
        height={250}
        priority
      />

      <div className={styles.textWrapper}>
        <h1>Welcome to Alternative Dimensions</h1>
        <p>Keep track of your favorite Rick and Morty characters</p>
      </div>

      <Link href="/dashboard">
        <Button variant="primary">Dashboard</Button>
      </Link>
    </main>
  );
}
