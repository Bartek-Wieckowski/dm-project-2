'use client';

import BlogBlockCode from '@/components/Blog/BlogBlockCode';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import Link from 'next/link';

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};
type MDXProps = { children: React.ReactNode };

const MdxComponents = {
  a: ({ children, href }: MDXProps & { href: string }) => <Link href={href}>{children}</Link>,
  h1: ({ children }: MDXProps) => <h1>{children}</h1>,
  p: ({ children }: MDXProps) => <p>{children}</p>,
  code: ({ className, children }: MDXProps & { className: string }) => {
    const language = className?.replace('language-', '') || '';
    return <BlogBlockCode language={language} value={String(children).trim()} />;
  },
  
};

export function MdxContent({ source }: MdxContentProps) {
  //@ts-ignore
  return <MDXRemote {...source} components={MdxComponents} />;
}
