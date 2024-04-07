import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Root from "./Root";
import Home from "../components/page/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h2>Error!</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Shop",
        element: <p>Shop</p>,
      },
      {
        path: "/Cart",
        element: <p>Cart</p>,
      },
      {
        path: "/user",
        element: <p>User</p>,
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
export default router;
