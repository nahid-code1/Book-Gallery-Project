import React, { use } from "react";
import Book from "./Book";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const Books = () => {
  const books = use(booksPromise);
  console.log(books);
  return (
    <div className=" gap-10">
      {books.map((book) => (
        <Book book={book}></Book>
      ))}
    </div>
  );
};

export default Books;
