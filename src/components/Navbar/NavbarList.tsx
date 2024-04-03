import NavbarItem from './NavbarItem';
import routes from './navbar-data';
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
