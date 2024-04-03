import Link from 'next/link'

export default function Home() {
  return (
    <main>
     <Link href={{pathname: "/products",query: {name: "Adam"}}}>Products</Link>
     products/1?name=Adam
    </main>
  );
}