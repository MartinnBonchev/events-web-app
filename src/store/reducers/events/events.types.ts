interface Performers {
  type: string;
  name: string;
  image: string;
  id: number;
  url: string;
  score: number;
  short_name: string;
}

export interface Events {
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

export default interface EventsInitialState {
  events: Partial<Events>[];
  loading: boolean;
  error: string | null;
}
