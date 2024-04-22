import { CalendarDaysIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
  date: string;
}
export default function PostCard({ title, description, imageUrl, href, date }: IProps) {
  return (
    <Link href={href} className='group border-2 rounded-md overflow-hidden shadow-md z-10 bg-white'>
      <div className='group-hover:scale-110 duration-700 relative h-48'>
        <Image src={imageUrl} fill alt='' className='object-cover' />
      </div>
      <div className='p-6'>
        <p className='flex items-center gap-2 mb-4 text-gray-500 text-sm'>
          <CalendarDaysIcon className='size-6'/>
          {date}
          </p>
        <h2 className='font-semibold mb-4'>{title}</h2>
        <p className='line-clamp-3'>{description}</p>
      </div>
    </Link>
  );
}
