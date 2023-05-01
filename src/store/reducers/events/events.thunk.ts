import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import type { EventResponse } from "./events.types";

export const fetchEvents = createAsyncThunk("events/get-events", async () => {
  const response = await axios<{ events: EventResponse[] }>(
    `${import.meta.env.VITE_SEATGEEK_BASE_URL}/${
      import.meta.env.VITE_SEATGEEK_URL_VERSION
    }/events?client_id=${import.meta.env.VITE_SEATGEEK_CLIENT_ID}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_SEATGEEK_API_TOKEN}`,
      },
    }
  );

  const events = response.data.events.map((event) => {
    const [performer] = event.performers.slice(0, 1);
    const formattedCategory = event.type.split("_").join(" ");
    const [firstLetter] = formattedCategory;

    const category = firstLetter.toUpperCase() + formattedCategory.substring(1);
    const date = new Date(event.datetime_utc).toUTCString();

    return {
      id: event.id,
      title: event.title,
      image: {
        src: performer.image,
        alt: performer.image_attribution,
      },
      location: `${event.venue.city}, ${event.venue.address}`,
      // Some of the events did not have price so I am hard coding it to 100, event though I know it is not a good practice
      price: event.stats.average_price || 100,
      description: event.description,
      date,
      category,
    };
  });

  return events;
});
