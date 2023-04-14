import Button from '@/components/ui/Button';
import Paragraph from '@/components/ui/Paragraph';
import { parseHtml } from '@lib/utils'
import { fetchData } from '@lib/utils';
import Image from 'next/image';
import BrandSwiper from '@/components/ui/BrandSwiper';
import React from 'react';
import MotionContainer from '@/components/ui/MotionContainer';
import MotionItem from '@/components/ui/MotionItem';
import TextSwiper from '@/components/ui/textSwiper';
import TestimonialSwiper from '@/components/ui/TestimonialSwiper';
import CTA from '@/components/ui/CTA';
import Banner from '@/components/ui/Banner';
import { item,container } from '@/components';

const Home = async ({ }) => {

  const request = await fetchData("_index.md")

  const { banner, brands, features, intro, speciality, testimonial } = request

 
  return (
    <main className='w-full flex flex-col gap-5  relative'
    >
      <Banner
      >
        <MotionContainer tag='div' container={container} className='z-10'>
          <MotionItem item={item} tag='div'>
            <Paragraph size='title'>
              {parseHtml(banner.title)} 
            </Paragraph>
          </MotionItem>
        </MotionContainer>
        <MotionContainer tag='div'
          container={container} className=' z-10 flex items-center justify-center mt-10 '
        >
          <MotionItem item={item} tag='div' className=' '>
          

      <Button variant='default' size='lg' className=''>
      {banner.link.label}
      </Button>
          </MotionItem>
        </MotionContainer>
        <MotionContainer tag='div' container={container} className='flex items-center justify-center mt-10 z-10'>
          <MotionItem item={item} tag='div'>
            <Image src={banner.image} alt='banner image' width={1170}
              height={666}
              priority={true} className='mt-10 z-10 ' />
          </MotionItem>
        </MotionContainer>
      </Banner>
      <BrandSwiper brands={brands} />
      <div className='lg:p-24 mt-10 '>
        <MotionItem tag='div'
          className=' lg:w-1/2  m-auto'
          whileInView={{ y: [30, 0], opacity: [0, 1] }}
          transition={{ duration: 0.4 }}>
          <Paragraph size='md' className='font-normal  text-paragraph '>
            {features.sub_title}
          </Paragraph>
          <Paragraph size='lg' className=''>
            {parseHtml(features.title)}
          </Paragraph>
          <div className='w-1/6 bg-primary h-1 m-auto rounded-md my-3' />
          <Paragraph className='  px-10'>
            {parseHtml(features.description)}
          </Paragraph>
        </MotionItem>
      </div>
      <div className='py-4 '>
        <TextSwiper list={features.list} />
      </div>
      <Banner
      >
        <MotionContainer tag='div' container={container} className='z-10  lg:w-2/4 w-full '>
          <MotionItem item={item} tag='div' >
            <Paragraph className='uppercase'>
              {parseHtml(intro.subtitle)}
            </Paragraph>
            <Paragraph size='lg'>
              {parseHtml(intro.title)}
            </Paragraph>
            <div className='w-1/6 bg-primary h-1 m-auto rounded-md my-3' />
            <Paragraph className='p-10'>
              {parseHtml(intro.description)}
            </Paragraph>
            <div className='  mx-auto rounded-xl relative cursor-pointer p-6'>
              <div className='left-1/2 top-1/2 h-16 w-16 lg:h-20 lg:w-20 rounded-full bg-primary animate-pulse absolute inline-flex items-center justify-center -translate-x-[50%] -translate-y-[50%] cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <Image src={intro.thumbnail} height={1000} width={800} alt='' className='rounded-xl object-contain ' />
            </div>
          </MotionItem>
        </MotionContainer>
      </Banner>
      <MotionItem tag='div' whileInView={{ y: [30, 0], opacity: [0, 1] }}
        transition={{ duration: 0.4 }} className='flex lg:flex-row flex-col lg:p-20 items-center justify-center gap-20'>
        <div className=''>
          <Image src={speciality.primary.image} alt='' width={575} height={511} />
        </div>
        <div className=' px-10 lg:w-4/12 '>
          <Paragraph className='uppercase  text-left ' >
            {speciality.primary.subtitle}
          </Paragraph>
          <Paragraph size='lg' className='text-left ' >
            {speciality.primary.title}
          </Paragraph>
          <div className='w-1/6 bg-primary h-1  rounded-md my-3' />
          <Paragraph className='text-left ' >
            {speciality.primary.description}
          </Paragraph>
        </div>
      </MotionItem>


      <MotionItem tag='div' whileInView={{ y: [30, 0], opacity: [0, 1] }}
        transition={{ duration: 0.4 }} className='flex lg:flex-row-reverse flex-col lg:p-20 items-center justify-center gap-20'>
        <div className=''>
          <Image src={speciality.secondary.image} alt='' width={575} height={511} />
        </div>
        <div className=' px-10 lg:w-4/12 '>
          <Paragraph className='uppercase  text-left ' >
            {speciality.secondary.subtitle}
          </Paragraph>
          <Paragraph size='lg' className='text-left ' >
            {speciality.secondary.title}
          </Paragraph>
          <div className='w-1/6 bg-primary h-1  rounded-md my-3' />
          <Paragraph className='text-left ' >
            {speciality.secondary.description}
          </Paragraph>
        </div>
      </MotionItem>
      <MotionContainer tag='section' className='' >
        <MotionItem tag='div' className='container ' whileInView={{ y: [30, 0], opacity: [0, 1] }}
          transition={{ duration: 0.4 }} >
          <Paragraph >
            {testimonial.subtitle}
          </Paragraph>
          <Paragraph size='lg'>
            {testimonial.title}
          </Paragraph>
          <div className='w-1/12 bg-primary h-1 m-auto rounded-md my-3' />
          <Paragraph >
            {parseHtml(testimonial.description)}
          </Paragraph>
        </MotionItem>
        <MotionItem tag='div' className='w-full  mx-auto flex items-center justify-center' whileInView={{ y: [30, 0], opacity: [0, 1] }}
          transition={{ duration: 0.4 }}>
          <Image className='p-24  w-2/6 hidden lg:block' src='/images/testimonials-01.png' alt='' width={455} height={527} />
          <TestimonialSwiper list={features.list} listd={testimonial.list} />
          <Image className='p-24  w-2/6 hidden lg:block' src='/images/testimonials-01.png' alt='' width={455} height={527} />
        </MotionItem>
      </MotionContainer>

      <CTA />
    </main>
  );
};

export default Home;
