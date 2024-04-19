import Image from 'next/image';
import Input from '../components/Input';
import Button from '../components/Button';
import Container from '../components/Container';

export default function ContactUs() {
  return (
    <Container>
      <main className='flex flex-col md:flex-row gap-4 mt-36 md:mt-10'>
        <form action='' className='flex flex-col gap-4 grow w-full'>
          <Input placeholder='First Name' />
          <Input placeholder='Last Name' />
          <Input placeholder='Phone Number' type='tel' />
          <Input placeholder='Email' type='email' />
          <textarea className='border-2 rounded-md p-2' placeholder='Message' id='' cols={30} rows={10}></textarea>
          <Button>Submit</Button>
        </form>
        <div className='relative grow h-96 md:h-auto w-full'>
          <Image src='/images/pic_04.jpg' fill sizes='400px' alt='' className='object-cover rounded-md shadow-md' />
        </div>
      </main>
    </Container>
  );
}
