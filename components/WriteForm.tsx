'use client';
import { useState } from 'react';

const EMOTICONS = [':)', ':D', ':(', ':P'];

export default function WriteForm() {
  const [content, setContent] = useState('');
  const [emoticon, setEmoticon] = useState(':)');
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('idle');
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, emoticon }),
    });
    if (res.ok) {
      setContent('');
      setStatus('ok');
    } else {
      setStatus('error');
    }
  }

  async function handleLogout() {
    await fetch('/api/logout', { method: 'POST' });
    window.location.href = '/login';
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-6">
      <label className="flex flex-col gap-1 text-sm">
        Emoticon
        <div className="flex gap-2 flex-wrap">
          {EMOTICONS.map((em) => (
            <button
              key={em}
              type="button"
              className={
                emoticon === em
                  ? 'py-1 px-3 border border-gray-700 bg-gray-100 font-bold cursor-pointer font-mono'
                  : 'py-1 px-3 border border-gray-300 bg-white cursor-pointer font-mono'
              }
              onClick={() => setEmoticon(em)}
            >
              {em}
            </button>
          ))}
        </div>
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Entrada
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={4}
          className="p-2 border border-gray-300 w-full bg-white focus:outline-none focus:border-gray-600"
        />
      </label>
      {status === 'ok' && <p className="text-green-700 text-sm">Entrada publicada.</p>}
      {status === 'error' && <p className="text-red-700 text-sm">Error al publicar.</p>}
      <div className="flex gap-3 items-center">
        <button type="submit" className="px-6 py-2 bg-gray-800 text-white cursor-pointer hover:bg-gray-600">
          Publicar
        </button>
        <button type="button" className="px-4 py-2 bg-white border border-gray-300 cursor-pointer hover:bg-gray-100" onClick={handleLogout}>
          Cerrar sesion
        </button>
      </div>
    </form>
  );
}
