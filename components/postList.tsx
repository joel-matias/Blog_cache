import { Post } from '@/lib/posts';

export default function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return <p className="text-gray-500 italic text-sm">No hay entradas aun.</p>;
  }

  return (
    <div className="mt-6">
      {posts.map((p) => (
        <article key={p.id} className="border-b border-gray-100 py-4 last:border-b-0">
          <header className="flex items-center gap-2 mb-1 text-sm text-gray-600">
            <span className="font-mono text-base text-gray-700">{p.emoticon}</span>
            <strong>{p.author}</strong>
            <time>{new Date(p.timestamp).toLocaleString('es-MX')}</time>
          </header>
          <p className="m-0 leading-relaxed">{p.content}</p>
        </article>
      ))}
    </div>
  );
}
