import Image from 'next/image';
import './skills.scss';

const skillImageSource = 'https://xxpokwgadanlbdaiughz.supabase.co/storage/v1/object/public/Skill%20Logos';

export default function SkillsPage(): React.JSX.Element {
  return (
    <main id='main-content' className='skills-page-container'>
      <h1><span className='accent-underline'>Skills</span></h1>
      <ul>
        <li>
          <Image src={`${skillImageSource}/javascript_logo.png`} alt='JavaScript Logo' width={90} height={70} title='JavaScript — programming language of the web' />
          <p>JavaScript</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/typescript_logo.png`} alt='TypeScript Logo' width={120} height={70} title='TypeScript — typed superset of JavaScript' />
          <p>TypeScript</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/react_logo.png`} alt='React Logo' width={70} height={70} title='React — UI library for building components' />
          <p>React</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/nextjs_logo.png`} alt='Next.js Logo' width={70} height={70} title='Next.js — React framework for apps & sites' />
          <p>Next.js</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/html_logo.png`} alt='HTML Logo' width={63} height={70} title='HTML — markup language for structuring web content' />
          <p>HTML</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/css_logo.png`} alt='CSS Logo' width={64} height={70} title='CSS — stylesheet language for styling web pages' />
          <p>CSS</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/sass_logo.png`} alt='SASS Logo' width={70} height={70} title='SASS — CSS preprocessor with variables & nesting' />
          <p>SASS</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/nodejs_logo.png`} alt='Node.js Logo' width={110} height={70} title='Node.js — JavaScript runtime on the server' />
          <p>Node.js</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/expressjs_logo.png`} alt='Express Logo' width={70} height={70} title='Express.js — minimalist Node.js web framework' />
          <p>Express.js</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/graphql_logo.png`} alt='GraphQL Logo' width={55} height={70} title='GraphQL — API query language & runtime' />
          <p>GraphQL</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/sql_logo.png`} alt='SQL Logo' width={70} height={70} title='SQL — relational database query language' />
          <p>SQL</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/mongodb_logo.png`} alt='MongoDB Logo' width={60} height={70} title='MongoDB — NoSQL document database' />
          <p>MongoDB</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/gcp_logo.png`} alt='GCP Logo' width={100} height={70} title='Google Cloud — cloud services platform' />
          <p>Google Cloud Platform</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/git_logo.png`} alt='Git Logo' width={70} height={70} title='Git — distributed version control system' />
          <p>Git</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/playwright.png`} alt='Playwright Logo' width={80} height={80} title='Playwright — end‑to‑end testing framework' />
          <p>Playwright</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/jest_logo.png`} alt='Jest Logo' width={80} height={70} title='Jest — JavaScript testing framework' />
          <p>Jest</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/figma_logo.png`} alt='Figma Logo' width={81} height={70} title='Figma — collaborative UI/UX design tool' />
          <p>Figma</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/webpack_logo.png`} alt='Webpack Logo' width={70} height={70} title='Webpack — JavaScript module bundler' />
          <p>Webpack</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/docker_logo.png`} alt='Docker Logo' width={90} height={70} title='Docker — containerization platform' />
          <p>Docker</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/claude_code_logo.png`} alt='Claude Code Logo' width={70} height={70} title='Claude Code — agentic coding assistant CLI' />
          <p>Claude Code</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/codex_logo.png`} alt='Codex Logo' width={70} height={70} title='Codex — OpenAI coding agent' />
          <p>Codex</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/github_copilot_logo.png`} alt='GitHub Copilot Logo' width={70} height={70} title='GitHub Copilot — AI pair‑programming assistant' />
          <p>GitHub Copilot</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/mcp_logo.png`} alt='MCP Logo' width={70} height={70} title='MCP — Model Context Protocol for connecting AI tools' />
          <p>MCP</p>
        </li>
        <li>
          <Image src={`${skillImageSource}/postman_logo.png`} alt='Postman Logo' width={79} height={70} title='Postman — API development & testing tool' />
          <p>Postman</p>
        </li>
      </ul>
    </main>
  );
}
