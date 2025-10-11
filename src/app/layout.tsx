import { Geist, Geist_Mono } from 'next/font/google';
import NavigationMenu from './components/NavigationMenu';
import './globals.scss';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className='page-container'>
          <NavigationMenu />
          {children}
        </div>
      </body>
    </html>
  );
}
