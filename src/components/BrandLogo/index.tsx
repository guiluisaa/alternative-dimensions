import Image from 'next/image';
import Link from 'next/link';

import * as styles from './styles.css';

export function BrandLogo() {
  return (
    <Link href={'/'}>
      <div className={styles.wrapper}>
        <Image
          alt="Alternative dimensions Logo"
          src="/rick-and-morty-logo.png"
          width={40}
          height={40}
          priority
        />

        <h1 className={styles.title}>Alternative Dimensions</h1>
      </div>
    </Link>
  );
}
