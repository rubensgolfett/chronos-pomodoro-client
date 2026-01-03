import styles from "./style.module.css";
import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from "lucide-react";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#">
        <HomeIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <SettingsIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <SunIcon />
      </a>
    </nav>
  );
}
