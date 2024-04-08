import NavbarList from '@/components/Navbar/NavbarList';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarList />
      {children}
    </>
  );
}
