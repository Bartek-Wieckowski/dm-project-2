'use client';
import Link from 'next/link';
import styles from './footer.module.css';

type FooterItemProps = {
  path: Object;
  label: string;
};

export default function FooterItem({ path, label }: FooterItemProps) {
  return (
    <li className={styles.footerItem}>
      <Link href={path}>{label}</Link>
    </li>
  );
}
