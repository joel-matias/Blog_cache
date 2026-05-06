import { unstable_cache } from 'next/cache';
import { readPosts } from '@/lib/posts';
import PostList from '@/components/postList';
import Link from 'next/link';

const getRevalidatedPosts = unstable_cache(async () => readPosts(), ['posts-isr'], {
  revalidate: 30,
});

export default async function IsrPage() {
  const posts = await getRevalidatedPosts();

  return (
    <main className="page">
      <h1>revalidate (30s)</h1>
      <p className="subtitle">
        Datos actualizados como maximo cada 30 segundos.
      </p>
      <code className="cache-code">next: &#123; revalidate: 30 &#125;</code>
      <PostList posts={posts} />
      <Link href="/">Volver</Link>
    </main>
  );
}
