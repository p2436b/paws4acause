import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Adopt & Donate', href: '/adopt-donate' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact Us', href: 'contact-us' },
  { title: 'About Us', href: 'about-us' },
];

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center mb-10 font-semibold bg-black/25 backdrop-blur-md fixed top-0 z-50 w-full h-24 px-40'>
      <Link href='/'>
        <div className='flex items-center gap-2'>
          <Image src='/images/PawsForACauseLogo.png' width={80} height={80} alt='Logo' />
          <p className='text-white'>
            Where Every <span className='text-purple-800'>Paw</span> Finds <span className='text-purple-700'>Purpose</span>
          </p>
        </div>
      </Link>

      <ul className='flex gap-4'>
        {navItems.map((item) => (
          <li key={item.href} className='text-white'>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
