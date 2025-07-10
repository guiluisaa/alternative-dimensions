'use client';

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col items-center justify-center px-6">
      <div className="mt-8 flex justify-center">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>

      <div
        className="flex flex-col gap-5 pt-12 lg:flex-row lg:items-start lg:justify-center"
      >
        {children}
      </div>
    </main>
  );
}
