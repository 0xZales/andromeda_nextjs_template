'use client'
import React, { FC, useState } from 'react';
import menu from '../../../public/images/vectors/menu.svg'
import Image from 'next/image';
import Button from '@/components/ui/Button';
import * as headerElement from '@/components/index'
import Link from 'next/link';
import MotionContainer from '@/components/ui/MotionContainer';
import { item, container } from '@/components';

const Navbar = ({ }) => {
  const [isVisible,setIsVisible]= useState<boolean>(false)
  const mobileMenu=()=>{
  setIsVisible(!isVisible)
  }
  const { logo, headerLinks } = headerElement
  return (
    <div className='flex items-center  justify-between  py-8 px-12 z-50 border w-full relative '>
      <Image src={logo.logo} alt={logo.logo_text} width={logo.logo_width} height={logo.logo_height} priority />
      <MotionContainer tag='ul' variant={container} className='lg:flex gap-8 items-center justify-center xs:hidden'
      >
        {
          headerLinks.map((link, index) => <React.Fragment key={`${index} ${link}`}>
            {link.hasChildren ? (
              <MotionContainer tag='li' className='z-10 group relative item ' variant={item} >
                <span className={`inline-flex gap-4 items-center hover:text-[#fe6019] `}>
                  {link.name}
                  <svg className="h-4 w-4" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
                <ul className=' hidden max-h-0 w-full overflow-hidden border border-orange-200 py-0 transition-all duration-500 group-hover:flex group-hover:max-h-36 group-hover:py-4 lg:invisible absolute lg:left-1/2 lg:block lg:w-auto lg:-translate-x-1/2 lg:group-hover:visible lg:group-hover:opacity-100 flex-col justify-start  rounded-md group-hover:mt-4 gap-3 px-2'>
                  {
                    link.children?.map(child => <li key={child.name} className='min-w-[150px]'>
                      <Link className='  hover:text-[#fe6019]' href={child.url}>{child.name}</Link>

                    </li>)
                  }
                </ul>
              </MotionContainer>) : (
              <MotionContainer className={` hover:text-primary item text-base `} tag='li' variant={item}>
                <Link className={`active:text-primary hover:text-primary`} href={link.url}>   {link.name}</Link>

              </MotionContainer >)}
          </React.Fragment>)
        }
      </MotionContainer>
      <ul className={`${isVisible? "flex":'hidden'} w-8/12 py-4 bg-white absolute lg:hidden rounded-xl top-[6rem] menuicon flex-col gap-5 items-center`}>
        {
          headerLinks.map((link, index) => <React.Fragment key={`${index} ${link}`}>


            <MotionContainer className={` hover:text-primary item text-base `} tag='li' variant={item}>
              <Link className={`active:text-primary hover:text-primary`} href={link.url}>   {link.name}</Link>

            </MotionContainer >
          </React.Fragment>)
        }
      </ul>
      <Button variant='default' size='lg' className='xs:hidden lg:inline-block z-50'>
        Download Now
      </Button>
      <Image src={menu} alt='menu'  className='cursor-pointer lg:hidden' onClick={mobileMenu}/>
    </div>
  );
};

export default Navbar;