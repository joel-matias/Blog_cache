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
    <>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Emoticon
          <div className="emoticons">
            {EMOTICONS.map((em) => (
              <button
                key={em}
                type="button"
                className={emoticon === em ? 'selected' : ''}
                onClick={() => setEmoticon(em)}
              >
                {em}
              </button>
            ))}
          </div>
        </label>
        <label>
          Entrada
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={4}
          />
        </label>
        {status === 'ok' && <p className="ok">Entrada publicada.</p>}
        {status === 'error' && <p className="error">Error al publicar.</p>}
        <button type="submit">Publicar</button>
      </form>
      <button className="btn-secondary" onClick={handleLogout}>
        Cerrar sesion
      </button>
    </>
  );
}
