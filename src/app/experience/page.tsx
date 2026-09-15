import './experience.scss';
import Image from 'next/image';

export default function ExperiencePage(): React.JSX.Element {
  return (
    <main id='main-content' className='experience-page-container'>
      <h1><span className='accent-underline'>Work Experience</span></h1>
      <div className='current-job-section'>
        <div className='current-job-title'>
          <a href="https://www.linkedin.com/company/industrial-tool-supplies-london-limited/" target='_blank' rel='noopener noreferrer'>
            <Image src={'/its_logo.png'} alt="ITS Logo" width={100} height={100} priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </a>
        </div>
        <div className='current-job-header'>
          <h2>Full Stack Developer</h2>
          <span>03/2024 - Present</span>
        </div>
        <div className='current-job-description'>
          <p>At ITS, I work across the full stack of a production e-commerce platform — building pricing systems, data pipelines between internal systems and the storefront, and the frontend customers actually use.</p>
          <ul className='current-job-tech-stack'>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>GraphQL</li>
            <li>REST APIs</li>
            <li>SQL</li>
            <li>Jest</li>
            <li>Playwright</li>
            <li>Docker</li>
            <li>GCP</li>
            <li>Claude Code</li>
            <li>MCP</li>
          </ul>
        </div>
      </div>
      <div className='past-job-section'>
        <div className='past-job-title'>
          <a href="https://www.linkedin.com/company/vivedialtd/" target='_blank' rel='noopener noreferrer'>
            <Image src={'/vivedia_logo.png'} alt="Vivedia Logo" width={100} height={100} priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </a>
        </div>
        <div className='current-job-header'>
          <h2>Senior Music Advisor</h2>
          <span>09/2020 - 03/2024</span>
        </div>
        <div className='past-job-description'>
          <p>At Vivedia, I led a 10-person team delivering music services, launching a mentorship programme that improved consistency and customer experience.</p>
          <ul className='current-job-tech-stack'>
            <li>Team leadership & mentoring</li>
            <li>Process improvement</li>
            <li>Customer collaboration</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
