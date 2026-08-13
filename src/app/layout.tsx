import { Quicksand } from 'next/font/google';
import NavigationMenu from './components/NavigationMenu';
import './globals.scss';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={quicksand.className}>
        <a href='#main-content' className='skip-to-content'>Skip to main content</a>
        <div className='page-container'>
          <NavigationMenu />
          {children}
        </div>
      </body>
    </html>
  );
}
