import styles from './admin.module.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={styles.adminWrapper}>
      Admin panel
      {children}
    </section>
  );
}
