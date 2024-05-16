'use client';

import { Bars3Icon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
	{ title: 'Home', href: '/' },
	{ title: 'Gallery', href: '/gallery' },
	{ title: 'Adopt & Donate', href: '/adopt-donate' },
	{ title: 'Blog', href: '/blog' },
	{ title: 'Contact Us', href: '/contact-us' },
	{ title: 'About Us', href: '/about-us' },
];

export default function Navbar() {
	const [isOpen, setOpen] = useState(false);
	return (
		<nav className='mb-10 font-semibold bg-white/50 backdrop-blur-md fixed top-0 z-50 left-0 right-0 shadow-md'>
			<div className='flex justify-between items-center grow max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 h-24'>
				<Link href='/'>
					<div className='flex items-center gap-2'>
						<Image src='/images/logo.png' width={80} height={80} alt='Logo' />
						<motion.p
							animate={{ scale: [0, 1], opacity: [0, 1] }}
							transition={{ delay: 0.5 }}
							className='text-gray-900 hidden lg:block'>
							Where Every <span className='text-purple-800'>Paw</span> Finds <span className='text-purple-800'>Purpose</span>
						</motion.p>
					</div>
				</Link>
				<ul className='gap-4 hidden md:flex'>
					{navItems.map((item, index) => (
						<motion.li
							animate={{ y: [-100, 0] }}
							transition={{ delay: (index + 1) / 6 }}
							key={item.href}
							className='text-gray-900'>
							<Link href={item.href}>{item.title}</Link>
						</motion.li>
					))}
				</ul>
				<button className='md:hidden' onClick={() => setOpen((prevState) => !prevState)}>
					<Bars3Icon className='size-6' />
				</button>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className='absolute top-full left-0 right-0 p-4 flex flex-col gap-8 md:hidden bg-white/95 shadow-md rounded-b-lg overflow-hidden'>
							<ul className='flex flex-col gap-8 '>
								{navItems.map((item) => (
									<li key={item.href} className='text-gray-900' onClick={() => setOpen(false)}>
										<Link className='block text-center' href={item.href}>
											{item.title}
										</Link>
									</li>
								))}
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
}
