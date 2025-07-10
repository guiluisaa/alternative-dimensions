import Link from 'next/link';
import Image from 'next/image';

export function BrandLogo() {
  return (
    <Link href={'/'}>
      <div className="flex items-center justify-between gap-2">
        <Image
          alt="Alternative dimensions Logo"
          src="/rick-and-morty-logo.png"
          width={40}
          height={40}
          priority={true}
        />

        <h1 className="text-base font-bold text-neutral-white">Alternative Dimensions</h1>
      </div>
    </Link>
  );
}
