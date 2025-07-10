'use client';

import { BrandLogo } from '@components/BrandLogo';
import { HeaderNav } from '@components/HeaderNav';

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-neutral-black border-b border-neutral-light-gray">
      <BrandLogo />

      <HeaderNav />
    </header>
  );
}
