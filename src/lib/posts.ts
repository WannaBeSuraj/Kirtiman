'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import readingTime from 'reading-time';

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

const postsDir = path.join(process.cwd(), 'content', 'blog');

export async function getAllPosts(): Promise<PostMeta[]> {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith('.md'));
  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const fullPath = path.join(postsDir, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);
      return {
        slug,
        title: data.title || slug,
        description: data.description || content.slice(0, 140),
        date: data.date || '2025-01-15',
        readTime: stats.text,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  const stats = readingTime(content);
  return {
    slug,
    title: data.title || slug,
    description: data.description || content.slice(0, 140),
    date: data.date || '2025-01-15',
    contentHtml,
    readTime: stats.text,
  };
}
