import { getAllHotels } from '@/graphql/queries';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { hotels } = await getAllHotels();
  return NextResponse.json({ hotels });
}
