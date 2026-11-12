import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext/BookProvider";
import Book from "../Books/Book";
const Readlist = () => {
  const { readList } = useContext(BookContext);
  if (readList.length === 0) {
    return (
      <div className="h-[50vh] flex items-center justify-center bg-gray-100">
        <h3 className="font-semibold text-3xl">
          No books added to readlist yet...
        </h3>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {readList.map((book, i) => (
          <Book book={book} key={i}></Book>
        ))}
      </div>
    </div>
  );
};

export default Readlist;
