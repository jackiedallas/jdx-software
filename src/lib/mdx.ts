import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface PostMeta {
  title: string;
  date: string;
  description: string;
  [key: string]: any;
}

export interface Post {
  slug: string;
  meta: PostMeta;
  content: string;
}

export interface PostWithHtml extends Omit<Post, 'content'> {
  contentHtml: string;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${realSlug}`);
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: data as PostMeta,
    content,
  };
}

export async function getPostHtml(slug: string): Promise<PostWithHtml> {
  const { content, ...rest } = getPostBySlug(slug);
  const processedContent = await remark().use(html).process(content);
  
  return {
    ...rest,
    contentHtml: processedContent.toString(),
  };
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug));
  
  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    if (a.meta.date > b.meta.date) {
      return -1;
    } else {
      return 1;
    }
  });
}