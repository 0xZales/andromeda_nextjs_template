import Paragraph from '@/components/ui/Paragraph';
import Image from 'next/image';
import type { Metadata } from "next";
import { getPostData } from '@/lib/post';
import { converTDate, parseHtml } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Andromeda Nextjs Template | Blog ',
  description: 'Andromeda Nextjs'
}
export default async function Page({ params, }: { params: { slug: string } }) {
  const post: any = await getPostData(params.slug)
  return <div>
    <div className=' lg:p-20 p-8  flex items-center justify-center flex-col'>
      <div className='relative m-auto '>
        <Image src={post?.image} alt={`${post?.id}_image`} className='rounded-2xl' height={650} width={1126} />
      </div>
    <div className='w-full lg:px-36 py-6'>
    <Paragraph size='lg' className='text-left mt-3 py-3 px-2 lg:w-1/2  w-full'>
        {post?.title}
      </Paragraph>
      <div className='w-full flex items-center gap-3 p-4'>
        <div className='w-16 h-16 rounded-full relative flex items-center justify-center  border-primary shadow-[0_0_0_2px] shadow-primary'>
          <Image src={post?.author?.avatar} alt={`${post?.id}_image`} className='rounded-full m-auto' width={58} height={58} />
        </div>
        <div>
          <Paragraph className='text-left font-bold text-black'>
            {post?.author?.name}
          </Paragraph>
          <Paragraph className='text-left'>
            {converTDate(post?.date)}

          </Paragraph>
        </div>
      </div>
      <div className='lg:text-base text-paragraph text-sm text-left py-3 px-2 blog_container'>
        { parseHtml(post.contentHtml)}
      </div>
    </div>
     
    </div>
  </div>
}
