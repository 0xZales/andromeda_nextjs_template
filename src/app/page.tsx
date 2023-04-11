'use client'
import Button from '@/components/ui/Button';
import Paragraph from '@/components/ui/Paragraph';
import { parseHtml } from '@lib/utils'
import { fetchData } from '@lib/utils';
import Cercle from '@/components/ui/Cercle';
import Image from 'next/image';
import Swipper from '@/components/ui/Swipper';
import { motion } from "framer-motion";
import React from 'react';
const Home = ({ }) => {

  // const request = await fetchData("_index.md")
  const request = {
    banner: {
      "title": "Andromeda is the most intuitive </br> way to prototype Designs",
      "image": "/images/banner-app.png",
      "link": {
        "label": "Get Premium Version",
        "href": "#"
      }
    }, brands: [
      "/images/brands/01-colored.png",
      "/images/brands/02-colored.png",
      "/images/brands/03-colored.png",
      "/images/brands/04-colored.png",
      "/images/brands/05-colored.png",
      "/images/brands/06-colored.png",
      "/images/brands/04-colored.png",
      "/images/brands/05-colored.png",
      "/images/brands/06-colored.png"
    ]
  }
  const { banner, brands, } = request
  // const { banner, brands, features, intro } = request
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 1
      }
    }
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <div className='w-full block  '
    >

      <div className={`  container relative bg-theme flex flex-col   bg-[url('../../public/images/vectors/single-banner-wave-1.svg')] items-center justify-center p-10 `}       
     >
      
          <motion.div
          initial='hidden'
          variants={container} animate='visible' className='z-10' 
        >

          <motion.div variants={item}>
            <Paragraph size='title'>
              {parseHtml(banner.title)}
            </Paragraph>
          </motion.div>
          </motion.div>


        <motion.div    initial='hidden'
          variants={container} animate='visible' className='flex items-center justify-center mt-10'>
          <motion.div variants={item}>
            <Button size='lg' className='z-10' >
              {banner.link.label}
            </Button>
          </motion.div>


        </motion.div>
        <Cercle fill width={50} height={50} className='left-24 top-64' />
        <Cercle fill={false} width={45} height={45} className='right-[20%] top-32' />
        <Cercle width={36} height={36} className='top-[40%] left-48' />
        <Cercle width={80} height={80} className='right-10 bottom-40' />
        <Cercle fill width={80} height={80} className='right-10 lg:top-40 xs:top-2' />
        <Cercle width={100} height={100} className='lg:right-[30%] left-10 top-3 lg:top-64' />
        <Cercle width={70} height={70} className='right-[50%] top-2/3' />
        <Cercle width={55} height={55} className='left-[10%]' />
        <Cercle fill width={90} height={90} className='right-[51%] lg:block hidden' />
        <Cercle fill width={60} height={60} className='right-[10%] top-1/2' />
        <motion.div   initial='hidden'
          variants={container} animate='visible' className='flex items-center justify-center mt-10'>
          <motion.div variants={item}>
            <Image src={banner.image} alt='banner image' width={1170}
              height={666}
              priority={true} className='mt-10 z-10' />
          </motion.div>
        </motion.div>
      </div>
      <Swipper brands={brands} />
      <section>
      </section>
    </div>
  );
};

export default Home;
