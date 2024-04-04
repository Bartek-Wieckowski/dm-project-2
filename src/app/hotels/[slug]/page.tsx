import { Suspense } from 'react';
import Loading from './loading';

async function simulatePromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
}

async function DataDummy() {
  const res = await simulatePromise();
  return <div>{res as boolean}</div>;
}

export default function HotelPage({ params }: { params: { slug: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <DataDummy/>
      <div>{params.slug}</div>
    </Suspense>
  );
}
