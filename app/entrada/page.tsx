import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import WriteForm from '@/components/WriteForm';

export default async function EntradaPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get('session');
  if (!session?.value) {
    redirect('/login');
  }

  return (
    <main className="max-w-2xl mx-auto mt-8 px-4">
      <h1>Nueva entrada</h1>
      <p className="text-gray-600 text-sm mt-1 mb-5">
        Conectado como <strong>{session.value}</strong>
      </p>
      <WriteForm />
      <Link href="/">Volver</Link>
    </main>
  );
}
