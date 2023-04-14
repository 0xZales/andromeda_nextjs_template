'use client'
import React, { FC, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import * as headerElement from '@/components/index'
import Link from 'next/link';
import MotionContainer from '@/components/ui/MotionContainer';
import MotionItem from '@/components/ui/MotionItem';
import { item,container } from '@/components';

const Navbar = ({ }) => {
  const [isSelected, setIsSelected] = useState<string>('home')
  const { logo, headerLinks } = headerElement
  return (
    <div className='flex items-center justify-between py-8 px-12 '>
      <Image src={logo.logo} alt={logo.logo_text} width={logo.logo_width} height={logo.logo_height} priority />
      <MotionContainer tag='ul' container={container} className='lg:flex gap-8 items-center justify-center xs:hidden'
        // variants={container} initial='hidden' animate='visible'
      >
        {
          headerLinks.map((link, index) => <React.Fragment key={`${index} ${link}`}>
            {link.hasChildren ? (
            <MotionItem tag='li' className=' group relative item ' item={item} >
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
            </MotionItem>) : (
            <MotionItem className={` hover:text-[#fe6019] item text-base `} tag='li' item={item}>
              <Link className={`active:text-[#fe6019]`} href={link.url}>   {link.name}</Link>

            </MotionItem >)}
          </React.Fragment>)
        }
      </MotionContainer>

      <Button variant='default' size='lg' className='xs:hidden lg:inline-block'>
        Download Now
      </Button>
    </div>
  );
};

export default Navbar;