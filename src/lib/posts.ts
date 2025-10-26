import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
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
    const { data } = matter(fileContent);
    
    return {
      slug: folder,
      title: data.title,
      description: data.description,
      date: data.date,
      image: data.image,
    };
  });
  
  return posts;
}
