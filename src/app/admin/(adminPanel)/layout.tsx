import styles from '../admin.module.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className={styles.adminWrapper}>{children}</section>;
}
