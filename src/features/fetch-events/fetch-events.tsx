import { useEffect } from "react";
import { BeatLoader } from "react-spinners";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  selectEventsError,
  selectEventsLoading,
} from "@store/reducers/events/events.selectors";
import { fetchEvents } from "@store/reducers/events/events.thunk";

import classes from "./fetch-events.module.css";

import type FetchEventsProps from "./fetch-events.props";

export default function FetchEvents({ children }: FetchEventsProps) {
  const dispatch = useAppDispatch();

  const loading = useAppSelector(selectEventsLoading);
  const error = useAppSelector(selectEventsError);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  if (loading) {
    return (
      <div className={classes.loader}>
        <BeatLoader color="#19a7ce" />
      </div>
    );
  }

  if (error) {
    <p>{error}</p>;
  }

  return children;
}
