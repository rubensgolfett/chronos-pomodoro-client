import style from "./style.module.css";

export function Footer() {
  return (
    <footer className={style.footer}>
      <a href="">Understand how the Pomodoro Technique works📋</a>
      <a href="https://www.instagram.com/rubens.gdev/">
        &copy;Rubens Golfetto {new Date().getFullYear()}🧑‍💻
      </a>
    </footer>
  );
}
