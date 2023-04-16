import Paragraph from '@/components/ui/Paragraph';
import Image from 'next/image';
import type { Metadata } from "next";
import Banner from '@/components/ui/Banner';
import Link from 'next/link';
import { getPageData } from '@/lib/post';
import { getAllPostData,  } from '@/lib/post';
import { converTDate } from '@/lib/utils';
import CTA from '@/components/ui/CTA';

export const metadata: Metadata = {
    title: 'Andromeda Nextjs Template | Posts ',
    description: 'Andromeda Nextjs'
}
const page = async ({ }) => {
    const request: any = await getPageData("blog.md")
    const { title } = request
    const AllPost: any = await getAllPostData()
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
                            {title}
                        </Paragraph>
                    </div>
                </div>
            </Banner>
            <div className="w-full  p-2 flex-row flex lg:gap-8 flex-wrap items-center justify-center gap-12">
                {
                    AllPost.map((post: any) =>
                     <div key={post.id} className='lg:w-5/12 lg:p-8 '>
                        <div className='w-full h-80 relative '>
                            <Link href={`/posts/${post.id}`}>
                                <Image src={post.image} alt={`${post.id}_image`} className='rounded-2xl' fill />
                            </Link>

                        </div>
                        <Paragraph size='md' className='text-left mt-3 py-3 px-2'>
                            <Link href={`/posts/${post.id}`} className='hover:text-primary hover:underline'>
                                {post.title}
                            </Link>
                        </Paragraph>
                        <Paragraph className='text-xs text-left py-3 px-2'>
                            Laoreet mauris odio ut nec. Nisl, sed adipiscing dignissim arcu placerat ornare pharetra nec in. Ultrices in nisl potenti vitae tempus. Auctor consectetur luctus eu in amet sagittis. Dis urna, vel h...
                        </Paragraph>
                        <div className='w-full flex items-center gap-3 p-4'>
                            <div className='w-16 h-16 rounded-full relative flex items-center justify-center  border-primary shadow-[0_0_0_2px] shadow-primary'>
                                <Image src={post.author?.avatar} alt={`${post.id}_image`} className='rounded-full m-auto' width={58} height={58} />
                            </div>
                            <div>
                                <Paragraph className='text-left font-bold text-black'>
                                    {post.author?.name}
                                </Paragraph>
                                <Paragraph className='text-left'>
                                    {converTDate(post.date)}

                                </Paragraph>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <CTA/>
        </div>
    );
};

export default page;