import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getPost, getPostsFileNames } from '@/lib/blogUtils';
import { MdxContent } from '@/app/MdxContent';
import { BASE_URL } from '@/lib/helpers';
import { Metadata } from 'next';
import Loading from './loading';

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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) {
    notFound();
  }

  return {
    authors: { name: post.frontmatter.author },
    description: post.frontmatter.desc,
    openGraph: {
      images: [`${BASE_URL}/blog/${post.frontmatter.imageName}.png`],
    },
    title: post.frontmatter.title,
    twitter: {
      images: [`${BASE_URL}/blog/${post.frontmatter.imageName}.png`],
    },
  };
}
