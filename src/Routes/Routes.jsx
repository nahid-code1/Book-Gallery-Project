import { createBrowserRouter } from "react-router";
import Main from "../Layouts/Main/Main";
import Books from "../Components/Books/Books";
import Home from "../Pages/Home/Home";
import Error from "../Components/Error/Error";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ListedBooks from "../Components/Listed Books/ListedBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "books",
        element: <Books></Books>,
      },
      {
        path: "listed-books",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/booksData.json"),
      },
    ],
    errorElement: <Error></Error>,
  },
]);
