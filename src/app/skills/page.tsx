import Image from 'next/image';
import './skills.scss';

export default function SkillsPage() {
  return (
    <main className='skills-page-container'>
      <h1>Skills</h1>
      <ul>
        <li>
          <Image src={'/skills_logos/html_logo.png'} alt='HTML Logo' width={70} height={70} />
          <p>HTML</p>
        </li>
        <li>
          <Image src={'/skills_logos/css_logo.png'} alt='CSS Logo' width={70} height={70} />
          <p>CSS</p>
        </li>
        <li>
          <Image src={'/skills_logos/sass_logo.png'} alt='Sass Logo' width={90} height={70} />
          <p>Sass</p>
        </li>
        <li>
          <Image src={'/skills_logos/javascript_logo.png'} alt='JavaScript Logo' width={90} height={70} />
          <p>JavaScript</p>
        </li>
        <li>
          <Image src={'/skills_logos/typescript_logo.png'} alt='TypeScript Logo' width={120} height={70} />
          <p>TypeScript</p>
        </li>
        <li>
          <Image src={'/skills_logos/jquery_logo.png'} alt='jQuery Logo' width={70} height={70} />
          <p>jQuery</p>
        </li>
        <li>
          <Image src={'/skills_logos/react_logo.png'} alt='React Logo' width={70} height={70} />
          <p>React</p>
        </li>
        <li>
          <Image src={'/skills_logos/nodejs_logo.png'} alt='Node.js Logo' width={110} height={70} />
          <p>Node.js</p>
        </li>
        <li>
          <Image src={'/skills_logos/expressjs_logo.png'} alt='Express Logo' width={70} height={70} />
          <p>Express.js</p>
        </li>
        <li>
          <Image src={'/skills_logos/nextjs_logo.png'} alt='Next.js Logo' width={70} height={70} />
          <p>Next.js</p>
        </li>
        <li>
          <Image src={'/skills_logos/handlebars_logo.png'} alt='Handlebars Logo' width={70} height={70} />
          <p>Handlebars</p>
        </li>
        <li>
          <Image src={'/skills_logos/mongodb_logo.png'} alt='MongoDB Logo' width={60} height={70} />
          <p>MongoDB</p>
        </li>
        <li>
          <Image src={'/skills_logos/graphql_logo.png'} alt='GraphQL Logo' width={55} height={70} />
          <p>GraphQL</p>
        </li>
        <li>
          <Image src={'/skills_logos/sql_logo.png'} alt='SQL Logo' width={70} height={70} />
          <p>SQL</p>
        </li>
        <li>
          <Image src={'/skills_logos/gcp_logo.png'} alt='GCP Logo' width={100} height={70} />
          <p>Google Cloud Platform</p>
        </li>
        <li>
          <Image src={'/skills_logos/postman_logo.png'} alt='Postman Logo' width={80} height={70} />
          <p>Postman</p>
        </li>
        <li>
          <Image src={'/skills_logos/playwright.png'} alt='Playwright Logo' width={80} height={80} />
          <p>Playwright</p>
        </li>
        <li>
          <Image src={'/skills_logos/jest_logo.png'} alt='Jest Logo' width={80} height={70} />
          <p>Jest</p>
        </li>
        <li>
          <Image src={'/skills_logos/figma_logo.png'} alt='Figma Logo' width={80} height={70} />
          <p>Figma</p>
        </li>
        <li>
          <Image src={'/skills_logos/adobe_xd.png'} alt='Adobe XD Logo' width={70} height={70} />
          <p>Adobe XD</p>
        </li>
        <li>
          <Image src={'/skills_logos/git_logo.png'} alt='Git Logo' width={70} height={70} />
          <p>Git</p>
        </li>
        <li>
          <Image src={'/skills_logos/github_logo.png'} alt='GitHub Logo' width={65} height={70} />
          <p>GitHub</p>
        </li>
        <li>
          <Image src={'/skills_logos/vite_logo.png'} alt='Vite Logo' width={110} height={70} />
          <p>Vite</p>
        </li>
        <li>
          <Image src={'/skills_logos/webpack_logo.png'} alt='Webpack Logo' width={70} height={70} />
          <p>Webpack</p>
        </li>
      </ul>
    </main>
  );
}
