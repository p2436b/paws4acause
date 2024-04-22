import Image from 'next/image';

interface IProps {
  name: string;
  jobTitle: string;
  comment: string;
  imageUrl: string;
}
export default function TestimonialCard({ name, jobTitle, comment, imageUrl }: IProps) {
  return (
    <article className='text-center text-gray-500 max-w-96 rounded-xl overflow-hidden bg-white z-10 sh'>
      <header className='mb-4'>
        <div className='relative inline-block'>
          <Image
            width={112}
            height={112}
            sizes='112px'
            src={imageUrl}
            alt=''
            className='rounded-full object-cover size-28'
          />
        </div>
        <h2 className='font-semibold text-gray-900 mb-2'>{name}</h2>
        <p>{jobTitle}</p>
      </header>
      <main>
        <p>
          <span className='text-2xl'>“ </span>{comment}
        </p>
      </main>
    </article>
  );
}
