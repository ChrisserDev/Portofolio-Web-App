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
          <h2>Full-Stack Developer</h2>
          <span>03/2024 - Present | Harlow, UK (Hybrid)</span>
        </div>
        <div className='current-job-description'>
          <p>At ITS, I get to work on every layer of a UK tools retailer&apos;s online shop, from the serverless pricing system behind the scenes to the storefront customers actually shop on. I love finding better ways for the team to work, like bringing AI coding tools into our day-to-day, and one of my proudest moments has been helping our designer go from handing over mockups to shipping their own code.</p>
          <ul className='current-job-tech-stack'>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>React.js</li>
            <li>GCP</li>
            <li>Cloud Run Functions</li>
            <li>Serverless</li>
            <li>GraphQL</li>
            <li>REST APIs</li>
            <li>SQL</li>
            <li>SQL Server</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Sass</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>CI/CD</li>
            <li>Jest</li>
            <li>Playwright</li>
            <li>Claude Code</li>
            <li>GitHub Copilot</li>
            <li>MCP</li>
            <li>Agile</li>
          </ul>
        </div>
      </div>
      <div className='past-job-section'>
        <div className='past-job-title'>
          <a href="https://mimo.org/" target='_blank' rel='noopener noreferrer'>
            <Image src={'/mimo_logo.jpg'} alt="Mimo Logo" width={100} height={100} priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </a>
        </div>
        <div className='current-job-header'>
          <h2>Student Web Developer</h2>
          <span>01/2023 - 09/2023 | London, UK (Remote)</span>
        </div>
        <div className='past-job-description'>
          <p>Mimo Dev is where I really caught the coding bug. I built my first real apps in JavaScript and React, from a cocktail discovery app made with three teammates to a site that helps students find somewhere to live.</p>
          <ul className='current-job-tech-stack'>
            <li>JavaScript (ES6)</li>
            <li>React</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>REST APIs</li>
            <li>Styled Components</li>
            <li>Responsive Design</li>
            <li>Web Performance</li>
            <li>Accessibility</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Netlify</li>
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
          <span>09/2020 - 03/2024 | Sheffield, UK (Remote)</span>
        </div>
        <div className='past-job-description'>
          <p>Before tech, I spent my days at Vivedia finding the right music for venues across the UK. Every service had a fixed start time with no second chances, which taught me to be thorough, stay calm under pressure and deliver on time.</p>
          <ul className='current-job-tech-stack'>
            <li>Quality assurance</li>
            <li>Deadline management</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
