import { readPosts, writePost } from '@/lib/posts';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET() {
  const posts = readPosts();
  const last5 = posts.slice(-5).reverse();
  return Response.json(last5);
}

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const session = cookieStore.get('session');
  if (!session?.value) {
    return Response.json({ error: 'No autorizado' }, { status: 401 });
  }

  const body = await request.json();
  const { content, emoticon } = body;
  if (!content?.trim()) {
    return Response.json({ error: 'Contenido requerido' }, { status: 400 });
  }

  const post = writePost({ author: session.value, content, emoticon: emoticon || ':)' });
  return Response.json(post, { status: 201 });
}
