import type { Metadata } from 'next';

import { Nunito_Sans } from 'next/font/google';

import './globals.css';

import { Header } from '@components/Header';
import { Providers } from '@components/Providers';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alternative Dimensions',
  description: 'Keep track of your favorite Rick and Morty characters'
};

export default async function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunitoSans.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
