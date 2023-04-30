import { createSlice } from "@reduxjs/toolkit";

import { someName } from "./events.reducer";
import { fetchEvents } from "./events.thunk";
import type EventsInitialState from "./events.types";
import type { Events } from "./events.types";

const initialState: EventsInitialState = {
  events: [],
  loading: false,
  error: null,
};

const { reducer } = createSlice({
  name: "events",
  initialState,
  reducers: {
    someName,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchEvents.fulfilled,
      (state, { payload }: { payload: Events[] }) => {
        state.events = payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchEvents.rejected, (state) => {
      state.error = "Something went wrong!";
      state.loading = false;
    });
  },
});

export default reducer;
