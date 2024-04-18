import type { Metadata } from 'next';
import { Gelasio } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Particle from './components/BackgroundParticles';

const gelasio = Gelasio({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Paws for a Cause - Where Every Paw Finds Purpose',
  description: 'Where Every Paw Finds Purpose',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={gelasio.className}>
        <Particle />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
