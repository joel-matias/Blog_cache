import { Post } from '@/lib/posts';

export default function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return <p className="empty">No hay entradas aun.</p>;
  }

  return (
    <div className="post-list">
      {posts.map((p) => (
        <article key={p.id} className="post">
          <header>
            <span className="emoticon">{p.emoticon}</span>
            <strong>{p.author}</strong>
            <time>{new Date(p.timestamp).toLocaleString('es-MX')}</time>
          </header>
          <p>{p.content}</p>
        </article>
      ))}
    </div>
  );
}
