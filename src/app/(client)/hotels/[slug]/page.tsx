import { Suspense } from 'react';
import { getAllHotels, getHotelAllComments, getSingleHotel } from '@/graphql/queries';
import Loading from './loading';
import styles from './hotelDetails.module.css';
import CommentsSection from '@/components/Comments/CommentsSection';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import HotelContectUs from '@/components/HotelContactUs/HotelContectUs';

export const dynamic = 'force-dynamic';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  const { hotel: singleHotel } = await getSingleHotel(slug);

  if (!singleHotel) {
    notFound();
  }

  return {
    title: singleHotel?.name,
    description: singleHotel?.description,
  };
}

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
        <div>
          <Image width={400} height={400} src={singleHotel.photos[0].url} alt={singleHotel.name} />
        </div>
        <p>{singleHotel?.description}</p>
      </div>
      <hr style={{ width: '100%' }} />
      <div className={styles.hotelForm}>
        <CommentsSection hotelName={singleHotel.name} comments={comments} />
      </div>
      <hr style={{ width: '100%' }} />
      <div className={styles.hotelForm}>
        <HotelContectUs hotelName={singleHotel.name} />
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
