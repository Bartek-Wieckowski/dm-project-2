import { getPostsFileNames } from '@/lib/blogUtils';
import { formatFileName } from '@/lib/helpers';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function BlogPage() {
  const fileNames = getPostsFileNames();
  return (
    <>
      <ul>
        {fileNames.map((file) => (
          <li key={file}>
            <Link href={`/blog/${file}`}>{formatFileName(file)}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
