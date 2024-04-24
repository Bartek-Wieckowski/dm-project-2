import { Suspense } from 'react';
import Loading from './loading';
import { getAllHotels, getSingleHotel } from '@/graphql/queries';
import styles from "./hotelDetails.module.css"

export default async function HotelPage({ params }: { params: { slug: string } }) {
  const { hotel: singleHotel } = await getSingleHotel(params.slug);
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.hotelCard}>
        <h1>{singleHotel?.name}</h1>
        <div className={styles.hotelCardMoreInfo}>
          <span>{singleHotel?.phone}</span>
          <span>{singleHotel?.rooms}</span>
        </div>
        <p>{singleHotel?.description}</p>
      </div>
    </Suspense>
  );
}

export async function generateStaticParams() {
  const { hotels } = await getAllHotels();

  return hotels.map((hotel) => ({
    slug: hotel.id,
  }));
}
// export const dynamicParams = false
