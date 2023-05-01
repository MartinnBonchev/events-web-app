import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import FetchEvents from "@features/fetch-events";
import store from "@store/store";
import router from "@routes/routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <FetchEvents>
        <RouterProvider router={router} />
      </FetchEvents>
    </Provider>
  </React.StrictMode>
);
