import Image from 'next/image';
import { ImageResponse } from 'next/og';
import { getSingleHotel } from '@/graphql/queries';
import { notFound } from 'next/navigation';

export const alt = 'Hotel';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function OgImage({ params }: { params: { slug: string } }) {
  const { hotel: singleHotel } = await getSingleHotel(params.slug);
  if (!singleHotel) {
    notFound();
  }

  return new ImageResponse(
    (
      <div>
        <p>Name: {singleHotel.name}</p>
        <p>Desc: {singleHotel.description}</p>
        <Image width={400} height={400} src={singleHotel.photos[0].url} alt={singleHotel.name} />
      </div>
    )
  );
}
