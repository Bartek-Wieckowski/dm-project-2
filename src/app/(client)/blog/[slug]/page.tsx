import { Suspense } from 'react';
import Loading from './loading';

type BlogPageDetails = {
  id: string;
  slug: string;
  title: string;
  content: string;
  author: string;
};

export default function BlogPageDetails({ params }: { params: { slug: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <h1>{params.slug}</h1>
      </div>
    </Suspense>
  );
}

export function generateStaticParams() {
  const blogPosts = [
    {
      id: '1',
      slug: 'first-post',
      title: 'My First Blog Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'John Doe',
    },
    {
      id: '2',
      slug: 'second-post',
      title: 'Another Blog Post',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Jane Smith',
    },
    {
      id: '3',
      slug: 'third-post',
      title: 'Exciting News!',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'Alex Johnson',
    },
  ];

  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
