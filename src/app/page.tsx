import Image from 'next/image';

export default async function Page() {
  return (
    <main>
      <Image
        alt="Alternative Dimensions Logo"
        src="/rick-and-morty-logo.png"
        width={250}
        height={250}
        priority
      />
      <h1>Welcome to Alternative Dimensions</h1>
      <p>Keep track of your favorite Rick and Morty characters</p>
    </main>
  );
}
