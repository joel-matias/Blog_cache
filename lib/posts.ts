import fs from 'fs';
import path from 'path';

export type Post = {
  id: string;
  author: string;
  content: string;
  emoticon: string;
  timestamp: string;
};

const DATA_FILE = path.join(process.cwd(), 'data', 'posts.json');

export function readPosts(): Post[] {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw) as Post[];
  } catch {
    return [];
  }
}

export function writePost(post: Omit<Post, 'id' | 'timestamp'>): Post {
  const posts = readPosts();
  const newPost: Post = {
    ...post,
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
  };
  posts.push(newPost);
  fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2));
  return newPost;
}
