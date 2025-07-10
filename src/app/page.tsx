'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@ui/Button';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <Image
        alt="Alternative Dimensions Logo"
        src="/rick-and-morty-logo.png"
        width={250}
        height={250}
        priority
      />

      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome to Alternative Dimensions</h1>
        <p className="text-lg">Keep track of your favorite Rick and Morty characters</p>
      </div>

      <Link href="/dashboard">
        <Button>Dashboard</Button>
      </Link>
    </main>
  );
}
