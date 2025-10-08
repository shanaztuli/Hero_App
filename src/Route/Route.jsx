import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import Apps from "../Pages/Apps/Apps";
import CardDetails from "../Pages/CardDetailes/CardDetails";
import Error from "../Pages/ErrorPage/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,

        Component: Home,
      },
      {
        path: "home",

        Component: Home,
      },
      {
        path: "apps",

        Component: Apps,
      },
      {
        path: "installation",
        Component: Installation,
      },
      {
        path: "/apps/:id",
        Component: CardDetails,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
