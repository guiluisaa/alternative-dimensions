'use client';

import { BrandLogo } from '@components/BrandLogo';
import { HeaderNav } from '@components/HeaderNav';

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-neutral-lightGray bg-neutral-black px-6 py-3">
      <BrandLogo />

      <HeaderNav />
    </header>
  );
}
