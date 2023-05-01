import { useAppDispatch, useAppSelector } from "@store/hooks";

import type FetchEventsProps from "./fetch-events.props";
import {
  selectEvents,
  selectEventsError,
  selectEventsLoading,
} from "@store/reducers/events/events.selectors";
import { fetchEvents } from "@store/reducers/events/events.thunk";
import { useEffect } from "react";

export default function FetchEvents({ children }: FetchEventsProps) {
  const dispatch = useAppDispatch();
  const events = useAppSelector(selectEvents);

  const loading = useAppSelector(selectEventsError);
  const error = useAppSelector(selectEventsLoading);

  useEffect(() => {
    if (!events.length) {
      dispatch(fetchEvents());
    }
  }, [dispatch, events]);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    <p>{error}</p>;
  }

  return children;
}
