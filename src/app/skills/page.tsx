import Image from 'next/image';
import './skills.scss';

export default function SkillsPage(): React.JSX.Element {
  return (
    <main className='skills-page-container'>
      <h1>Skills</h1>
      <ul>
        <li>
          <Image src={'/skills_logos/javascript_logo.png'} alt='JavaScript Logo' width={90} height={70} title='JavaScript — programming language of the web' />
          <p>JavaScript</p>
        </li>
        <li>
          <Image src={'/skills_logos/typescript_logo.png'} alt='TypeScript Logo' width={120} height={70} title='TypeScript — typed superset of JavaScript' />
          <p>TypeScript</p>
        </li>
        <li>
          <Image src={'/skills_logos/react_logo.png'} alt='React Logo' width={70} height={70} title='React — UI library for building components' />
          <p>React</p>
        </li>
        <li>
          <Image src={'/skills_logos/jquery_logo.png'} alt='jQuery Logo' width={70} height={70} title='jQuery — DOM manipulation utility library' />
          <p>jQuery</p>
        </li>
        <li>
          <Image src={'/skills_logos/nodejs_logo.png'} alt='Node.js Logo' width={110} height={70} title='Node.js — JavaScript runtime on the server' />
          <p>Node.js</p>
        </li>
        <li>
          <Image src={'/skills_logos/expressjs_logo.png'} alt='Express Logo' width={70} height={70} title='Express.js — minimalist Node.js web framework' />
          <p>Express.js</p>
        </li>
        <li>
          <Image src={'/skills_logos/nextjs_logo.png'} alt='Next.js Logo' width={70} height={70} title='Next.js — React framework for apps & sites' />
          <p>Next.js</p>
        </li>
        <li>
          <Image src={'/skills_logos/mongodb_logo.png'} alt='MongoDB Logo' width={60} height={70} title='MongoDB — NoSQL document database' />
          <p>MongoDB</p>
        </li>
        <li>
          <Image src={'/skills_logos/graphql_logo.png'} alt='GraphQL Logo' width={55} height={70} title='GraphQL — API query language & runtime' />
          <p>GraphQL</p>
        </li>
        <li>
          <Image src={'/skills_logos/sql_logo.png'} alt='SQL Logo' width={70} height={70} title='SQL — relational database query language' />
          <p>SQL</p>
        </li>
        <li>
          <Image src={'/skills_logos/gcp_logo.png'} alt='GCP Logo' width={100} height={70} title='Google Cloud — cloud services platform' />
          <p>Google Cloud Platform</p>
        </li>
        <li>
          <Image src={'/skills_logos/playwright.png'} alt='Playwright Logo' width={80} height={80} title='Playwright — end‑to‑end testing framework' />
          <p>Playwright</p>
        </li>
        <li>
          <Image src={'/skills_logos/jest_logo.png'} alt='Jest Logo' width={80} height={70} title='Jest — JavaScript testing framework' />
          <p>Jest</p>
        </li>
        <li>
          <Image src={'/skills_logos/git_logo.png'} alt='Git Logo' width={70} height={70} title='Git — distributed version control system' />
          <p>Git</p>
        </li>
        <li>
          <Image src={'/skills_logos/vite_logo.png'} alt='Vite Logo' width={110} height={70} title='Vite — fast frontend build tool/dev server' />
          <p>Vite</p>
        </li>
      </ul>
    </main>
  );
}
