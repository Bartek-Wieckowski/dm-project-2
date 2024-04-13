import { footerRoutes } from "@/lib/routes";
import FooterItem from "./FooterItem";
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
