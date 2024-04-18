'use client'

import { Bars3Icon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Adopt & Donate', href: '/adopt-donate' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact Us', href: 'contact-us' },
  { title: 'About Us', href: 'about-us' },
];

export default function Navbar() {
  const [isOpen, setOpen]= useState(false)
  return (
    <nav className='mb-10 font-semibold bg-white/50 backdrop-blur-md fixed top-0 z-50 w-full shadow-md'>
      <div className='flex justify-between items-center grow max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 h-24'>
        <Link href='/'>
          <div className='flex items-center gap-2'>
            <Image src='/images/logo.png' width={80} height={80} alt='Logo' />
            <p className='text-gray-900 hidden lg:block'>
              Where Every <span className='text-purple-800'>Paw</span> Finds <span className='text-purple-800'>Purpose</span>
            </p>
          </div>
        </Link>
        <ul className='gap-4 hidden md:flex'>
          {navItems.map((item) => (
            <li key={item.href} className='text-gray-900'>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <button onClick={()=>setOpen(prevState => !prevState)}>
          <Bars3Icon  className='size-6 md:hidden'/>
        </button>
        {
          isOpen ?
        <ul className='absolute bg-white top-full w-full gap-8 md:hidden'>
          {navItems.map((item) => (
            <li key={item.href} className='text-gray-900' onClick={()=>setOpen(false)}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>:<></>
}
      </div>
    </nav>
  );
}
