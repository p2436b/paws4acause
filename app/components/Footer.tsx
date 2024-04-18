import Link from 'next/link';
import Input from './Input';
import Button from './Button';
import Container from './Container';

export default function Footer() {
  return (
    <Container>
      <footer className='flex gap-8 justify-between mt-10 font-semibold pb-8 z-10 border-t-2 pt-8'>
        <div>
          <div className='flex flex-col gap-2'>
            <h2 className='text-lg text-purple-800'>Get In Touch</h2>
            <p>Address: Alibeykoy İstanbul, Turkey</p>
            <Link href='mailto:pawsfora.cause@yahoo.com'>Email: pawsfora.cause@yahoo.com</Link>
            <Link href='tel:+905057185462'>Phone: +90 505 718 5462</Link>
          </div>
          <div className='flex gap-4 mt-4'>
            <Link
              href='https://www.facebook.com/profile.php?id=61558546557592'
              target='_blank'
              className='p-2 bg-blue-800 rounded-md '>
              <svg className='facebook size-8 fill-white' viewBox='0 0 320 512' xmlns='http://www.w3.org/2000/svg'>
                <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'></path>
              </svg>
            </Link>
            <Link
              href='https://www.tiktok.com/@paws4cause1?_t=8lb8nCSAuf8&_r=1'
              target='_blank'
              className='p-2 bg-slate-800 rounded-md'>
              <svg className='tiktok size-8 fill-white' viewBox='0 0 448 512' xmlns='http://www.w3.org/2000/svg'>
                <path d='M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z'></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='text-lg text-purple-800'>Quick Links</h2>
          <Link href='/gallery'>Gallery</Link>
          <Link href='/adopt-donate'>Adopt & Donate</Link>
          <Link href='/blog'>Blog</Link>
        </div>

        <div className='flex flex-col gap-2'>
          <h2 className='text-lg text-purple-800'>Subscribe</h2>
          <form action='' className='flex flex-col gap-4'>
            <Input placeholder='Email' type='email' />
            <Button>Submit</Button>
          </form>
        </div>
      </footer>
    </Container>
  );
}
