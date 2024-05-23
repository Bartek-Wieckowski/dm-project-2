import { getAllHotels } from '@/graphql/queries';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { hotels } = await getAllHotels();

    if (!hotels) {
      throw new Error('Invalid hotel data received');
    }

    return NextResponse.json({ hotels });
  } catch (error) {
    console.error('Error fetching hotels:', error);
    return NextResponse.error();
  }
}
