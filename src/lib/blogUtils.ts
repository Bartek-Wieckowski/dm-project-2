import fs from 'fs';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

import 'server-only';

export type FrontmatterData = {
  title: string;
  author: string;
  desc: string;
  imageName: string;
  publishedAt: string;
  tags: string;
};

type Post = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: FrontmatterData;
};

const PATH_TO_BLOG_POSTS = '/src/app/(client)/blog/[slug]/(blogPosts)';

// tak było
// export const getPostsFileNames = () => {
//   const dir = path.join(process.cwd(), PATH_TO_BLOG_POSTS);
//   const NAME_PART = 0;
//   const fileNames = fs.readdirSync(path.join(dir)).map((file) => file.split('.')[NAME_PART]);
//   return fileNames;
// };

export const getPostsFileNames = () => {
  const dir = path.join(process.cwd(), PATH_TO_BLOG_POSTS);
  const fileNames = fs.readdirSync(dir);

  const filesWithStats = fileNames.map((fileName) => {
    const filePath = path.join(dir, fileName);
    const stats = fs.statSync(filePath);
    return { fileName, birthtime: stats.birthtime };
  });

  filesWithStats.sort((a, b) => b.birthtime.getTime() - a.birthtime.getTime());

  return filesWithStats.map((file) => file.fileName.replace('.mdx', ''));
};

export const getPost = async (slug: string) => {
  try {
    const raw = await fs.readFileSync(path.join(process.cwd(), `${PATH_TO_BLOG_POSTS}/${slug}.mdx`), 'utf-8');
    const serialized = await serialize(raw, {
      parseFrontmatter: true, // włącza serializację frontmattera
    });
    return { frontmatter: serialized.frontmatter, serialized } as Post;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    throw new Error("Can't parse post!");
  }
};
