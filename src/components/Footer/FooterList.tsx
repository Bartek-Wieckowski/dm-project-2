import FooterItem from "./FooterItem";
import footerRoutes from "./footer-data";
import styles from "./footer.module.css"

export default function FooterList() {
  return (
    <ul className={styles.footerList}>
      {footerRoutes.map((route) => (
        <FooterItem key={route.label} path={route.path} label={route.label} />
      ))}
    </ul>
  );
}
