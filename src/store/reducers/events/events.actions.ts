import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

import generateId from "@utils/generate-id";
import type EventsInitialState from "./events.types";
import type { CreateEvent } from "./events.types";

export const addToWishlistAction: CaseReducer<
  EventsInitialState,
  PayloadAction<number>
> = (state, { payload }) => {
  const newToAdd = state.events.find((el) => el.id === payload);

  if (!newToAdd) {
    throw new Error(`[action]:There is now event with id ${payload}`);
  }

  state.wishlist = [...state.wishlist, newToAdd];
  state.events = state.events.filter((el) => el.id !== newToAdd.id);
};

export const removeFromWishlistAction: CaseReducer<
  EventsInitialState,
  PayloadAction<number>
> = (state, { payload }) => {
  const removed = state.wishlist.find((el) => el.id === payload);

  if (!removed) {
    throw new Error(`[action]:There is now event with id ${payload}`);
  }

  state.wishlist = state.wishlist.filter((el) => el.id !== removed.id);
  state.events = [...state.events, removed];
};

export const filterEventsByTitleAction: CaseReducer<
  EventsInitialState,
  PayloadAction<string>
> = (state, { payload }) => {
  const pattern = new RegExp(payload);

  state.filteredEvents = state.events.filter((el) => el.title.match(pattern));
};

export const filterEventsByCategoryAction: CaseReducer<
  EventsInitialState,
  PayloadAction<string>
> = (state, { payload }) => {
  state.filteredEvents = state.events.filter((el) => el.category === payload);
};

export const createEventAction: CaseReducer<
  EventsInitialState,
  PayloadAction<CreateEvent>
> = (state, { payload }) => {
  const id = generateId();

  const newEvent: (typeof state.events)[number] = {
    ...payload,
    id,
    date: new Date(payload.date).toUTCString(),
    image: {
      src: payload.image,
      alt: `${payload.title} logo`,
    },
  };

  state.events = [...state.events, newEvent];
};
