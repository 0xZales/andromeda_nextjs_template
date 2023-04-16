import Paragraph from '@/components/ui/Paragraph';
import { parseHtml } from '@lib/utils'
import Cercle from '@/components/ui/Cercle';
import Image from 'next/image';
import type { Metadata } from "next";
import BrandSwiper from '@/components/ui/BrandSwiper';
import MotionContainer from '@/components/ui/MotionContainer';
import MotionItem from '@/components/ui/MotionItem';
import CTA from '@/components/ui/CTA';
import Banner from '@/components/ui/Banner';
import Link from 'next/link';
import { item, container } from '@/components';
import { getPageData } from '@/lib/post';
export const metadata : Metadata = {
  title :  'Andromeda Nextjs Template | About ', 
  description: 'Andromeda Nextjs'
}
const page = async ({ }) => {
  const data:any = await getPageData('about.md')
  const brandRequest:any  = await getPageData('_index.md')
  const { brands } = brandRequest
  const { title, layout, about_us, works, mission, video, clients, our_member, our_office, } = data
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
      <MotionContainer tag='section' className='container py-10 relative overflow-hidden' container={container}>
        <MotionItem tag='div' className='flex flex-col-reverse lg:flex-row gap-4 w-full lg:p-56 '>
          <div className='lg:w-2/4 lg:px-10 p-0 w-full z-50 '>
            <Paragraph className='text-left'>
              {about_us.subtitle}
            </Paragraph>
            <Paragraph size='lg' className='lg:w-1/2 text-left'>
              {about_us.title}
            </Paragraph>
            <div className='lg:w-1/6 w-2/12 bg-primary h-1  rounded-md my-3' />
            <Paragraph className='text-left'>
              {about_us.content}
            </Paragraph>
          </div>
          <div className='lg:w-2/4 lg:p-0 p-10 z-50'>
            <Image src={about_us.image} width={400} height={800} alt='' className='rounded-lg' />
          </div>
        </MotionItem>
        <Cercle fill width={50} height={50} className='left-24 top-64' />
        <Cercle fill={false} width={45} height={45} className='right-[20%] top-32' />
        <Cercle width={36} height={36} className='top-[40%] left-48' />
        <Cercle width={80} height={80} className='right-10 bottom-40' />
        <Cercle fill width={80} height={80} className='right-10 lg:top-40 xs:top-2' />
        <Cercle width={100} height={100} className='lg:right-[30%] left-10 top-3 lg:top-48' />
        <Cercle width={70} height={70} className='right-[50%] top-2/3' />
        <Cercle width={55} height={55} className='left-[10%]' />
        <Cercle fill width={90} height={90} className='right-[51%] lg:block hidden' />
        <Cercle fill width={60} height={60} className='right-[10%] top-1/2' />
      </MotionContainer>
      <MotionContainer tag='section' className='container  relative overflow-hidden' container={container}>
        <MotionItem tag='div' className='flex flex-col w-full items-center justify-center pt-8' item={item}>
          <Paragraph >
            {works.subtitle}
          </Paragraph>
          <Paragraph size='lg'>
            {works.title}
          </Paragraph>
          <Paragraph >
            {works.title}
          </Paragraph>
          <div className='lg:w-1/12 w-3/12 bg-primary h-1  rounded-md my-1' />
        </MotionItem>
        <MotionItem tag='div' item={container} className='flex flex-col lg:flex-row lg:gap-0 gap-5 w-full items-center flex-wrap justify-center  lg:p-24'>
          {
            works.list.map((item: { title: string, content: string }) => <MotionItem item={item} tag='div' className=' lg:w-1/2' key={item.title}>
              <Paragraph size='lg'>
                {item.title}
              </Paragraph>
              <Paragraph>
                {item.content}
              </Paragraph>
            </MotionItem>)
          }
        </MotionItem >

      </MotionContainer>



      <MotionContainer tag='section' className='w-full  relative overflow-hidden mb-5' container={container}>
        <MotionItem tag='div' className='flex flex-col lg:flex-row lg:w-3/4 gap-5 m-auto  items-center justify-center'>

          <div className='lg:p-0 p-10 z-50'>
            <Image src={mission.image} width={400} height={800} alt='' className='rounded-lg ' />
          </div>
          <div className='lg:w-2/4  p-8 lg:p-0 w-full z-50 '>
            <Paragraph className='text-left'>
              {mission.subtitle}
            </Paragraph>
            <Paragraph size='lg' className='lg:w-1/2 text-left'>
              {mission.title}
            </Paragraph>
            <div className='lg:w-1/6 w-2/6 bg-primary h-1  rounded-md my-3' />
            <Paragraph className='text-left'>
              {mission.content}
            </Paragraph>
          </div>
        </MotionItem>
        <Cercle fill width={50} height={50} className='left-24 top-64' />
        <Cercle fill={false} width={45} height={45} className='right-[20%] top-32' />
        <Cercle width={36} height={36} className='top-[40%] left-48' />
        <Cercle width={80} height={80} className='right-10 bottom-40' />
        <Cercle fill width={80} height={80} className='right-10 lg:top-40 xs:top-2' />
        <Cercle width={100} height={100} className='lg:right-[30%] left-10 top-3 lg:top-48' />
        <Cercle width={70} height={70} className='right-[50%] top-2/3' />
        <Cercle width={55} height={55} className='left-[10%]' />
        <Cercle fill width={90} height={90} className='right-[51%] lg:block hidden' />
        <Cercle fill width={60} height={60} className='right-[10%] top-1/2' />
      </MotionContainer>
      <Banner>
        <MotionContainer tag='div' className='flex flex-col lg:flex-row  w-full'>
          <div className='z-10 lg:w-5/12 lg:p-32 p-8'>
            <Paragraph className='text-left'>
              {video.subtitle}
            </Paragraph>
            <Paragraph size='lg' className='text-left'>
              {video.title}
            </Paragraph>
            <div className='lg:w-1/6 w-2/6 bg-primary h-1  rounded-md my-3' />
            <Paragraph className='text-left'>
              {video.description}
            </Paragraph>
          </div>
          <div className='z-10  rounded-lg relative p-3'>
            <Image src={video.thumbnail} width={500} height={800} alt='' className='rounded-lg  ' />
            <div className='left-1/2 top-1/2 h-16 w-16 lg:h-20 lg:w-20 rounded-full bg-primary animate-pulse absolute inline-flex items-center justify-center -translate-x-[50%] -translate-y-[50%] cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
          </div>
        </MotionContainer>

      </Banner>
      <section className=' p-2'>
        <Paragraph>
          {clients.subtitle}
        </Paragraph>
        <Paragraph size='lg'>
          {clients.title}
        </Paragraph>
        <div className='lg:w-1/12 w-3/12 bg-primary h-1  rounded-md m-auto' />
        <BrandSwiper brands={brands} />
      </section>
      <section className=''>
  <div className='flex flex-col gap-5'>
  <Paragraph>
          {our_member.subtitle}
        </Paragraph>
        <Paragraph size='lg'>
          {our_member.title}
        </Paragraph>
        <Paragraph >
          {parseHtml(our_member.content)}
        </Paragraph>
        <div className='lg:w-1/12 w-3/12 bg-primary h-1  rounded-md m-auto' />
  </div>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-20 p-12'>
          {
            our_member.list.map((member: {name:string,field:string,image:string}) => <div key={member.name}>

              <Image src={member.image} width={250} height={250} alt='' className='rounded-full ' />
              <Paragraph size='md' className='mt-4'>
                {member.name}
              </Paragraph>
              <Paragraph >
                {member.field}
              </Paragraph>
            </div>)
          }
        </div>
      </section>
      <section>
      <div className='flex flex-col gap-5'>
  <Paragraph>
          {our_office.subtitle}
        </Paragraph>
        <Paragraph size='lg'>
          {parseHtml(our_office.title)}
        </Paragraph>
        <Paragraph >
          {parseHtml(our_office.content)}
        </Paragraph>
        <div className='lg:w-1/12 w-3/12 bg-primary h-1  rounded-md m-auto' />
        <div className='flex flex-col lg:flex-row  items-center justify-center gap-4 m-auto'>
              {
                our_office.countries.map((country:{flag:string,name:string,location:string})=><div className='drop-shadow-lg max-w-xs p-3 rounded-lg' key={country.name}>
                   <Image src={country.flag} width={80} height={80} alt='' className='rounded-md ' />
                   <Paragraph size='md' className='text-left'>
                    {country.name}
                   </Paragraph>
                   <Paragraph className='text-left'>
                    {country.location}
                   </Paragraph>
                </div>)
              }
        </div>
  </div>
      </section>
      <CTA/>
    </div>
  );
};

export default page;