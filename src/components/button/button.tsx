import classes from "./button.module.css";

export default function Button({
  type = "button",
  onClick,
  children,
  ...rest
}: Partial<JSX.IntrinsicElements["button"]>) {
  return (
    <button className={classes.button} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
