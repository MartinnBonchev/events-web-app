import { useMemo } from "react";
import type { ChangeEvent } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  filterEventsTitle,
  filterEventsCategory,
} from "@store/reducers/events/events.slice";
import Input from "@components/input";
import Select from "@components/select";
import { selectCategories } from "@store/reducers/events/events.selectors";

import classes from "./search.module.css";

export default function Search() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);

  const options = useMemo(
    () =>
      categories.map((category) => ({
        value: category,
        label: category,
      })),
    [categories]
  );

  const handleFilterTitle = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(filterEventsTitle(event.target.value));

  const handleFilterCategory = (event: ChangeEvent<HTMLSelectElement>) =>
    dispatch(filterEventsCategory(event.target.value));

  return (
    <div>
      <p className={classes.search_title}>Search events</p>

      <div className={classes.search_container}>
        <Input onChange={handleFilterTitle} placeholder="Title" />
        <Select
          onChange={handleFilterCategory}
          placeholder="Category"
          options={options}
        />
      </div>
    </div>
  );
}
