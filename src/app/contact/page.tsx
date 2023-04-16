import Paragraph from '@/components/ui/Paragraph';
import Image from 'next/image';
import type { Metadata } from "next";
import MotionContainer from '@/components/ui/MotionContainer';
import Banner from '@/components/ui/Banner';
import Link from 'next/link';
import { getPageData } from '@/lib/post';
import contact from '../../../public/images/vectors/contact.png'
import ContactForm from '@/components/ContactForm';
export const metadata: Metadata = {
    title: 'Andromeda Nextjs Template | Contact ',
    description: 'Andromeda Nextjs'
}
const page = async ({ }) => {
    const request:any = await getPageData("contact.md")
    const { title, layout } = request
    return (
        <div>
            <Banner>
                <div className="container  z-10 lg:p-24 p-32">
                    <Paragraph size='title' >
                        {title}
                    </Paragraph>
                    <div className=' flex items-center justify-center'>
                        <Link href='/' className='hover:text-primary'>
                            Home&nbsp;/&nbsp;
                        </Link>
                        <Paragraph className='m-0'>
                            {layout}
                        </Paragraph>
                    </div>
                </div>
            </Banner>
            <MotionContainer tag='section' className='flex flex-col lg:flex-row w-full'>
                    <div className='lg:w-1/2  relative p-8 lg:p-0' >
                    <Image src={contact} alt='Contact vector' />
                    </div>
                  <ContactForm/>
            </MotionContainer>
        </div>
    );
};

export default page;