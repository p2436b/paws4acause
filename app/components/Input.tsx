import { InputHTMLAttributes } from 'react';

export default function Input({ placeholder, type }: { placeholder: string; type?: string }) {
  return <input placeholder={placeholder} type={type} className='border-2 rounded-md p-2' />;
}
