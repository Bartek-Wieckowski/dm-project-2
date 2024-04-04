import styles from "../admin.module.css"
export default function AdminPage() {
  return (
    <>
      <aside className={styles.adminAside}>
        <p>Dashboard</p>
        <p>Users</p>
      </aside>
      <div className={styles.adminContent}>
        <h1>Admin Panel</h1>
      </div>
    </>
  );
}
