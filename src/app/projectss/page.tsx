import Link from 'next/link';
import Image from 'next/image';
import { type JSX } from 'react';
import { db } from '@/db';
import { projects } from '@/db/schema';
import { desc } from 'drizzle-orm';
import './projects.scss';

export const dynamic = 'force-dynamic';

export default async function Projects(): Promise<JSX.Element> {
  const projectEntries = await db.select().from(projects).orderBy(desc(projects.id));

  return (
    <main className='projects-page-container'>
      <h1>Projects</h1>
      <ul className='projects-list'>
        {projectEntries.map((project) => (
          <li key={project.id} className='project-card'>
            <article className='project-card-content'>
              <div className='project-visual'>
                <Image src={project.image} alt={project.title} width={860} height={420} />
              </div>
              <div className='project-card-body'>
                <header className='project-card-header'>
                  <h2>{project.title}</h2>
                  <nav className='project-links'>
                    <Link href={project.demo[0]} target='_blank' rel='noreferrer noopener'>
                        GitHub Repo
                    </Link>
                    <Link href={project.demo[1]} target='_blank' rel='noreferrer noopener'>
                      Live Demo
                    </Link>
                  </nav>
                </header>
                <p className='project-description'>{project.description}</p>
                <ul className='project-tech-stack'>
                  {project.stack.map((tech) => (
                    <li key={`${project.id}-${tech}`}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
