import React, { Suspense } from 'react';
import Loading from './loading';
import { notFound } from 'next/navigation';
import { MdxContent } from '@/app/MdxContent';
import { client } from '@/contentful/config';
import { serialize } from 'next-mdx-remote/serialize';
import { type MDXRemoteSerializeResult } from 'next-mdx-remote';

type PostCMS = {
  serialized: {
    description: MDXRemoteSerializeResult;
  };
} & { title: string; tags: string[] };
type TagsOnly = Pick<PostCMS, 'tags'>;

export default async function BlogFromCMS({ params }: { params: { id: string } }) {
  const post = await getPostFromCMS(params.id);
  if (!post) {
    return notFound();
  }
  return (
    <Suspense fallback={<Loading />}>
      <h1>{post.title}</h1>
      <ul style={{ display: 'flex', gap: '1rem' }}>
        tagi:
        {post?.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <MdxContent source={post.serialized.description} />
    </Suspense>
  );
}

export async function getPostFromCMS(id: string): Promise<PostCMS | null> {
  try {
    const response = await client.getEntries({
      content_type: 'recipe',
      'sys.id': id,
    });

    if (response.items && response.items.length > 0) {
      const item = response.items[0];
      const serializedDescription = await serialize(item.fields.description as string);
      const content = item.fields.content as TagsOnly;
      const tags = content?.tags;

      const post: PostCMS = {
        serialized: {
          description: serializedDescription,
        },
        title: item.fields.title as string,
        tags,
      };

      return post;
    }

    return null;
  } catch (error) {
    console.error('Error fetching post from Contentful:', error);
    return null;
  }
}
