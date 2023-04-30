import { createBrowserRouter } from "react-router-dom";
import App from "@root/App";
import Wishlist from "@root/pages/wishlist/wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
]);

export default router;
