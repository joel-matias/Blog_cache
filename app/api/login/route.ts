const USERS: Record<string, string> = {
  alberto: 'alberto',
};

export async function POST(request: Request) {
  const { username, password } = await request.json();
  if (USERS[username] !== password) {
    return Response.json({ error: 'Credenciales incorrectas' }, { status: 401 });
  }

  const response = Response.json({ ok: true });
  response.headers.set(
    'Set-Cookie',
    `session=${username}; Path=/; HttpOnly; SameSite=Lax`
  );
  return response;
}
