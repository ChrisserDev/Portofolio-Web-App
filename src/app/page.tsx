import Image from 'next/image';
import Link from 'next/link';
import './globals.scss';

export default function Home() {
  return (
    <main id='main-content' className='home-page-container'>
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
            Full-Stack Developer with 3+ years of experience in <span className='desc-skill'>TypeScript</span>, <span className='desc-skill'>React</span>, <span className='desc-skill'>Node.js</span>, and <span className='desc-skill'>Cloud Systems</span>. At ITS, I designed and built the Bulk Pricing system to support enterprise sales, and integrated <span className='desc-skill'>AI coding tools</span> and <span className='desc-skill'>MCP servers</span> into the team&apos;s workflow, cutting typical delivery time by ~30%. <br/> <br/>
            Interested in <span className='desc-skill'>software architecture</span>, <span className='desc-skill'>scalability</span>, <span className='desc-skill'>AI</span> and <span className='desc-skill'>Agentic coding</span>.
          </p>
          <Link className='browse-projects' href="/projectss">Browse Projects</Link>
          <a className='resume-link' href="https://xxpokwgadanlbdaiughz.supabase.co/storage/v1/object/public/Website%20Links/Resume_Cristian_Serban_Full-Stack_Developer.pdf" target='_blank' rel="noopener noreferrer" aria-label='Link to Cristian Resume.'>Resume</a>
        </div>
        <div className='portrait-image-wrapper'>
          <Image className='portrait-image' src="/portrait.png" width={300} height={300} alt="Image of Cristian Serban"/>
        </div>
      </div>
    </main>
  );
}
