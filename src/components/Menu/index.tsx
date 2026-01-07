import styles from "./style.module.css";
import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
type AvailableTheme = "dark" | "light";
export function Menu() {
  const [theme, setTheme] = useState<AvailableTheme>("dark");

  function handleChangeTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }
  useEffect(() => {
    console.log(`Setting theme to ${theme}`);
    document.documentElement.setAttribute("data-theme", theme);

    return () => {
      
      document.documentElement.removeAttribute("data-theme");
      console.log("Cleaning up theme attribute");
    };
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="go to main Menu"
        title="Go to Home"
      >
        <HomeIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="go to History"
        title="Go to History"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="go to Settings"
        title="Go to Settings"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="change the Theme"
        title="Change the Theme"
        onClick={handleChangeTheme}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
