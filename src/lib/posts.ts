import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const WORDS_PER_MINUTE = 200;

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  readingMinutes: number;
}

function estimateReadingMinutes(content: string): number {
  const text = content
    .replace(/```[\s\S]*?```/g, ' ') // strip fenced code blocks
    .replace(/<[^>]+>/g, ' '); // strip JSX/HTML tags
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

export function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), 'src/app/blog');

  // Get all folder names in the blog directory
  const folders = fs.readdirSync(blogDir).filter(name =>
    fs.statSync(path.join(blogDir, name)).isDirectory(),
  );

  // Read each blog post
  const posts = folders.map(folder => {
    const filePath = path.join(blogDir, folder, 'page.mdx');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
      slug: folder,
      title: data.title,
      description: data.description,
      date: data.date,
      image: data.image,
      readingMinutes: estimateReadingMinutes(content),
    };
  });

  return posts;
}
