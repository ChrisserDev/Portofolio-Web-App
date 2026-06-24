import './blog.scss';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts, type BlogPost } from '@/lib/posts';

export default function Blog(): React.JSX.Element {
  const posts = getBlogPosts().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <main className='blog-page-container'>
      <h1>
        Hey, <span className='accent-underline'>welcome</span> to my <span className='accent-underline'>blog</span> 👋
      </h1>
      <p className='blog-page-introduction'>
        This is where I share what I&apos;m <span className='highlight'>learning</span> (and sometimes <span className='highlight'>unlearning</span>) while building with modern web technologies. <br/>  <br/>
        Have a look below and explore the topics that interest you most. Whether you&apos;re just starting out or already deep in the stack, I hope you find something <span className='highlight'>useful</span> here — or at least something that sparks an <span className='highlight'>idea</span> for your next project.
      </p>
      
      <div className="blog-posts">
        <h2>Latest Posts</h2>
        {posts.map((post: BlogPost) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article>
              {post.image && (
                <Image src={post.image} className={'blog-post-thumbnail'} alt={post.title} width={200} height={200} />
              )}
              <section>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <time>{post.date}</time>
              </section>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
