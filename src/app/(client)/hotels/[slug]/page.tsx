import { Suspense } from 'react';
import { getAllHotels, getHotelAllComments, getSingleHotel } from '@/graphql/queries';
import Loading from './loading';
import styles from './hotelDetails.module.css';
import CommentsSection from '@/components/Comments/CommentsSection';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function HotelPage({ params }: { params: { slug: string } }) {
  const { hotel: singleHotel } = await getSingleHotel(params.slug);

  if (!singleHotel) return notFound();

  const { hotel } = await getHotelAllComments(singleHotel.name);
  const comments = hotel?.reviews || [];

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
      <hr style={{ width: '100%' }} />
      <div className={styles.hotelForm}>
        <CommentsSection hotelName={singleHotel.name} comments={comments} />
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
