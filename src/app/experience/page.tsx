import './experience.scss';
import Image from 'next/image';

export default function ExperiencePage(): React.JSX.Element {
  return (
    <main className='experience-page-container'>
      <h1>Work Experience</h1>
      <div className='current-job-section'>
        <div className='current-job-title'>
          <a href="https://www.linkedin.com/company/industrial-tool-supplies-london-limited/" target='_blank' rel='noopener noreferrer'>
            <Image src={'/its_logo.png'} alt="ITS Logo" width={100} height={100} priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </a>
        </div>
        <div className='current-job-header'>
          <h2>Software Developer</h2>
          <span>04/2024 - Present</span>
        </div>
        <div className='current-job-description'>
          <p>
            At ITS, I work on a production e-commerce web application, contributing across frontend development, backend integrations, and cloud services. My work involves React-based interfaces, performance-focused frontend development, third-party service integrations, and collaboration across teams to support ongoing feature development and platform stability.          </p>
          <ul className='current-job-tech-stack'>
            <li>Javascript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Adobe XD</li>
            <li>GraphQL</li>
            <li>SQL</li>
            <li>GCP</li>
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
          <p>
            At Vivedia, I led a team of 10 people to deliver music services, improving teamwork and launching a menthorship program that enhanced service consistency and overall customer experience.
          </p>
          <ul className='current-job-tech-stack'>
            <li>Team leadership & mentoring</li>
            <li>Process improvement</li>
            <li>Customer collaboration</li>
          </ul>
        </div>
      </div>
      <div className='past-job-section'>
        <div className='past-job-title'>
          <a href="https://www.linkedin.com/school/university-of-derby/" target='_blank' rel='noopener noreferrer'>
            <Image src={'/uod_logo.png'} alt="UOD Logo" width={100} height={100} priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </a>
        </div>
        <div className='current-job-header'>
          <h2>Student Ambassador</h2>
          <span>03/2018 - 08/2020</span>
        </div>
        <div className='past-job-description'>
          <p>
            Collaborated with the Outreach and College Marketing teams to host visits, deliver presentations, and facilitate workshops aimed at promoting higher education to students from Years 7-13. ​          </p>
          <ul className='current-job-tech-stack'>
            <li>Public speaking & presentation</li>
            <li>Event organization</li>
            <li>Student engagement & outreach</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
