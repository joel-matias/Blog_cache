import { unstable_cache } from 'next/cache';
import { readPosts } from '@/lib/posts';
import PostList from '@/components/postList';
import Link from 'next/link';

const getCachedPosts = unstable_cache(
  async () => ({
    posts: readPosts(),
    renderedAt: new Date().toLocaleTimeString('es-MX'),
    color: Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0'),
  }),
  ['posts-ssg'],
  { revalidate: false },
);

export default async function SsgPage() {
  const { posts, renderedAt, color } = await getCachedPosts();

  return (
    <main className="max-w-2xl mx-auto mt-8 px-4">
      <h1>force-cache</h1>
      <p className="text-gray-600 text-sm mt-1 mb-5">
        Datos fijados en el cache
      </p>

      <div className="flex items-center gap-4 p-3 border border-gray-200 bg-gray-50 mb-6">
        <div className="w-12 h-12 shrink-0 border border-gray-300" style={{ backgroundColor: `#${color}` }} />
        <div className="flex flex-col gap-1 text-xs text-gray-500">
          <span>generado: {renderedAt}</span>
          <span>color: #{color}</span>
          <span className="text-gray-400">recarga la pagina — nunca cambia</span>
        </div>
      </div>

      <PostList posts={posts} />
      <Link href="/">Volver</Link>
    </main>
  );
}
