import style from "./style.module.css";
type HeadingProps = {
    text: React.ReactNode
}

export function Heading({text}: HeadingProps) {
  return <h1 className={style.heading}>{text}</h1>;
}
