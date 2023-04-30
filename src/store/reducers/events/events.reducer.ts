import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import type EventsInitialState from "./events.types";

export const someName: CaseReducer<
  EventsInitialState,
  PayloadAction<number>
> = (state, action) => state;
