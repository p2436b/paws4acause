'use client';

import useEmblaCarousel from 'embla-carousel-react';
import TestimonialCard from './TestimonialCard';
import { useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Emma R.',
    jobTitle: 'Volunteer',
    comment: "Volunteering at Paws for a Cause has been an incredibly rewarding experience. Being able to contribute to the well-being of these animals and seeing the joy on their faces when they find their forever homes is priceless. The team here is so passionate and dedicated, and I'm proud to be a part of such a wonderful organization.",
    imageUrl: '/testimonial/emma.jpg',
  },
  {
    name: 'Jason L.',
    jobTitle: 'Volunteer',
    comment: "I've been volunteering at Paws for a Cause for over a year now, and it has truly been life-changing. Working with the animals has taught me so much about compassion, patience, and unconditional love. Every day, I leave feeling fulfilled knowing that I've made a difference in their lives, even if it's just a small one.",
    imageUrl: '/testimonial/pbayat.jpg',
  },
  {
    name: 'Sarah W.',
    jobTitle: 'Volunteer',
    comment: "Volunteering at Paws for a Cause has been a dream come true for me. As an animal lover, being able to spend time with these furry friends and help them on their journey to finding forever homes brings me so much joy. The staff and fellow volunteers are like family, and I'm grateful for the opportunity to be a part of such a caring community.",
    imageUrl: '/testimonial/sarah.jpg',
  },
];
export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className='flex gap-4 md:gap-8 max-w-xs md:max-w-lg'>
      <button className='embla__prev' onClick={scrollPrev}>
        <ChevronLeftIcon className='size-6' />
      </button>
      <div className='overflow-hidden ' ref={emblaRef}>
        <div className='flex gap-4'>
          {testimonials.map((t) => (
            <div key={t.name} className='grow-0 shrink-0 basis-full min-w-0'>
              <TestimonialCard name={t.name} jobTitle={t.jobTitle} imageUrl={t.imageUrl} comment={t.comment} />
            </div>
          ))}
        </div>
      </div>
      <button className='embla__next' onClick={scrollNext}>
        <ChevronRightIcon className='size-6' />
      </button>
    </div>
  );
}
