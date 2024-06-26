import { MetadataRoute } from 'next/types';

import { BASE_URL } from '@/lib/helpers';
import { getAllHotels } from '@/graphql/queries';
import { getPostsFileNames } from '@/lib/blogUtils';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [{ hotels }, posts] = await Promise.all([getAllHotels(), getPostsFileNames()]);

  return [
    {
      priority: 1,
      url: BASE_URL,
    },
    {
      priority: 0.8,
      url: `${BASE_URL}/about`,
    },
    {
      priority: 0.8,
      url: `${BASE_URL}/hotels`,
    },
    ...hotels.map((hotel: { id: string }) => ({
      url: `${BASE_URL}/hotels/${hotel.id}`,
    })),
    {
      priority: 0.7,
      url: `${BASE_URL}/blog`,
    },
    ...posts.map((post) => ({
      lastModified: new Date().toISOString(),
      priority: 0.7,
      url: `${BASE_URL}/blog/${post}`,
    })),
  ];
}
