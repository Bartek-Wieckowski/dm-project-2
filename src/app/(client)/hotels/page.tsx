import { getAllHotels } from '@/graphql/queries';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function HotelsPage() {
  const { hotels } = await getAllHotels();

  return (
    <nav>
      {hotels.map((hotel) => (
        <ul key={hotel.description}>
          <li>
            <Link href={`/hotels/${hotel.description}`}>{hotel.description}</Link>
          </li>
        </ul>
      ))}
    </nav>
  );
}
