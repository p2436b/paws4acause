import Image from 'next/image';
import Input from '../components/Input';

export default function ContactUs() {
  return (
    <main className='flex'>
      <div className='relative grow'>
        <Image src='/images/PawsForACauseLogo.png' fill objectFit='contain' alt='' />
      </div>
      <form action='' className='flex flex-col gap-4 grow'>
        <Input placeholder='First Name' />
        <Input placeholder='Last Name' />
        <Input placeholder='Phone Number' type='tel' />
        <Input placeholder='Email' type='email' />
        <textarea className='border-2 rounded-md p-2' placeholder='Message' id='' cols={30} rows={10}></textarea>
        <button type='submit' className='border-2 rounded-md p-2 bg-purple-800 text-white'>
          Submit
        </button>
      </form>
    </main>
  );
}
