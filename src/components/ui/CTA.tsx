import Button from '@/components/ui/Button';
import Paragraph from '@/components/ui/Paragraph';
import { parseHtml } from '@lib/utils'
import React from 'react';
import MotionContainer from '@/components/ui/MotionContainer';
import { cta } from '..';
import { item,container } from '@/components';
import Banner from '@/components/ui/Banner';


const CTA= ({ }) => {

    return (
        <Banner>
            <MotionContainer tag='div' variant={container} className='z-10  lg:w-2/4 w-full p-10'>
                <MotionContainer variant={item} tag='div'className='flex flex-col gap-2' >
                    <Paragraph size='lg'>
                        {cta.title}
                    </Paragraph>
                    <div className='lg:w-1/12 w-3/12 bg-primary h-1 m-auto rounded-md my-3' />
                    <Paragraph >
                        {parseHtml(cta.content)}
                    </Paragraph>
                    <div className=' flex items-center justify-center m-4'>
                        <Button size='lg' className='z-10 ' >
                            {cta.button.label}
                        </Button>
                    </div>

                </MotionContainer>

            </MotionContainer>
            </Banner>
    );
};

export default CTA;