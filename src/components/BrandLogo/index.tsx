import Image from 'next/image';
import Link from 'next/link';

export function BrandLogo() {
  return (
    <Link href={'/'}>
      <Image
        alt="Alternative dimensions Logo"
        src="/rick-and-morty-logo.png"
        width={24}
        height={24}
        priority
      />
    </Link>
  );
}
