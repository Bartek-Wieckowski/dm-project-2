import type { Metadata } from 'next';
import FooterList from '@/components/Footer/FooterList';

export const metadata: Metadata = {
  title: 'Check our all available Hotel list',
  description: 'Best hotels blabla....Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, ullam?',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <FooterList />
    </>
  );
}
