import Logo from './_components/Logo';
import Navigation from './_components/Navigation';

import { Josefin_Sans } from 'next/font/google';

import './_styles/globals.css';

const josefin = Josefin_Sans({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: {
    template: 'The Wild Oasis - %s',
    default: 'The Wild Oasis - Welcome',
  },
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful nature, with a stunning view of the mountains and forests.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
        <footer>© Copyright by the Wild Oasis!</footer>
      </body>
    </html>
  );
}
