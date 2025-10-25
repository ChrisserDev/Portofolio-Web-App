'use client';

import './blog.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

export default function Blog(): React.JSX.Element {
  return (
    <main className='blog-page-container'>
      <h1>
        Hey, <span className='accent-underline'>welcome</span> to my <span className='accent-underline'>blog</span> 👋
      </h1>
      <p className='blog-page-introduction'>
        This is where I share what I&apos;m <span className='highlight'>learning</span> (and sometimes <span className='highlight'>unlearning</span>) while building with modern web technologies. <br/>  <br/>
        Have a look below and explore the topics that interest you most. Whether you&apos;re just starting out or already deep in the stack, I hope you find something <span className='highlight'>useful</span> here — or at least something that sparks an <span className='highlight'>idea</span> for your next project.
      </p>
      <Swiper
        modules={[Navigation, FreeMode, Mousewheel, Autoplay]}
        slidesPerView='auto'
        spaceBetween={12}
        navigation={true}
        mousewheel={{ forceToAxis: true }}
        grabCursor={true}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        className='blog-page-topics-list'
      >
        <SwiperSlide>
          <Image className='topic-icon' src='/skills_logos/nextjs_logo.png' alt='Next.js' width={60} height={60} />
          <span>Next.js</span>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='topic-icon' src='/skills_logos/react_logo.png' alt='React' width={60} height={60} />
          <span>React</span>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='topic-icon' src='/skills_logos/javascript_logo.png' alt='JavaScript' width={60} height={60} />
          <span>JavaScript</span>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='topic-icon' src='/skills_logos/typescript_logo.png' alt='TypeScript' width={60} height={60} />
          <span>TypeScript</span>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='topic-icon' src='/skills_logos/nodejs_logo.png' alt='Node.js' width={60} height={60} />
          <span>Node.js</span>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='topic-icon' src='/skills_logos/expressjs_logo.png' alt='Express.js' width={60} height={60} />
          <span>Express.js</span>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='topic-icon' src='/skills_logos/graphql_logo.png' alt='GraphQL' width={60} height={60} />
          <span>GraphQL</span>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='topic-icon' src='/skills_logos/sql_logo.png' alt='SQL' width={60} height={60} />
          <span>SQL</span>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='topic-icon' src='/skills_logos/playwright.png' alt='Playwright' width={60} height={60} />
          <span>Playwright</span>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='topic-icon' src='/skills_logos/jest_logo.png' alt='Jest' width={60} height={60} />
          <span>Jest</span>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='topic-icon' src='/skills_logos/mongodb_logo.png' alt='MongoDB' width={60} height={60} />
          <span>MongoDB</span>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='topic-icon' src='/skills_logos/postgresql_logo.png' alt='PostgreSQL' width={60} height={60} />
          <span>PostgreSQL</span>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='topic-icon' src='/skills_logos/css_logo.png' alt='CSS' width={60} height={60} />
          <span>CSS</span>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='topic-icon' src='/skills_logos/sass_logo.png' alt='SASS' width={60} height={60} />
          <span>SASS</span>
        </SwiperSlide>
      </Swiper>
      <Image src='/coming_soon.png' alt='Under Construction' width={400} height={300} />
    </main>
  );
}
