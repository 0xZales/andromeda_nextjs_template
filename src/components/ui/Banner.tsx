import { FC, ReactNode } from 'react';
import Cercle from '@/components/ui/Cercle';
interface BannerProps {
  children: ReactNode
};

const Banner: FC<BannerProps> = ({ children }) => {
  // 
  return (
    <div className={`rounded-lg bg-[#fffaf3]  container p-0 relative bg-theme flex flex-col   bg-[url('../../public/images/vectors/single-banner-wave-1.svg')] items-center justify-center lg:p-24 z-0  w-full overflow-hidden `}>
      {children}

      <Cercle fill width={50} height={50} className='left-24 top-64' />
      <Cercle fill={false} width={45} height={45} className='right-[20%] top-32' />
      <Cercle width={36} height={36} className='top-[40%] left-48' />
      <Cercle width={80} height={80} className='right-10 bottom-40' />
      <Cercle fill width={80} height={80} className='right-10 lg:top-40 xs:top-2' />
      <Cercle width={100} height={100} className='lg:right-[30%] left-10 top-3 lg:top-48' />
      <Cercle width={70} height={70} className='right-[50%] top-2/3' />
      <Cercle width={55} height={55} className='left-[10%]' />
      <Cercle fill width={90} height={90} className='right-[51%] lg:block hidden' />
      <Cercle fill width={60} height={60} className='right-[10%] top-1/2' />
    </div>
  );
};

export default Banner;