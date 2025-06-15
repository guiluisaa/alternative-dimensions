import Link from 'next/link';

import * as S from './styles';

export function BrandLogo() {
  return (
    <Link href={'/'}>
      <S.Wrapper>
        <S.Logo
          alt="Alternative dimensions Logo"
          src="/rick-and-morty-logo.png"
        />

        <S.Title>Alternative Dimensions</S.Title>
      </S.Wrapper>
    </Link>
  );
}
