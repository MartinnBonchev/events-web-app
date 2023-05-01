import { forwardRef } from "react";
import type { LegacyRef } from "react";

import type SelectProps from "./select.props";

import classes from "./select.module.css";

const Select = forwardRef(
  (
    { options, ...props }: JSX.IntrinsicElements["select"] & SelectProps,
    ref
  ) => {
    return (
      <select
        ref={ref as LegacyRef<HTMLSelectElement>}
        className={classes.select}
        defaultValue={undefined}
        {...props}
      >
        <option value="">Choose a category</option>
        {options.map((el) => (
          <option key={el.value} value={el.value}>
            {el.label}
          </option>
        ))}
      </select>
    );
  }
);

export default Select;
