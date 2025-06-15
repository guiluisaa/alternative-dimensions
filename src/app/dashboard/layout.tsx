'use client';

import { ReactNode } from 'react';

import * as S from './styles';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <h2>Dashboard</h2>
      </S.TitleWrapper>

      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
}
