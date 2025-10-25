import Image from 'next/image';
import Link from 'next/link';
import './globals.scss';

export default function Home() {
  return (
    <main className='home-page-container'>
      <div className='home-page-content'>
        <div className='home-page-title'>
          <div className='title-with-image'>
            <div className='title-text'>
              <h1>Hi, I&apos;m</h1>
              <h2>Cristian Serban</h2>
            </div>
            <div className='portrait-image-wrapper mobile-portrait'>
              <Image className='portrait-image' src="/portrait.png" width={120} height={120} alt="Image of Cristian Serban"/>
            </div>
          </div>
          <h3>Full Stack Developer</h3>
          <p className='home-page-description'>
            I&apos;m a Full-Stack Developer, currently working with <span className='desc-skill'>React</span>, <span className='desc-skill'>TypeScript</span>, <span className='desc-skill'>Node.js</span>, <span className='desc-skill'>Express.js</span>, <span className='desc-skill'>SQL</span>, <span className='desc-skill'>GraphQL</span>, and <span className='desc-skill'>GCP</span>. My toolkit also includes <span className='desc-skill'>Playwright</span>, <span className='desc-skill'>Jest</span>, <span className='desc-skill'>Webpack</span>, and <span className='desc-skill'>Docker</span>, to streamline testing, builds, and deployment. <br/>  <br/>
            Right now, I&apos;m diving into  <span className='desc-skill'>Next.js</span> and learning how to layer <span className='desc-skill'>TypeScript</span> more effectively across my projects. <br/><br/>
            If you&apos;d like to see what I&apos;ve been working on, follow my work log on <span><a className='github-link desc-skill' href="https://github.com/ChrisserDev" target='_blank' aria-label="Link to my personal Github profile" title="Link to my personal Github profile">Github</a></span> and updates on <span><a className='linkedin-link desc-skill' href="https://www.linkedin.com/in/cristianserban24/"  target='_blank' aria-label="Link to my personal Linkedin profile" title="Link to my personal Linkedin profile">LinkedIn</a></span> where I share progress, small wins, and experiments as I keep building and learning.
          </p>
          <Link className='browse-projects' href="/projectss">Browse Projects</Link>
          <a className='resume-link' href="https://drive.google.com/file/d/126djPfCD_RtTBPb2koJ4rmiaWoVzFfWV/view?usp=sharing" target='_blank' rel="noopener noreferrer" aria-label='Link to Cristian Resume.'>Resume</a>
        </div>
        <div className='portrait-image-wrapper'>
          <Image className='portrait-image' src="/portrait.png" width={400} height={400} alt="Image of Cristian Serban"/>
        </div>
      </div>
    </main>
  );
}
