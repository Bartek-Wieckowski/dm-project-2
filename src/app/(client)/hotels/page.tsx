import Link from 'next/link';
import { unstable_noStore as noStore } from 'next/cache';

type Hotels = {
  id: string;
  slug: string;
  name: string;
};

async function getHotels(): Promise<Hotels[]> {
  
  
  const data = [
    { id: '1', slug: 'triada', name: 'Triada' },
    { id: '2', slug: 'filozof', name: 'Filozof' },
    { id: '3', slug: 'artemida', name: 'Artemida' },
  ];

  return data;
}

export default async function HotelsPage() {
  noStore();
  const data = await getHotels();

  return (
    <nav>
      {data.map((hotel) => (
        <ul key={hotel.id}>
          <li>
            <Link href={`/hotels/${hotel.slug}`}>{hotel.name}</Link>
          </li>
        </ul>
      ))}
    </nav>
  );
}
