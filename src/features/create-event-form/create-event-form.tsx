import { useMemo } from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

import Input from "@components/input";
import Button from "@components/button";
import Select from "@components/select";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectCategories } from "@store/reducers/events/events.selectors";
import { createEvent } from "@store/reducers/events/events.slice";
import type { CreateEvent } from "@store/reducers/events/events.types";

import classes from "./create-event-form.module.css";

const schema = Joi.object({
  title: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
  price: Joi.number().min(1).required(),
  date: Joi.date().required(),
  image: Joi.string().trim().required(),
  category: Joi.string().trim().required(),
  location: Joi.string().trim().required(),
});

export default function CreateEventForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      date: "",
      image: "",
      category: "",
      location: "",
    },
    resolver: joiResolver(schema),
  });
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

  const onSubmit = (data: CreateEvent) => dispatch(createEvent(data));

  return (
    <form className={classes.form_container} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input placeholder="Title..." {...register("title")} />

        {errors.title?.message && (
          <p className={classes.error}>{errors.title?.message}</p>
        )}
      </div>

      <div>
        <Input
          placeholder="Description..."
          {...register("description", { required: true })}
        />

        {errors.description?.message && (
          <p className={classes.error}>{errors.description?.message}</p>
        )}
      </div>

      <div>
        <Select
          placeholder="Category..."
          options={options}
          {...register("category", { required: true })}
        />

        {errors.category?.message && (
          <p className={classes.error}>{errors.category?.message}</p>
        )}
      </div>

      <div>
        <Input
          type="number"
          placeholder="Price..."
          {...register("price", { required: true })}
        />

        {errors.price?.message && (
          <p className={classes.error}>{errors.price?.message}</p>
        )}
      </div>

      <div>
        <Input
          type="date"
          placeholder="Date..."
          {...register("date", { required: true })}
        />

        {errors.date?.message && (
          <p className={classes.error}>{errors.date?.message}</p>
        )}
      </div>

      <div>
        <Input
          placeholder="Image..."
          {...register("image", { required: true })}
        />

        {errors.image?.message && (
          <p className={classes.error}>{errors.image?.message}</p>
        )}
      </div>

      <div>
        <Input
          placeholder="Location..."
          {...register("location", { required: true })}
        />

        {errors.location?.message && (
          <p className={classes.error}>{errors.location?.message}</p>
        )}
      </div>

      <Button type="submit">Create Event</Button>
    </form>
  );
}
