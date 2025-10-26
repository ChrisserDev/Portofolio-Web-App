import './blog.scss';
import Link from 'next/link';
import { getBlogPosts, type BlogPost } from '@/lib/posts';
import TopicsSlider from './BlogTopicsSlider';

export default function Blog(): React.JSX.Element {
  const posts = getBlogPosts();
  return (
    <main className='blog-page-container'>
      <h1>
        Hey, <span className='accent-underline'>welcome</span> to my <span className='accent-underline'>blog</span> 👋
      </h1>
      <p className='blog-page-introduction'>
        This is where I share what I&apos;m <span className='highlight'>learning</span> (and sometimes <span className='highlight'>unlearning</span>) while building with modern web technologies. <br/>  <br/>
        Have a look below and explore the topics that interest you most. Whether you&apos;re just starting out or already deep in the stack, I hope you find something <span className='highlight'>useful</span> here — or at least something that sparks an <span className='highlight'>idea</span> for your next project.
      </p>
      <TopicsSlider />
      
      <div className="blog-posts">
        <h2>Latest Posts</h2>
        {posts.map((post: BlogPost) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <time>{post.date}</time>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
