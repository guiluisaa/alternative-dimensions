import { BrandLogo } from '@components/BrandLogo';
import { HeaderNav } from '@components/HeaderNav';

export async function Header() {
  return (
    <header>
      <BrandLogo />

      <div>
        <HeaderNav />
      </div>
    </header>
  );
}
