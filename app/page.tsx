import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto mt-8 px-4">
      <h1>Blogito</h1>
      <nav className="flex flex-col gap-3 mt-6">
        <Link href="/ssg" className="text-gray-700 no-underline border-b border-dashed border-gray-300 pb-2 text-sm hover:text-black hover:border-gray-700">
          <strong>force-cache</strong>
        </Link>
        <Link href="/isr" className="text-gray-700 no-underline border-b border-dashed border-gray-300 pb-2 text-sm hover:text-black hover:border-gray-700">
          <strong>revalidate</strong>
        </Link>
        <Link href="/ssr" className="text-gray-700 no-underline border-b border-dashed border-gray-300 pb-2 text-sm hover:text-black hover:border-gray-700">
          <strong>no-store</strong>
        </Link>
        <Link href="/entrada" className="text-gray-700 no-underline border-b border-dashed border-gray-300 pb-2 text-sm hover:text-black hover:border-gray-700">
          Escribir entrada
        </Link>
      </nav>
    </main>
  );
}
