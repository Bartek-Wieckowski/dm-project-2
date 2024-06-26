// api/sign-up/route.ts
import { createUserProfile } from '@/graphql/mutations';
import { getProfileByUsername } from '@/graphql/queries';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  const { username, avatar, password } = await req.json();

  if (!username || !avatar || !password) {
    return NextResponse.json({ message: 'Missing required fields', code: 400 }, { status: 400 });
  }

  try {
    const existingUserResponse = await getProfileByUsername(username);
    const existingUser = existingUserResponse.userProfiles[0];

    console.log(existingUser);

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists', code: 400 }, { status: 400 });
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);

      await createUserProfile(username, hashedPassword, avatar);

      const loginUrl = new URL('/auth/sign-in', req.url);
      loginUrl.searchParams.set('from', req.nextUrl.pathname);
      return NextResponse.redirect(loginUrl.toString());
    }
  } catch (err) {
    console.log('Error:', err);
    return NextResponse.json({ message: 'Something went wrong', code: 500 }, { status: 500 });
  }
}
