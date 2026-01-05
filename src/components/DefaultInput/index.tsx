import style from "./style.module.css";

type DefaultInputProps = {
  label: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  type,
  id,
  label,
  ...props
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} className={style.input} placeholder={props.placeholder} {...props}/>
    </>
  );
}
