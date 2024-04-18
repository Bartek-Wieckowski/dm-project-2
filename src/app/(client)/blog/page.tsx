import Link from 'next/link';

type BlogPage = {
  id: string;
  slug: string;
  title: string;
};

async function getPosts() {
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

  return blogPosts;
}

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
