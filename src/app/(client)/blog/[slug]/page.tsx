import { Suspense } from 'react';
import Loading from './loading';
import { notFound } from 'next/navigation';
import { getPost, getPostsFileNames } from '@/lib/blogUtils';
import { MdxContent } from '@/app/MdxContent';

export default async function BlogPageDetails({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) {
    return notFound();
  }
  return (
    <Suspense fallback={<Loading />}>
      <MdxContent source={post.serialized} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  const fileNames = getPostsFileNames();
  return fileNames.map((post) => ({
    slug: post,
  }));
}
