'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  } from "swiper";
import 'swiper/swiper.min.css'
import { FC,  } from 'react';
import Paragraph from './Paragraph';
import { Wind, Shield } from 'lucide-react'
import 'swiper/swiper.min.css'
interface textSwiperProps {
  list: { icon: string, title: string, content: string }[]
};

const TextSwiper: FC<textSwiperProps> = ({ list }) => {
  return (
    <div className='relative mt-10 '>
      <Swiper
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        slidesPerView={3}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
      
      >
        {list.map((item, index) => (
          <SwiperSlide key={"feature-" + index}>
            <div className="feature-card m-4 rounded-md border border-transparent py-16 px-7 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none flex items-center justify-center flex-col">
              <div className="feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] text-primary">
                {index % 21 != 0 ? <Shield size={48} /> : <Wind size={48} />}
              </div>
              <Paragraph size='md' className="h4 mt-6 mb-5">{item.title}</Paragraph>
              <Paragraph>{item.content}</Paragraph>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default TextSwiper;