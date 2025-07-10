'use client';

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col items-center justify-center px-6 [&>*]:w-full">
      <div className="flex justify-center mt-8">
        <h2>Dashboard</h2>
      </div>

      <div className="flex flex-col pt-12 gap-5 lg:flex-row lg:items-start lg:justify-center [&>*]:lg:flex-1">
        {children}
      </div>
    </main>
  );
}
