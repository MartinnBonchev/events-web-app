import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEvents = createAsyncThunk("events/get-events", async () => {
  const response = await axios(
    `${import.meta.env.VITE_SEATGEEK_BASE_URL}/${
      import.meta.env.VITE_SEATGEEK_URL_VERSION
    }/events?client_ids=${import.meta.env.VITE_SEATGEEK_CLIENT_ID}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_SEATGEEK_API_TOKEN}`,
      },
    }
  );

  return response.data;
});
