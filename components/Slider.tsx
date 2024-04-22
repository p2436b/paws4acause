'use client';

import useEmblaCarousel from 'embla-carousel-react';
import TestimonialCard from './TestimonialCard';
import { useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className='flex gap-8'>
      <button className='embla__prev' onClick={scrollPrev}>
        <ChevronLeftIcon className='size-6'/>
      </button>
      <div className='overflow-hidden max-w-96' ref={emblaRef}>
        <div className='flex gap-8'>
          <div className='grow-0 shrink-0 basis-full'>
            <TestimonialCard />
          </div>
          <div className='grow-0 shrink-0 basis-full min-w-0'>
            <TestimonialCard />
          </div>
          <div className='grow-0 shrink-0 basis-full min-w-0'>
            <TestimonialCard />
          </div>
          <div className='grow-0 shrink-0 basis-full min-w-0'>
            <TestimonialCard />
          </div>
        </div>
      </div>
      <button className='embla__next' onClick={scrollNext}>
      <ChevronRightIcon className='size-6'/>
      </button>
    </div>
  );
}
