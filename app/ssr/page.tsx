import { readPosts } from '@/lib/posts';
import PostList from '@/components/postList';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function SsrPage() {
  const posts = readPosts();

  return (
    <main className="page">
      <h1>no-store</h1>
      <p className="subtitle">
        Datos frescos en cada solicitud. Siempre actualizados.
      </p>
      <code className="cache-code">cache: &apos;no-store&apos;</code>
      <PostList posts={posts} />
      <Link href="/">Volver</Link>
    </main>
  );
}
