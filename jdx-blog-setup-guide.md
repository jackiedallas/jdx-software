# Adding a Markdown-Based Blog to a Next.js + TypeScript Project

This guide assumes you're using **Next.js with TypeScript** and want to integrate a blog that reads Markdown posts from a `/content/blog` directory.

---

## 📁 Project Structure

```text
/my-nextjs-project
├── /content
│   └── /blog
│       ├── post-one.md
│       └── post-two.md
├── /pages
│   └── /blog
│       ├── index.tsx
│       └── [slug].tsx
├── /lib
│   └── mdx.ts
├── /components
│   └── BlogPost.tsx
├── next.config.js
├── tsconfig.json
```

---

## 📦 Required Packages

Install the following:

```bash
npm install gray-matter remark remark-html
```

---

## 📁 content/blog/post-example.md

Each blog post should use frontmatter:

```md
---
title: "Why I'm Not Selling You AI"
date: "2025-07-16"
description: "Why I chose not to make AI the selling point of Manualize—and what that means for how it works."
---

Content of your blog post goes here...
```

---

## 📁 lib/mdx.ts

```ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: data,
    content,
  };
}

export async function getPostHtml(slug: string) {
  const { content, ...rest } = getPostBySlug(slug);
  const processedContent = await remark().use(html).process(content);
  return {
    ...rest,
    contentHtml: processedContent.toString(),
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => getPostBySlug(slug));
}
```

---

## 📁 pages/blog/index.tsx

```tsx
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../../lib/mdx';

type Post = {
  slug: string;
  meta: {
    title: string;
    date: string;
    description: string;
  };
};

type Props = {
  posts: Post[];
};

export default function BlogIndex({ posts }: Props) {
  return (
    <div>
      <h1>JDX Software Blog</h1>
      {posts.map(({ slug, meta }) => (
        <div key={slug}>
          <h2><Link href={`/blog/${slug}`}>{meta.title}</Link></h2>
          <p>{meta.date}</p>
          <p>{meta.description}</p>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
};
```

---

## 📁 pages/blog/[slug].tsx

```tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostSlugs, getPostHtml } from '../../lib/mdx';

export default function BlogPost({ post }: any) {
  return (
    <article>
      <h1>{post.meta.title}</h1>
      <p>{post.meta.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.replace(/\.md$/, '') } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostHtml(params?.slug as string);
  return {
    props: { post },
  };
};
```

---

## ✅ Done!

You now have:
- A `/blog` index page
- A dynamic `[slug]` page per post
- Markdown rendering with frontmatter
- Easily extensible structure for styling and SEO

Want to extend this with MDX, tag filtering, or RSS? Just ask.
