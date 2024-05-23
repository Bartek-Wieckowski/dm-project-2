import Link from 'next/link';
import Image from 'next/image';
import styles from './hotels.module.css';
import { BASE_URL } from '@/lib/helpers';
import { HotelPlace } from '@/types/types';

export const dynamic = 'force-dynamic';

const getAllHotels = async () => {
  const res = await fetch(`${BASE_URL}/api/allHotels`);
  const data = await res.json();

  return data;
};

export default async function HotelsPage() {
  const { hotels } = await getAllHotels();

  return (
    <section>
      {hotels.map((hotel: HotelPlace) => {
        const getHotelName = hotel.destinations.map((h, i) => h.hotels[i].name);
        const getHotelPhoto = hotel.photos.map((h) => h.url);
        return (
          <ul key={hotel.id} className={styles.list}>
            <li>
              <Link href={`/hotels/${hotel.id}`}>
                <div className={styles.item}>
                  <Image src={getHotelPhoto[0]} alt="Hotel" width={250} height={160} />
                  <div className={styles.content}>
                    <h2>{getHotelName}</h2>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        );
      })}
    </section>
  );
}
