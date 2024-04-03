'use client';
import Link from 'next/link';
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';

type NavbarItemProps = {
  path: Object;
  label: string;
};

export default function NavbarItem({ path, label }: NavbarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <li className={styles.navbarItem}>
      <Link href={path} className={isActive ? styles.activeLink : ''}>
        {label}
      </Link>
    </li>
  );
}
