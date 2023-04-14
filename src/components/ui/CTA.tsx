import { FC } from 'react';
import Button from '@/components/ui/Button';
import Paragraph from '@/components/ui/Paragraph';
import { parseHtml } from '@lib/utils'
import Cercle from '@/components/ui/Cercle';
import React from 'react';
import MotionContainer from '@/components/ui/MotionContainer';
import MotionItem from '@/components/ui/MotionItem';
import { cta } from '..';
import Banner from '@/components/ui/Banner';
interface CTAProps {

};

const CTA: FC<CTAProps> = ({ }) => {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 2,
                staggerChildren: 5,
                duration: 0.1
            }
        }
    };
    const item = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.1
            }
        }
    };
    return (
        <Banner>
            <MotionContainer tag='div' container={container} className='z-10  lg:w-2/4 w-full '>
                <MotionItem item={item} tag='div'className='flex flex-col gap-4' >
                    <Paragraph size='lg'>
                        {cta.title}
                    </Paragraph>
                    <div className='w-1/12 bg-primary h-1 m-auto rounded-md my-3' />
                    <Paragraph >
                        {parseHtml(cta.content)}
                    </Paragraph>
                    <div className=' flex items-center justify-center mt-4'>
                        <Button size='lg' className='z-10 ' >
                            {cta.button.label}
                        </Button>
                    </div>

                </MotionItem>

            </MotionContainer>


            <Cercle fill={false} width={45} height={45} className='right-[20%] top-32' />
            <Cercle width={36} height={36} className='top-[40%] left-48' />
            <Cercle width={80} height={80} className='right-10 bottom-40' />
            <Cercle fill width={80} height={80} className='right-10 lg:top-40 xs:top-2' />
            <Cercle width={70} height={70} className='right-[50%] top-2/3' />
            <Cercle width={55} height={55} className='left-[10%]' />
            <Cercle fill width={90} height={90} className='right-[51%] lg:block hidden' />
            <Cercle fill width={60} height={60} className='right-[10%] top-1/2' />
            </Banner>
    );
};

export default CTA;