import { client } from '@/contentful/config';
import { Entry } from 'contentful';
import { getPostsFileNames } from '@/lib/blogUtils';
import { formatFileName } from '@/lib/helpers';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const fileNames = getPostsFileNames();
  const posts = await getPostsFromContentful();

  return (
    <>
      <ul>
        <h2 style={{ marginBottom: '2rem' }}>posty z plików</h2>
        {fileNames.map((file) => (
          <li key={file}>
            <Link href={`/blog/${file}`}>{formatFileName(file)}</Link>
          </li>
        ))}
      </ul>
      <hr style={{ width: '100%' }} />
      <ul>
        <h2 style={{ marginBottom: '2rem' }}>posty z cms</h2>
        {posts?.map((post) => (
          <li key={post.title as string}>
            <Link href={`/blog/blog-cms/${post.id}`}>{post.title as string}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getPostsFromContentful() {
  try {
    const response = await client.getEntries({ content_type: 'recipe' });
    if (response.items) {
      const posts = response.items.map((item: Entry) => ({
        id: item.sys.id,
        title: item.fields.title,
      }));
      return posts;
    }
  } catch (error) {
    console.error('Error fetching posts from Contentful:', error);
  }
}
