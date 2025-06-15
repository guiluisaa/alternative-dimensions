'use client';

import Link from 'next/link';

import { Button } from '@ui/Button';

export function HeaderNav() {
  return (
    <Link href="/dashboard">
      <Button variant="secondary" size="sm">
        Dashboard
      </Button>
    </Link>
  );
}
