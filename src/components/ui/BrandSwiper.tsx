'use client'
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import Image from 'next/image';
import 'swiper/swiper.min.css'
interface SwipperProps {
  brands: string[]
};

const BrandSwiper: FC<SwipperProps> = ({ brands }) => {
  return (

    <div className=' '>
      <Swiper
    className='border '
      loop={true}
      slidesPerView={3}
      breakpoints={{
        992: {
          slidesPerView: 5,
        },
      }}
      spaceBetween={20}
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
    >
      {brands.map((brand, index) => (
        <SwiperSlide
          className=" h-20 cursor-pointer py-6 px-6 grayscale  transition hover:grayscale-0 lg:px-10 "
          key={"brand-" + index}
        >
          <div className="relative h-full">
            <Image
              className="object-contain"
              src={brand}
              alt=""
              fill={true}
              priority={true}
            />
          </div>
        </SwiperSlide>
      ))}

    </Swiper>
    </div>

  );
};

export default BrandSwiper;