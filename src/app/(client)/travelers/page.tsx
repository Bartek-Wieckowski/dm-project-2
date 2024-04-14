import Image from 'next/image';

export default function TravelersPage() {
  return (
    <section>
      <Image src="https://picsum.photos/seed/picsum/536/354/" alt="photo" width={536} height={354} />
    </section>
  );
}

export async function generateStaticParams() {
  const posts = await fetch('https://dummyjson.com/users/search?q=John').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}