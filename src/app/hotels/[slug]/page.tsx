
export default function HotelPage({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}
