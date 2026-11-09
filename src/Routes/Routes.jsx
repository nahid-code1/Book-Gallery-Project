import { createBrowserRouter } from "react-router";
import Main from "../Layouts/Main/Main";
import Books from "../Components/Books/Books";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: Home,
      },
      {
        path: "books",
        element: <Books></Books>,
      },
    ],
  },
]);
