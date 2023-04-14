import { FC } from 'react';
import { copyright } from '..';
import MotionContainer from './MotionContainer';
import Image from 'next/image';
import { logo, footerElement } from '@/components/index'
import Paragraph from '@/components/ui/Paragraph';
import { parseHtml } from '@/lib/utils';
import Link from 'next/link';
import { container } from '@/components';
interface FooterProps {

};

const Footer: FC<FooterProps> = ({ }) => {
    return (
        <footer className='w-full  '>
            <MotionContainer tag='div' className='w-full flex flex-col lg:flex-row border-2 border-r-0 border-l-0 border-b-2 lg:p-20 p-8' container={container}>
                <div className='lg:w-1/4'>
                    <Image src={logo.logo} alt={logo.logo_text} width={logo.logo_width} height={logo.logo_height} priority />
                    <Paragraph className='text-left mt-2 text-sm '>
                        {copyright.footer_content}
                    </Paragraph>
                </div>
                {
                    footerElement.map(element => <div key={element.title} className='lg:w-1/4 flex flex-col'>
                        <Paragraph size='md' className='text-left'>{element.title}</Paragraph>
                        {element.links.map(link=>
                          {if(link.href===""){
                            return  <Paragraph className='text-left text-paragraph text-sm ' key={link.content}> {link.content}</Paragraph>
                          } else return  <Link href={link.href} className='text-left  text-paragraph text-sm hover:text-primary' key={link.content}> {link.content}</Link>
                        }
                      )}

                    </div>)
                }
            </MotionContainer>
            <Paragraph className='mt-5'>
                {parseHtml(copyright.copyrightx)}
            </Paragraph>
        </footer>
    );
};

export default Footer;