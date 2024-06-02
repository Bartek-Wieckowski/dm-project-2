'use client';
import React from 'react';
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
  p: ({ children }: MDXProps) => {
    const isTextOnly = React.Children.toArray(children).every((child) => typeof child === 'string');
    if (isTextOnly) {
      return <p style={{ color: 'red' }}>{children}</p>;
    }
    return <>{children}</>;
  },
  ol: ({ children }: MDXProps) => <ol style={{ color: 'teal' }}>{children}</ol>,
  code: ({ className, children }: MDXProps & { className: string }) => {
    const language = className?.replace('language-', '') || '';
    return <BlogBlockCode language={language} value={String(children).trim()} />;
  },
};

export function MdxContent({ source }: MdxContentProps) {
  //@ts-ignore
  return <MDXRemote {...source} components={MdxComponents} />;
}
