'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@ui/Button';

import * as S from './styles';

export default function Page() {
  return (
    <S.Wrapper>
      <Image
        alt="Alternative Dimensions Logo"
        src="/rick-and-morty-logo.png"
        width={250}
        height={250}
        priority
      />

      <S.TextWrapper>
        <h1>Welcome to Alternative Dimensions</h1>
        <p>Keep track of your favorite Rick and Morty characters</p>
      </S.TextWrapper>

      <Link href="/dashboard">
        <Button variant="primary">Dashboard</Button>
      </Link>
    </S.Wrapper>
  );
}
