'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, } from "swiper";
import 'swiper/swiper.min.css'
import { FC, } from 'react';
import Paragraph from './Paragraph';
import { Quote } from 'lucide-react'
import Image from 'next/image';
import 'swiper/swiper.min.css'
interface testimonialSwiperProps {
  listd: { author: string, avatar: string, profession: string, content: string }[],
  list: { icon: string, title: string, content: string }[]
  className?: string
};
const TestimonialSwiper: FC<testimonialSwiperProps> = ({ list, className, listd }) => {
  return (
    <div className='relative  lg:w-2/6 w-full'>
      <Swiper
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 1,
          },
        }}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
      >
        {listd.map((item, index) => (
          <SwiperSlide key={"feature-" + index} className=' p-10'>
            <div className="feature-card m-4 rounded-md border border-transparent px-7 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300 hover:shadow-none flex justify-center flex-col text-white  py-24 relative items-center cursor-pointer">
              <div className='bg-primary rounded-tl-[20px] rounded-tr-[35px] rounded-bl-[48px] rounded-br-[24px] lg:w-3/4 '>
                <div className=" flex h-20 w-20 items-center justify-center rounded-md  m-auto ">
                  <Quote size={48} />
                </div >
                <Paragraph className='text-white pb-10 '>{item.content}</Paragraph>
              </div>

             <div className=' bg-white rounded-md absolute lg:-bottom-12 -bottom-8 p-4 drop-shadow-md'>
                <Image src={item.avatar} alt='' width={80} height={80}  className='rounded-full m-auto' />
                <Paragraph  className='mb-0 font-bold'>
                  {item.author}
                </Paragraph>
                <Paragraph >
                  {item.profession}
                </Paragraph>
             </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>

  );
};

export default TestimonialSwiper;