import React, { use } from "react";
import Book from "./Book";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const Books = () => {
  const books = use(booksPromise);
  console.log(books);
  return (
    <div className="">
      <h3 className="my-10 text-center text-3xl font-semibold">Books</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {books.map((book) => (
          <Book book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
