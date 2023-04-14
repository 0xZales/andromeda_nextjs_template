import { FC } from 'react';
import Button from '@/components/ui/Button';
import Paragraph from '@/components/ui/Paragraph';
import { parseHtml } from '@lib/utils'
import Cercle from '@/components/ui/Cercle';
import React from 'react';
import MotionContainer from '@/components/ui/MotionContainer';
import MotionItem from '@/components/ui/MotionItem';
import { cta } from '..';
import { item,container } from '@/components';
import Banner from '@/components/ui/Banner';
interface CTAProps {

};

const CTA: FC<CTAProps> = ({ }) => {

    return (
        <Banner>
            <MotionContainer tag='div' container={container} className='z-10  lg:w-2/4 w-full p-10'>
                <MotionItem item={item} tag='div'className='flex flex-col gap-2' >
                    <Paragraph size='lg'>
                        {cta.title}
                    </Paragraph>
                    <div className='w-1/12 bg-primary h-1 m-auto rounded-md my-3' />
                    <Paragraph >
                        {parseHtml(cta.content)}
                    </Paragraph>
                    <div className=' flex items-center justify-center m-4'>
                        <Button size='lg' className='z-10 ' >
                            {cta.button.label}
                        </Button>
                    </div>

                </MotionItem>

            </MotionContainer>
            </Banner>
    );
};

export default CTA;