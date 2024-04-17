import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <h1 className='text-purple-800 text-4xl font-semibold mb-4'>Hi!</h1>
      <p className='text-justify leading-loose'>
        Welcome to Paws for a Cause, where compassion meets action in the pursuit of animal welfare. At Paws for a Cause, we’re
        dedicated to providing a safe haven for animals in need, offering a range of services from rescue and medical care to
        volunteer opportunities and fundraising initiatives. Our mission is simple yet profound: to create a world where every
        furry friend receives the love, care, and support they deserve. As an animal shelter with a heart, we strive to make a
        tangible difference in the lives of our beloved companions, ensuring they find forever homes and live happy, healthy
        lives. With your support, we can continue to make a paw-sitive impact on the world, one wagging tail at a time. Join us in
        our mission to make the world a better place for all creatures, great and small.
      </p>
    </main>
  );
}
