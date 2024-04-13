import { routes } from '@/lib/routes';
import NavbarItem from './NavbarItem';
import styles from './navbar.module.css';

export default function NavbarList() {
  return (
    <ul className={styles.navbarList}>
      {routes.map((route) => (
        <NavbarItem key={route.label} path={route.path} label={route.label} />
      ))}
    </ul>
  );
}
