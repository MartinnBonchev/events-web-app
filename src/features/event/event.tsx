import { useLocation } from "react-router-dom";

import Button from "@components/button";
import classes from "./event.module.css";
import { useAppDispatch } from "@store/hooks";
import {
  addToWishlist,
  removeFromWishlist,
} from "@store/reducers/events/events.slice";
import type EventProps from "./event.props";

export default function Event({
  id,
  date,
  description,
  image,
  price,
  title,
  location,
}: EventProps) {
  const currentLocation = useLocation();
  const dispatch = useAppDispatch();

  const handleAddToWishlist = () => dispatch(addToWishlist(id));

  const handleRemoveToWishlist = () => dispatch(removeFromWishlist(id));

  return (
    <div className={classes.container}>
      <img src={image.src} alt={image.alt} className={classes.event_logo} />

      <div className={classes.description_container}>
        <div>
          <h1 className={classes.event_title}>{title}</h1>

          <p className={classes.event_date}>{date}</p>
          <p>{location}</p>

          <p className={classes.event_description}>{description}</p>
        </div>

        <div className={classes.price_container}>
          <span>{price} $</span>

          {currentLocation.pathname !== "/wishlist" && (
            <Button onClick={handleAddToWishlist}>Add to wishlist</Button>
          )}
        </div>

        {currentLocation.pathname === "/wishlist" && (
          <Button onClick={handleRemoveToWishlist}>Remove</Button>
        )}
      </div>
    </div>
  );
}
