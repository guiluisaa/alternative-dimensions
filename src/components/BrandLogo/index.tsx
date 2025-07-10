import Link from 'next/link';
import Image from 'next/image';

export function BrandLogo() {
  return (
    <Link href={'/'}>
      <span className="flex items-center gap-2">
        <Image
          alt="Alternative Dimensions Logo"
          src="/rick-and-morty-logo.png"
          width={40}
          height={40}
          priority
        />
        <span className="text-base font-bold text-neutral-white">
          Alternative Dimensions
        </span>
      </span>
    </Link>
  );
}
