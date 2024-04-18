import { Suspense } from 'react';
import Loading from './loading';

export default function HotelPage({ params }: { params: { slug: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <div>{params.slug}</div>
    </Suspense>
  );
}

export async function generateStaticParams() {
  const data = [
    { id: '1', slug: 'triada', name: 'Triada' },
    { id: '2', slug: 'filozof', name: 'Filozof' },
    { id: '3', slug: 'artemida', name: 'Artemida' },
  ];

  return data.map((post) => ({
    slug: post.slug,
  }));
}
// export const dynamicParams = false
