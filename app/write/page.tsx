import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import WriteForm from '@/components/WriteForm';

export default async function WritePage() {
  const cookieStore = await cookies();
  const session = cookieStore.get('session');
  if (!session?.value) {
    redirect('/login');
  }

  return (
    <main className="page">
      <h1>Nueva entrada</h1>
      <p className="subtitle">
        Conectado como <strong>{session.value}</strong>
      </p>
      <WriteForm />
      <Link href="/">Volver</Link>
    </main>
  );
}
