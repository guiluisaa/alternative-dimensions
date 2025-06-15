'use client';

import { BrandLogo } from '@components/BrandLogo';
import { HeaderNav } from '@components/HeaderNav';

import * as S from './styles';

export function Header() {
  return (
    <S.Wrapper>
      <BrandLogo />

      <HeaderNav />
    </S.Wrapper>
  );
}
