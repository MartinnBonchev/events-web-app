import { createSelector } from "@reduxjs/toolkit";

import type EventsInitialState from "./events.types";

const selectSelf = (state: { events: EventsInitialState }) => state.events;

export const selectEvents = createSelector(selectSelf, (state) => state.events);

export const selectEventsLoading = createSelector(
  selectSelf,
  (state) => state.loading
);

export const selectEventsError = createSelector(
  selectSelf,
  (state) => state.error
);

export const selectWishlist = createSelector(
  selectSelf,
  (state) => state.wishlist
);

export const selectFilteredEvents = createSelector(
  selectSelf,
  (state) => state.filteredEvents
);

export const selectCategories = createSelector(selectEvents, (events) => [
  ...new Set(events.map((event) => event.category)),
]);
