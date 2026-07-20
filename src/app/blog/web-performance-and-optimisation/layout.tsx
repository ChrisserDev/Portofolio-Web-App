import type { ReactNode } from 'react';
import '../blog.scss';

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return (
    <main className='blog-post-container'>
      <article className='blog-post-content'>
        {children}
      </article>
    </main>
  );
}
