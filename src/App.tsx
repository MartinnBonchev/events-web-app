import { useNavigate } from "react-router-dom";

import Button from "@components/button";
import Event from "@features/event";
import Search from "@features/search";
import { useAppSelector } from "@store/hooks";
import {
  selectEvents,
  selectFilteredEvents,
  selectWishlist,
} from "@store/reducers/events/events.selectors";

import classes from "./App.module.css";

function App() {
  const events = useAppSelector(selectEvents);
  const filteredEvents = useAppSelector(selectFilteredEvents);
  const wishlist = useAppSelector(selectWishlist);
  const navigate = useNavigate();

  const handleNavigateWishlist = () => navigate("/wishlist");

  const handleNavigateCreateEvent = () => navigate("/create-event");

  return (
    <div className={classes.container}>
      <div>
        <Button onClick={handleNavigateWishlist}>Wishlist</Button>

        <Button onClick={handleNavigateCreateEvent}>Create Event</Button>
      </div>

      <Search />

      {(filteredEvents.length && wishlist.length ? filteredEvents : events).map(
        ({ date, description, id, title, price, image, location }) => (
          <Event
            key={id}
            id={id}
            date={date}
            description={description}
            image={image}
            title={title}
            location={location}
            price={price}
          />
        )
      )}
    </div>
  );
}

export default App;
