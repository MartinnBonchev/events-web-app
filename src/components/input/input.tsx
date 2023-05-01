import { forwardRef } from "react";

import type { LegacyRef } from "react";

import classes from "./input.module.css";

const Input = forwardRef(
  ({ type = "text", ...rest }: JSX.IntrinsicElements["input"], ref) => {
    return (
      <input
        ref={ref as LegacyRef<HTMLInputElement>}
        className={classes.input}
        type={type}
        {...rest}
      />
    );
  }
);

export default Input