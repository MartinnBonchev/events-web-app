interface Performers {
  type: string;
  name: string;
  image: string;
  id: number;
  url: string;
  score: number;
  short_name: string;
  image_attribution: string;
}

export interface EventResponse {
  type: string;
  id: number;
  datetime_utc: string;
  venue: {
    state: string;
    name: string;
    score: number;
    address: string;
    city: string;
    id: number;
  };
  performers: Performers[];
  stats: {
    average_price: number;
    lowest_price: number;
    highest_price: number;
  };
  url: string;
  title: string;
  description: string;
}

interface Event {
  id: number;
  title: string;
  price: number;
  date: string;
  description: string;
  category: string;
  image: {
    src: string;
    alt: string;
  };
  location: string;
}

export interface CreateEvent extends Omit<Event, "id" | "image"> {
  image: string;
}

export default interface EventsInitialState {
  wishlist: Event[];
  events: Event[];
  filteredEvents: Event[];
  loading: boolean;
  error: string | null;
}
