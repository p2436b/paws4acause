import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function TestimonialCard() {
  return (
    <article className='text-center text-gray-500 max-w-96 rounded-xl overflow-hidden bg-white z-10 sh'>
      <header className='mb-4'>
        <div className='relative inline-block'>
          <Image
            width={112}
            height={112}
            sizes='112px'
            src='/testimonial/pbayat.jpg'
            alt=''
            className='rounded-full object-cover size-28'
          />
        </div>
        <h2 className='font-semibold text-gray-900 mb-2'>Name</h2>
        <p>Job Title</p>
      </header>
      <main>
        <p>
          <span className='text-2xl'>“ </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsum ut nesciunt
          adipisci excepturi, numquam vel blanditiis ratione, unde obcaecati error.
        </p>
        <div className='flex justify-center mt-4'>
          <StarIcon className='size-6 text-orange-300'/>
          <StarIcon className='size-6 text-orange-300'/>
          <StarIcon className='size-6 text-orange-300'/>
          <StarIcon className='size-6 text-orange-300'/>
          <StarIcon className='size-6 text-orange-300'/>
        </div>
      </main>
    </article>
  );
}
