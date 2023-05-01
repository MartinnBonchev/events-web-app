import { createBrowserRouter } from "react-router-dom";
import App from "@root/App";
import Wishlist from "@pages/wishlist/wishlist";
import CreateEvent from "@pages/create-event";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/create-event",
    element: <CreateEvent />,
  },
]);

export default router;
