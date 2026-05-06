import Link from 'next/link';

export default function Home() {
  return (
    <main className="page">
      <h1>Blogito</h1>
      <p>Demo de modelos de cache en Next.js.</p>
      <nav className="links">
        <Link href="/ssg">
          <strong>force-cache</strong> — datos fijos del build
        </Link>
        <Link href="/isr">
          <strong>revalidate</strong> — actualiza cada 30s
        </Link>
        <Link href="/ssr">
          <strong>no-store</strong> — siempre fresco
        </Link>
        <Link href="/write">Escribir entrada</Link>
      </nav>
    </main>
  );
}
