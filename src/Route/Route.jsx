import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Installation from "../Pages/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "home",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "installation",
        Component: Installation,
      },
    ],
  },
]);
