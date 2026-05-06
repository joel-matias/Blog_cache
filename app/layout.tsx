import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blogito',
  description: 'Demo de modelos de cache en Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
