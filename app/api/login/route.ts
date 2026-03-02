import { NextResponse } from 'next/server';
import { createSessionValue, sessionCookieName, validateCredentials } from '@/lib/auth';

export async function POST(request: Request) {
  const formData = await request.formData();
  const username = String(formData.get('username') ?? '');
  const password = String(formData.get('password') ?? '');

  if (!validateCredentials(username, password)) {
    return NextResponse.redirect(new URL('/?error=invalid', request.url), 303);
  }

  const response = NextResponse.redirect(new URL('/dashboard', request.url), 303);
  response.cookies.set({
    name: sessionCookieName,
    value: createSessionValue(),
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8
  });

  return response;
}
