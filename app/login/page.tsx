'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      router.push('/entrada');
    } else {
      const data = await res.json();
      setError(data.error || 'Error al iniciar sesion');
    }
  }

  return (
    <main className="max-w-2xl mx-auto mt-8 px-4">
      <h1>Iniciar sesion</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-6">
        <label className="flex flex-col gap-1 text-sm">
          Usuario
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
            className="p-2 border border-gray-300 w-full bg-white focus:outline-none focus:border-gray-600"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Contrasena
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            className="p-2 border border-gray-300 w-full bg-white focus:outline-none focus:border-gray-600"
          />
        </label>
        {error && <p className="text-red-700 text-sm">{error}</p>}
        <button type="submit" className="px-6 py-2 bg-gray-800 text-white cursor-pointer self-start hover:bg-gray-600">
          Entrar
        </button>
      </form>
      <Link href="/">Volver</Link>
    </main>
  );
}
