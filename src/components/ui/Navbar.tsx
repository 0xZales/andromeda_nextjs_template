'use client'
import React, { FC, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import * as headerElement from '@/components/index'
import { motion } from 'framer-motion';
import Link from 'next/link';
interface NavbarProps {

};
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3
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
const Navbar: FC<NavbarProps> = ({ }) => {
  const [isSelected, setIsSelected] = useState<string>('home')
  const { logo, headerLinks } = headerElement
  return (
    <div className='flex items-center justify-between py-8 px-12 '>
      <Image src={logo.logo} alt={logo.logo_text} width={logo.logo_width} height={logo.logo_height} priority />
      <motion.ul className='lg:flex gap-8 items-center justify-center xs:hidden'
        variants={container} initial='hidden' animate='visible'
      >
        {
          headerLinks.map((link, index) => <React.Fragment key={`${index} ${link}`}>
            {link.hasChildren ? (<motion.li className=' group relative item ' variants={item} >
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
            </motion.li>) : (<motion.li className={` hover:text-[#fe6019] item text-base `} variants={item}>
              <Link className={`active:text-[#fe6019]`} href={link.url}>   {link.name}</Link>

            </motion.li>)}
          </React.Fragment>)
        }
      </motion.ul>

      <Button variant='default' size='lg' className='xs:hidden lg:inline-block'>
        Download Now
      </Button>
    </div>
  );
};

export default Navbar;