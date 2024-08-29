import Logo from './_components/Logo';
import Navigation from './_components/Navigation';

export const metadata = {
  title: 'The Wild Oasis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
