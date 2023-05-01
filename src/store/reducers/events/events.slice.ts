import { createSlice } from "@reduxjs/toolkit";

import {
  addToWishlistAction,
  filterEventsByTitleAction,
  filterEventsByCategoryAction,
  removeFromWishlistAction,
  createEventAction,
} from "./events.actions";
import { fetchEvents } from "./events.thunk";
import type EventsInitialState from "./events.types";

const initialState: EventsInitialState = {
  wishlist: [],
  events: [],
  filteredEvents: [],
  loading: false,
  error: null,
};

const { reducer, actions } = createSlice({
  name: "events",
  initialState,
  reducers: {
    addToWishlist: addToWishlistAction,
    removeFromWishlist: removeFromWishlistAction,
    filterEventsTitle: filterEventsByTitleAction,
    filterEventsCategory: filterEventsByCategoryAction,
    createEvent: createEventAction
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchEvents.fulfilled, (state, { payload }) => {
      state.events = payload;
    });
    builder.addCase(fetchEvents.rejected, (state) => {
      state.error = "Something went wrong!";
    });
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  filterEventsTitle,
  filterEventsCategory,
  createEvent
} = actions;

export default reducer;
