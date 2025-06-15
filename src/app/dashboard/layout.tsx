'use client';

import { ReactNode } from 'react';

import * as S from './styles';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <S.Wrapper>
      <h1>Dashboard</h1>

      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
}
