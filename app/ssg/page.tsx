import { unstable_cache } from 'next/cache';
import { readPosts } from '@/lib/posts';
import PostList from '@/components/postList';
import Link from 'next/link';

const getCachedPosts = unstable_cache(async () => readPosts(), ['posts-ssg'], {
  revalidate: false,
});

export default async function SsgPage() {
  const posts = await getCachedPosts();

  return (
    <main className="page">
      <h1>force-cache</h1>
      <p className="subtitle">
        Datos fijados en tiempo de build. No cambian hasta el siguiente build.
      </p>
      <code className="cache-code">cache: &apos;force-cache&apos;</code>
      <PostList posts={posts} />
      <Link href="/">Volver</Link>
    </main>
  );
}
