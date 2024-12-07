import { Loader } from '@/assets';
import Image from 'next/image';

export default function loading() {
  return (
    <div className="flex justify-center mt-16">
      <Image width={52} className="h-52" src={Loader} alt="loading..." />
    </div>
  );
}
