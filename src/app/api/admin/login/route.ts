import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const expectedPassword = process.env.ADMIN_PASSWORD || 'myadsphere2026';

    if (password !== expectedPassword) {
      return NextResponse.json({ success: false, error: 'Invalid admin credentials.' }, { status: 401 });
    }

    const cookieStore = await cookies();
    cookieStore.set('myadsphere_admin_session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });

    return NextResponse.json({ success: true, message: 'Admin login successful.' });
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json({ success: false, error: 'Login authentication failed.' }, { status: 500 });
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete('myadsphere_admin_session');
  return NextResponse.json({ success: true, message: 'Logged out.' });
}
